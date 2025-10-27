import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { cookies } from "next/headers";
import type {
  AnchorCompletion,
  AnchorSlot,
  DailyAnchorLog,
  DigestCadence,
  MetricCheckIn,
  MetricType,
  ProgressMilestone,
} from "@prisma/client";
import { getServerSession } from "next-auth";

type GoalId = string;

type AnchorDefinition = {
  slot: AnchorSlot;
  anchorText: string;
  evidenceLink?: string;
};

type EvidenceReference = {
  title: string;
  href: string;
};

type AnchorSummary = {
  slot: AnchorSlot;
  anchorText: string;
  emoji: string;
  goalId?: GoalId;
  evidence?: EvidenceReference;
  streak: number;
  weeklyPercent: number;
  completedToday: boolean;
  nudge: string;
  completionId: string | null;
};

type TimelineState = "past" | "current" | "upcoming";

type TimelineCard = {
  slot: AnchorSlot;
  emoji: string;
  state: TimelineState;
  anchors: {
    anchorText: string;
    completed: boolean;
    completionId: string | null;
    evidenceLink?: string;
  }[];
};

type MetricInsight = {
  metric: MetricType;
  label: string;
  emoji: string;
  currentValue: number | null;
  deltaLabel: string;
  direction: "up" | "down" | "flat";
  message: string;
  trend: {
    date: string;
    value: number;
  }[];
};

type GoalCard = {
  id: GoalId;
  title: string;
  emoji: string;
  headline: string;
  summary: string;
  highlights: string[];
  evidence: string;
  timeframe: string;
};

type DigestInfo = {
  enabled: boolean;
  cadence: DigestCadence;
  nextDigest: string;
  preview: string[];
};

type NextBestMove = {
  title: string;
  description: string;
  evidence: string;
  reference?: EvidenceReference;
  anchorText?: string;
  slot?: AnchorSlot;
  metric?: MetricType;
};

type MilestoneSummary = Pick<
  ProgressMilestone,
  "id" | "title" | "description" | "achievedAt" | "dismissedAt"
>;

type GoalMetricPreferenceSummary = {
  goalId: GoalId;
  metrics: MetricType[];
};

type MetricOption = {
  metric: MetricType;
  label: string;
  emoji: string;
  helpfulRange: string;
  recommendedGoals: GoalId[];
};

type LogWithRelations = DailyAnchorLog & {
  completions: AnchorCompletion[];
  metrics: MetricCheckIn[];
};

const SESSION_COOKIE = "hp_protocol_session";

export async function linkSessionProtocolsToUser(
  userId: string,
  sessionToken?: string | null
) {
  if (!userId) {
    return;
  }

  const token = sessionToken ?? cookies().get(SESSION_COOKIE)?.value ?? null;
  if (!token) {
    return;
  }

  const orphanedProtocols = await prisma.protocol.findMany({
    where: {
      sessionToken: token,
      userId: null,
    },
    select: {
      id: true,
    },
  });

  if (orphanedProtocols.length === 0) {
    return;
  }

  const protocolIds = orphanedProtocols.map((protocol) => protocol.id);

  await prisma.$transaction([
    prisma.protocol.updateMany({
      where: {
        id: {
          in: protocolIds,
        },
      },
      data: {
        userId,
      },
    }),
    prisma.dailyAnchorLog.updateMany({
      where: {
        protocolId: {
          in: protocolIds,
        },
        userId: null,
      },
      data: {
        userId,
      },
    }),
    prisma.metricCheckIn.updateMany({
      where: {
        protocolId: {
          in: protocolIds,
        },
        userId: null,
      },
      data: {
        userId,
      },
    }),
  ]);
}

export type DashboardSummary = {
  anchorSummaries: AnchorSummary[];
  timeline: TimelineCard[];
  metricInsights: MetricInsight[];
  goalCards: GoalCard[];
  goalMetricPreferences: GoalMetricPreferenceSummary[];
  metricOptions: MetricOption[];
  digest: DigestInfo;
  nextBestMove: NextBestMove | null;
  milestones: MilestoneSummary[];
  todayLogId: string | null;
  todayDate: string;
  protocolId: string | null;
};

const GOAL_DETAILS: Record<
  GoalId,
  {
    emoji: string;
    title: string;
    headline: string;
    summary: string;
    evidence: string;
    timeframe: string;
    keywords: string[];
  }
> = {
  sleep: {
    emoji: "🌙",
    title: "Sleep optimisation",
    headline: "Prime your circadian rhythm so deep sleep comes faster.",
    summary:
      "Morning light paired with evening dimness resets cortisol and melatonin timing so latency drops and recovery improves.",
    evidence:
      "Huberman Lab #31 highlights 25–50% faster sleep onset when morning light + evening dimness are consistent.",
    timeframe: "Notice bed-time ease in 7–10 days; deep-sleep gains by day 30.",
    keywords: ["sleep", "dim", "nsdr", "evening", "light", "bed"],
  },
  focus: {
    emoji: "🎯",
    title: "Deep focus",
    headline: "Stretch dopamine-driven focus blocks without burning out.",
    summary:
      "90/20 work-rest cycles with deliberate NSDR boosts attention span while keeping motivation stable across the day.",
    evidence:
      "Stanford data shared on Huberman Lab shows NSDR can extend focus windows 40–60% after intense efforts.",
    timeframe: "Expect sharper focus within a week; sustained flow in two.",
    keywords: ["focus", "deep work", "dopamine", "caffeine", "nsdr", "block"],
  },
  body: {
    emoji: "🏋️",
    title: "Body recomposition",
    headline: "Fuel muscle gain while keeping energy stable throughout the day.",
    summary:
      "Protein-timed meals, deliberate cold, and strength anchors create the hormonal environment for favourable body composition.",
    evidence:
      "Huberman Lab references combine Zone-2 + resistance training for 5–10% VO₂ & lean-mass improvements in 8 weeks.",
    timeframe: "Energy steadies inside two weeks; composition shifts by week six.",
    keywords: ["protein", "strength", "training", "meal", "cardio", "cold"],
  },
  stress: {
    emoji: "🧘",
    title: "Stress resilience",
    headline: "Keep the autonomic system flexible, not frazzled.",
    summary:
      "Physiological sighs, cold exposure, and NSDR recalibrate cortisol so you stay calm under pressure yet can ramp when needed.",
    evidence: "Huberman Lab reported up to 40% reductions in stress markers after 1 week of physiological sigh practice.",
    timeframe: "Immediate downshift; durable resilience develops in 3–4 weeks.",
    keywords: ["stress", "sigh", "breath", "cold", "nsdr", "calm"],
  },
  energy: {
    emoji: "⚡",
    title: "Sustainable energy",
    headline: "Flatten energy crashes by aligning hydration, movement, and meals.",
    summary:
      "Electrolytes + movement snacks stabilise glucose and catecholamines, keeping afternoon productivity high without extra caffeine.",
    evidence:
      "Movement snacks every 90 minutes cut the post-lunch dip by ~20% in the Stanford data cited on Huberman Lab.",
    timeframe: "Feel steadier output inside a week; metabolic gains in one month.",
    keywords: ["energy", "hydrate", "electrolyte", "walk", "movement", "meal"],
  },
  neuro: {
    emoji: "🧠",
    title: "Learning & creativity",
    headline: "Pair novelty, cardio primers, and NSDR to lock in new skills.",
    summary:
      "Novelty plus moderate cardio before learning fires up neurochemicals, while NSDR after practice consolidates the changes.",
    evidence:
      "Huberman Lab cites Stanford findings: NSDR post-learning improves retention by ~20%.",
    timeframe: "Skill recall improves within days; creativity spikes after consistent novelty for 2–3 weeks.",
    keywords: ["learning", "novelty", "memory", "review", "plasticity"],
  },
};

const DEFAULT_GOAL_DETAIL = {
  emoji: "🧬",
  title: "Tailored protocol",
  headline: "Keep circadian, movement, and recovery anchors humming.",
  summary:
    "Layering light, movement, and deliberate rest keeps your biology primed. Iterate weekly based on adherence and energy trends.",
  evidence: "Built from Huberman Lab protocols and their cited peer-reviewed studies.",
  timeframe: "Expect noticeable shifts in 10–14 days with consistent anchors.",
  keywords: ["light", "movement", "nsdr", "hydrate"],
};

const ANCHOR_SLOTS: AnchorSlot[] = ["morning", "daytime", "evening"];

const SLOT_EMOJI: Record<AnchorSlot, string> = {
  morning: "🌅",
  daytime: "🌞",
  evening: "🌙",
};

const SLOT_WINDOWS: Record<
  AnchorSlot,
  { startHour: number; endHour: number; label: string; nudge: { low: string; solid: string } }
> = {
  morning: {
    startHour: 5,
    endHour: 12,
    label: "Morning anchors",
    nudge: {
      low: "Anchor sunlight within 60 minutes to stabilise cortisol and dopamine.",
      solid: "Stack a 5 minute planning ritual to lock the day’s priority.",
    },
  },
  daytime: {
    startHour: 12,
    endHour: 18,
    label: "Daytime anchors",
    nudge: {
      low: "Drop in a movement snack every 90 minutes to avoid the afternoon crash.",
      solid: "Layer a deliberate focus sprint + NSDR recharge for sustained output.",
    },
  },
  evening: {
    startHour: 18,
    endHour: 24,
    label: "Evening reset",
    nudge: {
      low: "Dim lights 2 hours before bed and add a 10 minute NSDR wind-down.",
      solid: "Add gratitude or journaling to offload cognitive load before sleep.",
    },
  },
};

const GOAL_DEFAULT_METRICS: Record<GoalId, MetricType[]> = {
  sleep: ["sleep_latency", "sleep_quality"] as MetricType[],
  focus: ["focus_blocks"] as MetricType[],
  energy: ["energy_stability"] as MetricType[],
  stress: ["stress_load"] as MetricType[],
  body: ["mood_state"] as MetricType[],
  neuro: ["focus_blocks"] as MetricType[],
};

const DIGEST_OPTIONS: DigestCadence[] = ["weekly", "biweekly", "monthly"];
const DEFAULT_DIGEST_CADENCE: DigestCadence = "weekly";

const ANCHOR_REFERENCE_MAP: Record<AnchorSlot, EvidenceReference> = {
  morning: {
    title: "Morning light protocol",
    href: "/light-circadian#morning-light",
  },
  daytime: {
    title: "Movement snacks playbook",
    href: "/daily-routine#movement-snacks",
  },
  evening: {
    title: "Evening wind-down checklist",
    href: "/sleep-hygiene#evening-routine",
  },
};

const METRIC_REFERENCE_MAP: Record<MetricType, EvidenceReference> = {
  sleep_latency: {
    title: "Sleep latency protocol",
    href: "/sleep-hygiene",
  },
  sleep_quality: {
    title: "Deep sleep boosters",
    href: "/sleep",
  },
  energy_stability: {
    title: "Beat the afternoon crash",
    href: "/daily#energy",
  },
  focus_blocks: {
    title: "Deep focus toolkit",
    href: "/focus-concentration",
  },
  mood_state: {
    title: "Stress reset protocols",
    href: "/stress",
  },
  stress_load: {
    title: "Autonomic balance tools",
    href: "/nervous-system",
  },
};

const METRIC_METADATA: Record<
  MetricType,
  { label: string; emoji: string; helpfulRange: string }
> = {
  sleep_latency: {
    label: "Sleep latency (min)",
    emoji: "🕐",
    helpfulRange: "15-20 min",
  },
  sleep_quality: {
    label: "Sleep quality (1-5)",
    emoji: "🌙",
    helpfulRange: "Aim for ≥4",
  },
  energy_stability: {
    label: "Energy steadiness (1-5)",
    emoji: "⚡",
    helpfulRange: "Aim for ≥4",
  },
  focus_blocks: {
    label: "Deep work blocks",
    emoji: "🎯",
    helpfulRange: "2-4 blocks/day",
  },
  mood_state: {
    label: "Mood state (1-5)",
    emoji: "🙂",
    helpfulRange: "Keep ≥4",
  },
  stress_load: {
    label: "Stress load (1-5)",
    emoji: "🧘",
    helpfulRange: "Keep ≤2",
  },
};

function flattenPlan(plan: Record<string, unknown>) {
  const objectPlan = plan ?? {};
  const morning = Array.isArray(objectPlan["morning"]) ? (objectPlan["morning"] as unknown[]) : [];
  const daytime = Array.isArray(objectPlan["daytime"]) ? (objectPlan["daytime"] as unknown[]) : [];
  const evening = Array.isArray(objectPlan["evening"]) ? (objectPlan["evening"] as unknown[]) : [];
  return [...morning, ...daytime, ...evening].map(String);
}

function deriveGoalHighlights(goalId: GoalId | AnchorSlot, plan: Record<string, unknown>) {
  const anchors = flattenPlan(plan);
  const detail = GOAL_DETAILS[goalId as GoalId] ?? DEFAULT_GOAL_DETAIL;
  const keywords = detail.keywords ?? [];
  const matches: string[] = [];

  keywords.forEach((keyword) => {
    const anchor = anchors.find((item) => item.toLowerCase().includes(keyword));
    if (anchor && !matches.includes(anchor)) {
      matches.push(anchor);
    }
  });

  anchors.forEach((anchor) => {
    if (matches.length >= 4) return;
    if (!matches.includes(anchor)) {
      matches.push(anchor);
    }
  });

  return matches.slice(0, 4);
}

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function computeState(slot: AnchorSlot, now: Date): TimelineState {
  const hour = now.getHours();
  const window = SLOT_WINDOWS[slot];
  if (hour >= window.endHour) return "past";
  if (hour >= window.startHour && hour < window.endHour) return "current";
  return "upcoming";
}

function computeStreakForAnchor(anchorText: string, slot: AnchorSlot, logs: LogWithRelations[]) {
  let streak = 0;
  for (const log of logs) {
    const completion = log.completions.find(
      (item) => item.slot === slot && item.anchorText === anchorText && item.completed
    );
    if (completion) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

function computeWeeklyPercent(anchorText: string, slot: AnchorSlot, logs: LogWithRelations[]) {
  let relevant = 0;
  let completed = 0;
  const limit = Math.min(logs.length, 7);
  for (let i = 0; i < limit; i += 1) {
    const log = logs[i];
    const completion = log.completions.find(
      (item) => item.slot === slot && item.anchorText === anchorText && item.completed
    );
    if (completion) completed += 1;
    relevant += 1;
  }
  return relevant ? Math.round((completed / relevant) * 100) : 0;
}

function pickNudge(slot: AnchorSlot, weeklyPercent: number) {
  const window = SLOT_WINDOWS[slot];
  return weeklyPercent >= 60 ? window.nudge.solid : window.nudge.low;
}

function ensureGoalPreferences(userId: string, goals: GoalId[]) {
  const ops = goals.flatMap((goalId) => {
    const metrics = GOAL_DEFAULT_METRICS[goalId] ?? [];
    return metrics.map((metric) =>
      prisma.goalMetricPreference.upsert({
        where: {
          userId_goalId_metric: {
            userId,
            goalId,
            metric,
          },
        },
        create: {
          userId,
          goalId,
          metric,
        },
        update: {},
      })
    );
  });

  return Promise.all(ops);
}

function computeMetricTrend(metric: MetricType, entries: MetricCheckIn[], now: Date): MetricInsight {
  const metadata = METRIC_METADATA[metric];
  const trendPoints = entries
    .filter((entry) => entry.metric === metric)
    .sort((a, b) => a.recordedAt.getTime() - b.recordedAt.getTime());

  const recent = trendPoints.filter(
    (entry) => (now.getTime() - entry.recordedAt.getTime()) / (1000 * 60 * 60 * 24) < 7
  );
  const previous = trendPoints.filter(
    (entry) =>
      (now.getTime() - entry.recordedAt.getTime()) / (1000 * 60 * 60 * 24) >= 7 &&
      (now.getTime() - entry.recordedAt.getTime()) / (1000 * 60 * 60 * 24) < 14
  );

  const average = (payload: MetricCheckIn[]) =>
    payload.length ? payload.reduce((sum, item) => sum + item.value, 0) / payload.length : null;

  const recentAverage = average(recent);
  const previousAverage = average(previous);

  let direction: "up" | "down" | "flat" = "flat";
  let deltaLabel = "log today";
  let message = `Stay within ${metadata.helpfulRange}.`;

  if (recentAverage !== null && previousAverage !== null) {
    const delta = recentAverage - previousAverage;
    if (Math.abs(delta) < 0.25) {
      direction = "flat";
      deltaLabel = "steady";
      message = "Hold consistency — adaptation is compounding.";
    } else if (delta > 0) {
      direction = "up";
      deltaLabel = `+${Math.round((delta / 5) * 100)}% vs last week`;
      message =
        metric === "stress_load"
          ? "Stress load is creeping up — reuse physiological sigh between tasks."
          : "Positive delta — keep the current protocol cadence.";
    } else {
      direction = "down";
      deltaLabel = `${Math.round((delta / 5) * 100)}% vs last week`;
      message =
        metric === "sleep_latency"
          ? "Latency worsened — reinforce evening dimness + NSDR wind-down tonight."
          : "Downward trend — revisit anchor consistency to stabilise.";
    }
  } else if (recentAverage !== null && previousAverage === null) {
    deltaLabel = "baseline created";
    message = "Keep logging to unlock trend comparisons.";
  }

  return {
    metric,
    label: metadata.label,
    emoji: metadata.emoji,
    currentValue: recentAverage !== null ? Math.round(recentAverage * 10) / 10 : null,
    deltaLabel,
    direction,
    message,
    trend: trendPoints.map((entry) => ({
      date: entry.recordedAt.toISOString(),
      value: entry.value,
    })),
  };
}

function deriveNextBestMove({
  anchorSummaries,
  metricInsights,
  goalCards,
}: {
  anchorSummaries: AnchorSummary[];
  metricInsights: MetricInsight[];
  goalCards: GoalCard[];
}): NextBestMove | null {
  const strugglingAnchors = anchorSummaries
    .filter((anchor) => anchor.weeklyPercent < 60)
    .sort((a, b) => a.weeklyPercent - b.weeklyPercent);

  const parseMetricDelta = (insight: MetricInsight) => {
    const match = insight.deltaLabel.match(/(-?\d+)/);
    if (match) return Number(match[1]);
    return insight.direction === "down" ? -5 : 0;
  };

  const decliningMetrics = metricInsights
    .filter((metric) => metric.direction === "down")
    .sort((a, b) => parseMetricDelta(a) - parseMetricDelta(b));

  if (decliningMetrics.length) {
    const target = decliningMetrics[0];
    const reference = METRIC_REFERENCE_MAP[target.metric];
    return {
      title: `Course-correct your ${target.label.toLowerCase()}`,
      description: target.message,
      evidence: `Trend shows ${target.label.toLowerCase()} is slipping week-over-week. Reinforce the supporting anchor and re-test in 3 days.`,
      reference,
      metric: target.metric,
    };
  }

  if (strugglingAnchors.length) {
    const lowest = strugglingAnchors[0];
    const slotAdvice = SLOT_WINDOWS[lowest.slot];
    return {
      title: `Reinforce your ${slotAdvice.label.toLowerCase()} anchor`,
      description: `Completion sits at ${lowest.weeklyPercent}%. Prioritise “${lowest.anchorText}” for the next three days to rebuild the habit.`,
      evidence: "Habit research shows back-to-back reps rebuild neural pathways faster (Huberman Lab #53).",
      reference: ANCHOR_REFERENCE_MAP[lowest.slot],
      anchorText: lowest.anchorText,
      slot: lowest.slot,
    };
  }

  if (anchorSummaries.length) {
    return {
      title: "Keep the streak alive 🔁",
      description:
        "You’re consistent across anchors. Layer progressive overload: extend morning light to 20 minutes or deepen NSDR to support further adaptation.",
      evidence: "Consistent light exposure strengthens cortisol rhythm; see Huberman Lab #31.",
      reference: ANCHOR_REFERENCE_MAP[anchorSummaries[0].slot],
    };
  }

  return goalCards.length
    ? {
        title: `Maintain your ${goalCards[0].title.toLowerCase()}`,
        description: goalCards[0].summary,
        evidence: goalCards[0].evidence,
      }
    : null;
}

function buildDigestPreview(
  anchorSummaries: AnchorSummary[],
  insightMap: Partial<Record<MetricType, MetricInsight>>,
  activeGoalId: string,
  goalCards: GoalCard[]
) {
  if (!anchorSummaries.length) {
    return ["Log anchors today to unlock tailored digest summaries."];
  }
  const bestStreak = anchorSummaries.reduce((prev, current) =>
    current.streak > prev.streak ? current : prev
  );
  const focusInsight = insightMap["focus_blocks"];
  const goalCard =
    goalCards.find((card) => card.id === activeGoalId) ?? goalCards[0] ?? null;

  const preview: string[] = [
    `${bestStreak.emoji} ${bestStreak.anchorText}: ${bestStreak.streak}-day streak — keep it up to cement the habit.`,
  ];

  if (focusInsight) {
    preview.push(
      `${focusInsight.emoji} Focus trend: ${focusInsight.deltaLabel}. ${focusInsight.message}`
    );
  }

  if (goalCard) {
    preview.push(`🔬 Next lever: ${goalCard.highlights[0] ?? goalCard.summary}`);
  }

  return preview;
}

function buildMetricOptions(goals: GoalId[]): MetricOption[] {
  return (Object.entries(METRIC_METADATA) as [MetricType, { label: string; emoji: string; helpfulRange: string }][]).map(
    ([metric, meta]) => ({
      metric,
      label: meta.label,
      emoji: meta.emoji,
      helpfulRange: meta.helpfulRange,
      recommendedGoals: goals.filter((goalId) => (GOAL_DEFAULT_METRICS[goalId] ?? []).includes(metric)),
    })
  );
}

function computeNextDigestDate(settings: { enabled: boolean; cadence: DigestCadence; lastSentAt?: Date | null }, today: Date) {
  if (!settings.enabled) return "Digests paused";
  const cadenceDays =
    settings.cadence === "weekly"
      ? 7
      : settings.cadence === "biweekly"
      ? 14
      : 30;

  const reference = settings.lastSentAt ? new Date(settings.lastSentAt) : new Date(today);
  const next = new Date(reference);
  if (!settings.lastSentAt) {
    next.setDate(next.getDate() + cadenceDays);
  } else {
    while (next <= today) {
      next.setDate(next.getDate() + cadenceDays);
    }
  }
  return formatDate(next);
}

async function ensureDigestSettings(userId: string) {
  return prisma.digestSettings.upsert({
    where: { userId },
    create: {
      userId,
      cadence: DEFAULT_DIGEST_CADENCE,
      enabled: true,
    },
    update: {},
  });
}

async function ensureMilestones(userId: string, anchorSummaries: AnchorSummary[]) {
  const thresholds = [7, 14, 21, 30];
  const achieved = await prisma.progressMilestone.findMany({
    where: { userId },
  });
  const toCreate: Promise<ProgressMilestone>[] = [];
  anchorSummaries.forEach((summary) => {
    thresholds.forEach((threshold) => {
      const key = `${summary.slot}-${summary.anchorText}-${threshold}`;
      const already = achieved.find((milestone) => milestone.metadata?.key === key);
      if (!already && summary.streak >= threshold) {
        toCreate.push(
          prisma.progressMilestone.create({
            data: {
              userId,
              title: `${threshold}-day streak unlocked`,
              description: `Kept “${summary.anchorText}” streak for ${threshold} days.`,
              metadata: {
                key,
                slot: summary.slot,
                anchorText: summary.anchorText,
              },
            },
          })
        );
      }
    });
  });
  if (toCreate.length) {
    await Promise.all(toCreate);
  }
}

export async function getDashboardSummary(options?: { protocolId?: string }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return null;
  }
  const userId = session.user.id;
  await linkSessionProtocolsToUser(userId);

  const protocol = options?.protocolId
    ? await prisma.protocol.findUnique({
        where: { id: options.protocolId },
      })
    : await prisma.protocol.findFirst({
        where: { userId },
        orderBy: { createdAt: "desc" },
      });

  if (!protocol) {
    await ensureDigestSettings(userId);
    return {
      anchorSummaries: [],
      timeline: [],
      metricInsights: [],
      goalCards: [],
      goalMetricPreferences: [],
      metricOptions: buildMetricOptions([]),
      digest: {
        enabled: true,
        cadence: DEFAULT_DIGEST_CADENCE,
        nextDigest: formatDate(new Date()),
        preview: [],
      },
      nextBestMove: null,
      milestones: [],
      todayLogId: null,
      protocolId: null,
      todayDate: startOfDay(new Date()).toISOString(),
    } satisfies DashboardSummary;
  }

  const goals: GoalId[] = Array.isArray(protocol.goals)
    ? (protocol.goals as GoalId[])
    : [];

  if (goals.length) {
    await ensureGoalPreferences(userId, goals);
  }

  const today = new Date();
  today.setMilliseconds(0);
  const todayStart = startOfDay(today);

  const logs = (await prisma.dailyAnchorLog.findMany({
    where: {
      userId,
      protocolId: protocol.id,
    },
    include: {
      completions: true,
      metrics: true,
    },
    orderBy: { date: "desc" },
    take: 45,
  })) as LogWithRelations[];

  const goalCards = goals.map((goalId) => {
    const detail = GOAL_DETAILS[goalId] ?? DEFAULT_GOAL_DETAIL;
    return {
      id: goalId,
      title: detail.title,
      emoji: detail.emoji,
      headline: detail.headline,
      summary: detail.summary,
      evidence: detail.evidence,
      timeframe: detail.timeframe,
      highlights: deriveGoalHighlights(goalId, protocol.plan as Record<string, unknown>),
    };
  });

  const anchorDefinitions: AnchorDefinition[] = ANCHOR_SLOTS.flatMap((slot) => {
    const list = (protocol.plan as Record<string, unknown>)?.[slot] ?? [];
    return Array.isArray(list)
      ? list.map((text) => ({ slot, anchorText: String(text) }))
      : [];
  }).filter((item) => item.anchorText.length);

  let todayLog =
    (logs.find((log) => isSameDay(log.date, todayStart)) as LogWithRelations | undefined) ?? null;

  if (!todayLog) {
    todayLog = (await prisma.dailyAnchorLog.upsert({
      where: {
        userId_date: {
          userId,
          date: todayStart,
        },
      },
      update: {},
      create: {
        userId,
        protocolId: protocol.id,
        date: todayStart,
      },
      include: {
        completions: true,
        metrics: true,
      },
    })) as LogWithRelations;
  }

  const logsWithToday: LogWithRelations[] = logs.some((log) => log.id === todayLog?.id)
    ? logs
    : [todayLog, ...logs];

  const anchorSummaries: AnchorSummary[] = anchorDefinitions.map((anchor) => {
    const associatedGoal =
      goalCards.find((card) => card.highlights.includes(anchor.anchorText)) || goalCards[0];
    const streak = computeStreakForAnchor(anchor.anchorText, anchor.slot, logsWithToday);
    const weeklyPercent = computeWeeklyPercent(anchor.anchorText, anchor.slot, logsWithToday);
    const completionToday = todayLog.completions.find(
      (item) => item.slot === anchor.slot && item.anchorText === anchor.anchorText
    );
    return {
      slot: anchor.slot,
      anchorText: anchor.anchorText,
      emoji: SLOT_EMOJI[anchor.slot],
      goalId: associatedGoal?.id,
      evidence: ANCHOR_REFERENCE_MAP[anchor.slot],
      streak,
      weeklyPercent,
      completedToday: Boolean(completionToday?.completed),
      nudge: pickNudge(anchor.slot, weeklyPercent),
      completionId: completionToday?.id ?? null,
    };
  });

  const timeline: TimelineCard[] = ANCHOR_SLOTS
    .map((slot) => {
      const state = computeState(slot, today);
      const anchors = anchorSummaries
        .filter((summary) => summary.slot === slot)
        .map((summary) => ({
          anchorText: summary.anchorText,
          completed: summary.completedToday,
          completionId: summary.completionId,
        }));
      return {
        slot,
        emoji: SLOT_EMOJI[slot],
        state,
        anchors,
      };
    })
    .filter((card) => card.anchors.length);

  const preferenceRows = await prisma.goalMetricPreference.findMany({
    where: { userId },
  });

  const preferenceMap = new Map<GoalId, MetricType[]>();
  preferenceRows.forEach((row) => {
    const current = preferenceMap.get(row.goalId) ?? [];
    if (!current.includes(row.metric)) {
      current.push(row.metric);
    }
    preferenceMap.set(row.goalId, current);
  });

  goals.forEach((goalId) => {
    if (!preferenceMap.has(goalId) || (preferenceMap.get(goalId) ?? []).length === 0) {
      preferenceMap.set(goalId, [...(GOAL_DEFAULT_METRICS[goalId] ?? [])]);
    }
  });

  const goalMetricPreferences: GoalMetricPreferenceSummary[] = goals.map((goalId) => ({
    goalId,
    metrics: [...new Set(preferenceMap.get(goalId) ?? [])],
  }));

  const preferredMetrics = Array.from(
    new Set(goalMetricPreferences.flatMap((pref) => pref.metrics))
  );

  const metricOptions = buildMetricOptions(goals);

  const metricEntries = await prisma.metricCheckIn.findMany({
    where: {
      userId,
      protocolId: protocol.id,
    },
    orderBy: { recordedAt: "desc" },
    take: 120,
  });

  const metricInsights = preferredMetrics.map((metric) =>
    computeMetricTrend(metric, metricEntries, today)
  );

  const digestSettings = await ensureDigestSettings(userId);

  const insightMap = Object.fromEntries(
    metricInsights.map((insight) => [insight.metric, insight] as const)
  ) as Partial<Record<MetricType, MetricInsight>>;

  const digest: DigestInfo = {
    enabled: digestSettings.enabled,
    cadence: digestSettings.cadence,
    nextDigest: computeNextDigestDate(digestSettings, today),
    preview: buildDigestPreview(
      anchorSummaries,
      insightMap,
      goalCards[0]?.id ?? "custom",
      goalCards
    ),
  };

  await ensureMilestones(userId, anchorSummaries);

  const milestones = await prisma.progressMilestone.findMany({
    where: { userId },
    orderBy: { achievedAt: "desc" },
    take: 6,
  });

  return {
    anchorSummaries,
    timeline: timeline.map((card) => ({
      ...card,
      anchors: card.anchors.map((anchor) => {
        const definition = anchorSummaries.find(
          (summary) => summary.anchorText === anchor.anchorText
        );
        return {
          ...anchor,
          evidenceLink: definition?.evidence?.href,
        };
      }),
    })),
    metricInsights,
    goalCards,
    goalMetricPreferences,
    metricOptions,
    digest,
    nextBestMove: deriveNextBestMove({
      anchorSummaries,
      metricInsights,
      goalCards,
    }),
    milestones: milestones.map((milestone) => ({
      id: milestone.id,
      title: milestone.title,
      description: milestone.description ?? "",
      achievedAt: milestone.achievedAt,
      dismissedAt: milestone.dismissedAt,
    })),
    todayLogId: todayLog.id,
    todayDate: todayStart.toISOString(),
    protocolId: protocol.id,
  };
}

export async function toggleAnchorCompletion({
  anchorText,
  slot,
  completed,
  completionId,
  logId,
  protocolId,
  date,
}: {
  anchorText: string;
  slot: AnchorSlot;
  completed: boolean;
  completionId?: string | null;
  logId?: string | null;
  protocolId: string;
  date: string;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  const userId = session.user.id;
  const targetDate = startOfDay(new Date(date));
  const log = await prisma.dailyAnchorLog.upsert({
    where: {
      userId_date: {
        userId,
        date: targetDate,
      },
    },
    update: {
      protocolId,
    },
    create: {
      userId,
      protocolId,
      date: targetDate,
    },
  });

  const entry = completionId
    ? await prisma.anchorCompletion.findUnique({ where: { id: completionId } })
    : await prisma.anchorCompletion.findFirst({
        where: {
          logId: log.id,
          slot,
          anchorText,
        },
      });

  if (entry) {
    await prisma.anchorCompletion.update({
      where: { id: entry.id },
      data: {
        completed,
        completedAt: completed ? new Date() : null,
      },
    });
  } else {
    await prisma.anchorCompletion.create({
      data: {
        logId: log.id,
        slot,
        anchorText,
        completed,
        completedAt: completed ? new Date() : null,
      },
    });
  }

  return getDashboardSummary({ protocolId });
}

export async function recordMetricCheckIn({
  metric,
  value,
  goalId,
  protocolId,
  date,
}: {
  metric: MetricType;
  value: number;
  goalId?: string;
  protocolId: string;
  date?: string;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  const userId = session.user.id;
  const recordedAt = date ? new Date(date) : new Date();
  await prisma.metricCheckIn.create({
    data: {
      userId,
      protocolId,
      goalId,
      metric,
      value,
      recordedAt,
    },
  });

  return getDashboardSummary({ protocolId });
}

export async function updateDigestPreference({
  enabled,
  cadence,
}: {
  enabled?: boolean;
  cadence?: DigestCadence;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  const userId = session.user.id;
  if (cadence && !DIGEST_OPTIONS.includes(cadence)) {
    throw new Error("Invalid cadence");
  }
  const settings = await ensureDigestSettings(userId);
  await prisma.digestSettings.update({
    where: { id: settings.id },
    data: {
      enabled: enabled ?? settings.enabled,
      cadence: cadence ?? settings.cadence,
    },
  });
  return getDashboardSummary();
}
