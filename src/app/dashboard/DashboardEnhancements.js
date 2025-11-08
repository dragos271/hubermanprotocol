"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import useSWR from "swr";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./DashboardEnhancements.module.css";

const slotLabels = {
  morning: "Morning",
  daytime: "Daytime",
  evening: "Evening",
};

const cadenceLabels = {
  weekly: "Weekly",
  biweekly: "Every 2 weeks",
  monthly: "Monthly",
};

const metricGoalGuess = {
  sleep_latency: "sleep",
  sleep_quality: "sleep",
  energy_stability: "energy",
  focus_blocks: "focus",
  mood_state: "stress",
  stress_load: "stress",
};

const DIGEST_OPTIONS = ["weekly", "biweekly", "monthly"];

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to load dashboard summary.");
  }
  const payload = await response.json();
  return payload.summary;
};

const cloneSummary = (summary) =>
  summary ? JSON.parse(JSON.stringify(summary)) : summary;

function Sparkline({ data }) {
  if (!data?.length) {
    return <div className={styles.sparklinePlaceholder}>Log more entries to see trends</div>;
  }

  const values = data.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = data
    .map((point, index) => {
      const x = (index / (data.length - 1 || 1)) * 100;
      const y = 100 - ((point.value - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg className={styles.sparkline} viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline points={points} />
    </svg>
  );
}

function EvidenceDrawer({ headline, evidence, highlights }) {
  if (!headline && !evidence) return null;
  return (
    <details className={styles.evidenceDrawer}>
      <summary>Learn why</summary>
      {headline ? <p>{headline}</p> : null}
      {evidence ? <p className={styles.evidenceLink}>{evidence}</p> : null}
      {highlights?.length ? (
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </details>
  );
}

function MetricPreferencesModal({
  goal,
  options,
  selected,
  onToggle,
  onClose,
  onSave,
  saving,
}) {
  if (!goal) return null;
  const goalOptions = options.length
    ? options
    : [];

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={styles.modalCard}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Metrics for {goal.title}</h3>
          <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <p className={styles.modalDescription}>
          Choose the signals you want to track for this goal. We’ll tailor insights and digests
          around your selections.
        </p>
        <div className={styles.modalGrid}>
          {goalOptions.map((option) => {
            const active = selected.includes(option.metric);
            return (
              <button
                key={option.metric}
                type="button"
                onClick={() => onToggle(option.metric)}
                className={`${styles.metricChip} ${active ? styles.metricChipActive : ""}`}
              >
                <span className={styles.metricChipLabel}>
                  {option.emoji} {option.label}
                </span>
                <span className={styles.metricChipHint}>{option.helpfulRange}</span>
              </button>
            );
          })}
        </div>
        <div className={styles.modalActions}>
          <button type="button" className={styles.modalGhostButton} onClick={onClose} disabled={saving}>
            Cancel
          </button>
          <button type="button" className={styles.modalPrimaryButton} onClick={onSave} disabled={saving}>
            {saving ? "Saving..." : "Save preferences"}
          </button>
        </div>
      </div>
    </div>
  );
}

function DigestPreviewModal({
  isOpen,
  html,
  loading,
  error,
  onClose,
  onCopy,
  copied,
}) {
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={`${styles.modalCard} ${styles.digestPreviewModal}`}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Digest preview</h3>
          <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <p className={styles.modalDescription}>
          See the exact email your next action digest will deliver, based on the latest streaks and metric shifts.
        </p>
        <div className={styles.digestPreviewContent}>
          {loading ? (
            <p className={styles.digestPreviewEmpty}>Generating preview...</p>
          ) : error ? (
            <p className={styles.digestPreviewError}>{error}</p>
          ) : html ? (
            <div
              className={styles.digestPreviewFrame}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <p className={styles.digestPreviewEmpty}>
              Log at least one anchor streak to unlock the digest content.
            </p>
          )}
        </div>
        <div className={styles.modalActions}>
          <button
            type="button"
            className={styles.modalGhostButton}
            onClick={onClose}
            disabled={loading}
          >
            Close
          </button>
          <button
            type="button"
            className={styles.modalPrimaryButton}
            onClick={onCopy}
            disabled={!html || loading}
          >
            {copied ? "Copied!" : "Copy HTML"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ToastStack({ toasts, onCelebrate, onDismiss }) {
  if (!toasts.length) return null;
  return (
    <div className={styles.toastContainer}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            className={styles.toast}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div>
              <strong>{toast.title}</strong>
              <p>{toast.message}</p>
            </div>
            <div className={styles.toastActions}>
              <button type="button" onClick={() => onCelebrate(toast.id)} className={styles.toastButton}>
                Celebrate
              </button>
              <button type="button" onClick={() => onDismiss(toast.id)} className={styles.toastClose}>
                ×
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function DashboardEnhancements({ summary: initialSummary, latestProtocol }) {
  const { data, mutate } = useSWR("/api/dashboard/summary", fetcher, {
    fallbackData: initialSummary ?? null,
    revalidateOnFocus: false,
  });

  const [error, setError] = useState("");
  const [preferencesGoal, setPreferencesGoal] = useState(null);
  const [preferenceSelection, setPreferenceSelection] = useState([]);
  const [toasts, setToasts] = useState([]);
  const milestoneSeenRef = useRef(
    new Set(initialSummary?.milestones?.map((milestone) => milestone.id) ?? [])
  );
  const [isDigestPreviewOpen, setIsDigestPreviewOpen] = useState(false);
  const [digestPreviewHtml, setDigestPreviewHtml] = useState("");
  const [isDigestPreviewLoading, setIsDigestPreviewLoading] = useState(false);
  const [digestPreviewError, setDigestPreviewError] = useState("");
  const [digestCopied, setDigestCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const summary = data ?? initialSummary ?? null;
  const protocolId = summary?.protocolId ?? latestProtocol?.id ?? null;
  const todayDate = summary?.todayDate ?? new Date().toISOString();

  const goalPreferenceMap = useMemo(() => {
    const map = new Map();
    summary?.goalMetricPreferences?.forEach((pref) => {
      map.set(pref.goalId, pref.metrics);
    });
    return map;
  }, [summary?.goalMetricPreferences]);

  useEffect(() => {
    if (!summary) return;
    summary.milestones.forEach((milestone) => {
      if (!milestone.dismissedAt && !milestoneSeenRef.current.has(milestone.id)) {
        milestoneSeenRef.current.add(milestone.id);
        setToasts((prev) => [
          ...prev,
          {
            id: milestone.id,
            title: "Milestone unlocked!",
            message: milestone.title,
          },
        ]);
      }
    });
  }, [summary]);

  const metricOptions = summary?.metricOptions ?? [];

  const openPreferences = (goal) => {
    const current = goalPreferenceMap.get(goal.id) ?? [];
    setPreferenceSelection(current);
    setPreferencesGoal(goal);
  };

  const closePreferences = () => {
    setPreferencesGoal(null);
    setPreferenceSelection([]);
  };

  const togglePreferenceMetric = (metric) => {
    setPreferenceSelection((prev) =>
      prev.includes(metric) ? prev.filter((item) => item !== metric) : [...prev, metric]
    );
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleMutation = (optimisticData, request) => {
    startTransition(() => {
      setError("");
      mutate(
        async () => {
          const next = await request();
          return next;
        },
        {
          optimisticData,
          rollbackOnError: true,
          populateCache: true,
          revalidate: false,
        }
      ).catch((err) => setError(err.message ?? "Something went wrong"));
    });
  };

  const handleAnchorToggle = (slot, anchorText, completionId, completed) => {
    if (!summary || !protocolId) return;
    const optimistic = cloneSummary(summary);
    if (optimistic) {
      const anchor = optimistic.anchorSummaries.find(
        (item) => item.slot === slot && item.anchorText === anchorText
      );
      if (anchor) {
        anchor.completedToday = completed;
        if (!completionId && !anchor.completionId) {
          anchor.completionId = anchor.completionId ?? null;
        }
      }
      const timelineCard = optimistic.timeline.find((card) => card.slot === slot);
      if (timelineCard) {
        timelineCard.anchors = timelineCard.anchors.map((item) =>
          item.anchorText === anchorText ? { ...item, completed } : item
        );
      }
    }

    handleMutation(optimistic, async () => {
      const response = await fetch("/api/dashboard/anchor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          anchorText,
          slot,
          completed,
          completionId,
          logId: summary.todayLogId,
          protocolId,
          date: todayDate,
        }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to update anchor.");
      }
      return payload.summary;
    });
  };

  const handleMetricChange = (metric, goalId, value) => {
    if (!summary || !protocolId) return;
    const optimistic = cloneSummary(summary);
    if (optimistic) {
      const insight = optimistic.metricInsights.find((item) => item.metric === metric);
      if (insight) {
        insight.currentValue = value;
      }
    }
    handleMutation(optimistic, async () => {
      const response = await fetch("/api/dashboard/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          metric,
          value,
          goalId,
          protocolId,
          date: todayDate,
        }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to save metric.");
      }
      return payload.summary;
    });
  };

  const handleDigestToggle = () => {
    if (!summary) return;
    const optimistic = cloneSummary(summary);
    if (optimistic) {
      optimistic.digest.enabled = !optimistic.digest.enabled;
    }
    handleMutation(optimistic, async () => {
      const response = await fetch("/api/dashboard/digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enabled: !summary.digest.enabled,
        }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to update digest settings.");
      }
      return payload.summary;
    });
  };

  const handleCadenceChange = (cadence) => {
    if (!summary || summary.digest.cadence === cadence) return;
    const optimistic = cloneSummary(summary);
    if (optimistic) {
      optimistic.digest.cadence = cadence;
    }
    handleMutation(optimistic, async () => {
      const response = await fetch("/api/dashboard/digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cadence }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to update cadence.");
      }
      return payload.summary;
    });
  };

  const handlePreferencesSave = () => {
    if (!summary || !preferencesGoal) return;
    const metrics = preferenceSelection.length ? preferenceSelection.slice(0, 4) : [];
    if (!metrics.length) {
      setError("Choose at least one metric to track.");
      return;
    }
    const optimistic = cloneSummary(summary);
    if (optimistic) {
      const entry = optimistic.goalMetricPreferences.find(
        (pref) => pref.goalId === preferencesGoal.id
      );
      if (entry) {
        entry.metrics = metrics;
      } else {
        optimistic.goalMetricPreferences.push({ goalId: preferencesGoal.id, metrics });
      }
    }
    handleMutation(optimistic, async () => {
      const response = await fetch("/api/dashboard/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goalId: preferencesGoal.id, metrics }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to update metrics.");
      }
      return payload.summary;
    });
    closePreferences();
  };

  const handleDigestPreview = async () => {
    if (!summary) return;
    setDigestPreviewError("");
    setDigestPreviewHtml("");
    setDigestCopied(false);
    setIsDigestPreviewOpen(true);
    setIsDigestPreviewLoading(true);
    try {
      const response = await fetch("/api/digest/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to generate digest.");
      }
      setDigestPreviewHtml(payload.html ?? "");
      if (!payload.html) {
        setDigestPreviewError("Digest generated without content. Log more data to unlock insights.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to generate digest.";
      setDigestPreviewError(message);
    } finally {
      setIsDigestPreviewLoading(false);
    }
  };

  const closeDigestPreview = () => {
    setIsDigestPreviewOpen(false);
    setDigestPreviewHtml("");
    setDigestPreviewError("");
    setDigestCopied(false);
  };

  const handleCopyDigest = async () => {
    if (!digestPreviewHtml) return;
    try {
      await navigator.clipboard.writeText(digestPreviewHtml);
      setDigestCopied(true);
      setTimeout(() => setDigestCopied(false), 2000);
    } catch (err) {
      console.error(err);
      setDigestPreviewError("Unable to copy preview. Copy manually from the window.");
    }
  };

  const handleDismissMilestone = (milestoneId) => {
    if (!summary) return;
    const optimistic = cloneSummary(summary);
    if (optimistic) {
      const milestone = optimistic.milestones.find((item) => item.id === milestoneId);
      if (milestone) {
        milestone.dismissedAt = new Date().toISOString();
      }
    }
    dismissToast(milestoneId);
    handleMutation(optimistic, async () => {
      const response = await fetch("/api/dashboard/milestones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ milestoneId, dismissed: true }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to update milestone.");
      }
      return payload.summary;
    });
  };

  if (!summary || !protocolId) {
    return null;
  }

  return (
    <>
      <ToastStack
        toasts={toasts}
        onCelebrate={handleDismissMilestone}
        onDismiss={dismissToast}
      />
      <div className={styles.enhancements}>
        {error ? <div className={styles.errorBanner}>{error}</div> : null}

        {summary.nextBestMove ? (
          <motion.section
            className={styles.heroCard}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <h2>{summary.nextBestMove.title}</h2>
            <p>{summary.nextBestMove.description}</p>
            <p className={styles.heroEvidence}>🔬 {summary.nextBestMove.evidence}</p>
            {summary.nextBestMove.reference ? (
              <a
                className={styles.heroReference}
                href={summary.nextBestMove.reference.href}
              >
                {summary.nextBestMove.reference.title} ↗
              </a>
            ) : null}
          </motion.section>
        ) : null}

        {summary.timeline.length ? (
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Today&apos;s timeline</h2>
                <p className={styles.sectionSubtitle}>
                  Fade anchors as the day rolls on. Tap to log completion and keep streaks current.
                </p>
              </div>
            </div>
            <div className={styles.timelineGrid}>
              <AnimatePresence>
                {summary.timeline.map((card) => (
                  <motion.article
                    key={card.slot}
                    className={`${styles.timelineCard} ${styles[`timeline${card.state.charAt(0).toUpperCase() + card.state.slice(1)}`] || ""}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <header className={styles.timelineHeader}>
                      <span className={styles.timelineEmoji}>{card.emoji}</span>
                      <div>
                        <strong>{slotLabels[card.slot]}</strong>
                        <p>
                          {card.state === "current"
                            ? "In progress"
                            : card.state === "past"
                            ? "Wrapped"
                            : "Up next"}
                        </p>
                      </div>
                    </header>
                    <ul className={styles.timelineAnchors}>
                      {card.anchors.map((anchor) => (
                        <li key={`${card.slot}-${anchor.anchorText}`}>
                          <button
                            type="button"
                            className={`${styles.timelineAnchorButton} ${
                              anchor.completed ? styles.timelineAnchorButtonCompleted : ""
                            }`}
                            disabled={isPending}
                            onClick={() =>
                              handleAnchorToggle(
                                card.slot,
                                anchor.anchorText,
                                anchor.completionId,
                                !anchor.completed
                              )
                            }
                          >
                            <span>{anchor.completed ? "✓" : "○"}</span>
                            <span>{anchor.anchorText}</span>
                          </button>
                          {anchor.evidenceLink ? (
                            <a
                              href={anchor.evidenceLink}
                              className={styles.timelineEvidence}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Evidence ↗
                            </a>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </motion.section>
        ) : null}

        {summary.goalCards.length ? (
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Focus areas</h2>
                <p className={styles.sectionSubtitle}>
                  Active goals with the science-backed levers tailored from your protocol.
                </p>
              </div>
            </div>
            <div className={styles.focusGrid}>
              {summary.goalCards.map((card) => {
                const trackedMetrics = goalPreferenceMap.get(card.id) ?? [];
                return (
                  <motion.article
                    key={card.id}
                    className={styles.focusCard}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <span className={styles.focusChip}>
                      <span>{card.emoji}</span>
                      {card.title}
                    </span>
                    <h3 className={styles.focusTitle}>{card.headline}</h3>
                    <p className={styles.focusHeadline}>{card.summary}</p>
                    <ul className={styles.focusList}>
                      {card.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className={styles.focusEvidence}>🔬 {card.evidence}</div>
                    <div className={styles.focusTimeframe}>⏱ {card.timeframe}</div>
                    <div className={styles.goalMeta}>
                      Tracking:{" "}
                      {trackedMetrics.length ? trackedMetrics.join(", ") : "defaults"}
                    </div>
                    <div className={styles.goalActions}>
                      <button
                        type="button"
                        onClick={() => openPreferences(card)}
                        className={styles.preferencesButton}
                      >
                        Manage metrics
                      </button>
                    </div>
                    <EvidenceDrawer
                      headline={card.summary}
                      evidence={card.evidence}
                      highlights={card.highlights}
                    />
                  </motion.article>
                );
              })}
            </div>
          </motion.section>
        ) : null}

        {summary.anchorSummaries.length ? (
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Streaks & adherence</h2>
                <p className={styles.sectionSubtitle}>
                  Momentum for each anchor. Keep strings of completions to unlock higher tiers.
                </p>
              </div>
            </div>
            <div className={styles.streaksGrid}>
              {summary.anchorSummaries.map((anchor) => (
                <motion.article
                  key={`${anchor.slot}-${anchor.anchorText}`}
                  className={styles.streakCard}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className={styles.streakHeader}>
                    <span className={styles.streakTitle}>
                      {anchor.emoji} {anchor.anchorText}
                    </span>
                    <span className={styles.streakBadge}>{anchor.streak} day streak</span>
                  </div>
                  <div className={styles.streakProgress}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${anchor.weeklyPercent}%` }}
                      />
                    </div>
                    <span className={styles.weeklyLabel}>{anchor.weeklyPercent}% this week</span>
                  </div>
                  <p className={styles.streakCopy}>{anchor.nudge}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>
        ) : null}

        {summary.metricInsights.length ? (
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Progress tracking</h2>
                <p className={styles.sectionSubtitle}>
                  Log daily signals and see how trends respond to protocol tweaks.
                </p>
              </div>
            </div>
            <div className={styles.ratingsGrid}>
              {summary.metricInsights.map((insight) => (
                <motion.article
                  key={insight.metric}
                  className={styles.ratingCard}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className={styles.ratingLabel}>
                    <span>
                      <span className={styles.ratingEmoji}>{insight.emoji}</span>
                      {insight.label}
                    </span>
                    <span>{insight.currentValue ?? "–"}</span>
                  </div>
                  <div className={styles.ratingButtons}>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`${styles.ratingButton} ${
                          Math.round(insight.currentValue ?? 0) === value
                            ? styles.ratingButtonActive
                            : ""
                        }`}
                        disabled={isPending}
                        onClick={() =>
                          handleMetricChange(insight.metric, metricGoalGuess[insight.metric], value)
                        }
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <Sparkline data={insight.trend} />
                  <div className={styles.trendRow}>
                    <span>{insight.message}</span>
                    <span
                      className={
                        insight.direction === "down"
                          ? styles.trendDeltaNegative
                          : styles.trendDeltaPositive
                      }
                    >
                      {insight.deltaLabel}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        ) : null}

        {summary.milestones.length ? (
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Progress milestones</h2>
                <p className={styles.sectionSubtitle}>
                  Celebrate streak wins and see when you locked in physiology-changing behaviour.
                </p>
              </div>
            </div>
            <div className={styles.milestoneStrip}>
              {summary.milestones.map((milestone) => {
                const achievedDate = new Date(milestone.achievedAt);
                return (
                  <div key={milestone.id} className={styles.milestoneBadge}>
                    <span>🏆</span>
                    <div>
                      <strong>{milestone.title}</strong>
                      <p>{milestone.description}</p>
                      <time dateTime={achievedDate.toISOString()}>
                        {achievedDate.toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className={styles.milestoneBadgeActions}>
                      {milestone.dismissedAt ? (
                        <span className={styles.milestoneCelebrated}>Celebrated</span>
                      ) : (
                        <button
                          type="button"
                          className={styles.milestoneCelebrate}
                          disabled={isPending}
                          onClick={() => handleDismissMilestone(milestone.id)}
                        >
                          Celebrate
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>
        ) : null}

        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className={styles.digestCard}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 700, color: "white" }}>
                Action digests
              </h2>
              <p style={{ margin: "10px 0 0", color: "rgba(226,232,240,0.86)", lineHeight: 1.6 }}>
                Receive adherence highlights, streak nudges, and the next science-backed tweak to test.
              </p>
              <div className={styles.digestMeta}>
                <span>📬</span>
                <span>
                  {summary.digest.enabled
                    ? `Next digest scheduled for ${summary.digest.nextDigest}.`
                    : "Digests paused — toggle back on anytime."}
                </span>
              </div>
            </div>
            <ul className={styles.digestPreview}>
              {summary.digest.preview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.digestActions}>
              <button
                type="button"
                className={styles.digestToggle}
                disabled={isPending}
                onClick={handleDigestToggle}
              >
                {summary.digest.enabled ? "Pause digests" : "Activate digests"}
              </button>
              <div className={styles.digestFrequency}>
                {DIGEST_OPTIONS.map((cadence) => (
                  <button
                    key={cadence}
                    type="button"
                    disabled={isPending}
                    className={`${styles.digestFrequencyButton} ${
                      summary.digest.cadence === cadence
                        ? styles.digestFrequencyButtonSelected
                        : ""
                    }`}
                    onClick={() => handleCadenceChange(cadence)}
                  >
                    {cadenceLabels[cadence]}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className={styles.digestPreviewButton}
                onClick={handleDigestPreview}
                disabled={isDigestPreviewLoading}
              >
                {isDigestPreviewLoading ? "Generating preview..." : "Preview next digest"}
              </button>
            </div>
          </motion.div>
        </motion.section>
      </div>

      <MetricPreferencesModal
        goal={preferencesGoal}
        options={preferencesGoal
          ? (() => {
              const filtered = metricOptions.filter(
                (option) =>
                  option.recommendedGoals.length === 0 ||
                  option.recommendedGoals.includes(preferencesGoal.id)
              );
              return filtered.length ? filtered : metricOptions;
            })()
          : []}
        selected={preferenceSelection}
        onToggle={togglePreferenceMetric}
        onClose={closePreferences}
        onSave={handlePreferencesSave}
        saving={isPending}
      />
      <DigestPreviewModal
        isOpen={isDigestPreviewOpen}
        html={digestPreviewHtml}
        loading={isDigestPreviewLoading}
        error={digestPreviewError}
        onClose={closeDigestPreview}
        onCopy={handleCopyDigest}
        copied={digestCopied}
      />
    </>
  );
}
