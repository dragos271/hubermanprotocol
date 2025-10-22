"use client";

import { useEffect, useMemo, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import styles from "./ProtocolWizard.module.css";

const goalOptions = [
  {
    id: "sleep",
    label: "Sleep Optimization",
    description: "Fall asleep faster, deepen sleep, wake energized.",
  },
  {
    id: "focus",
    label: "Deep Focus",
    description: "Extend productive blocks, reduce distractions.",
  },
  {
    id: "body",
    label: "Body Recomposition",
    description: "Build muscle, support fat loss, stabilize energy.",
  },
  {
    id: "stress",
    label: "Stress Resilience",
    description: "Stay calm under pressure and recover quickly.",
  },
  {
    id: "energy",
    label: "Daily Energy",
    description: "Eliminate crashes, maintain steady output all day.",
  },
  {
    id: "neuro",
    label: "Learning & Creativity",
    description: "Accelerate skill acquisition and idea generation.",
  },
];

const motivationCopy = {
  sleep:
    "Consistent sleep boosts learning, immune health, and hormone balance. Huberman Lab shows morning light + evening dimness can improve sleep latency by 25–50%.",
  focus:
    "Structured 90/20 work cycles with NSDR resets restore dopamine and attention. Studies cited by Huberman demonstrate 40–60% longer focus windows.",
  body:
    "Protein timing, resistance training, and deliberate cold shift body composition and metabolic flexibility without burnout.",
  stress:
    "Physiological sighs, NSDR, and cold exposure recalibrate cortisol and autonomic balance—critical for high performers.",
  energy:
    "Circadian-aligned meals, movement snacks, and electrolytes stabilize blood sugar and catecholamines, preventing afternoon crashes.",
  neuro:
    "NSDR, spaced learning, and neuroplasticity primers (movement + novelty) speed skill acquisition and creativity.",
};

const goalRecommendations = {
  sleep: {
    morning: ["Get outside for 10–30 minutes within 60 minutes of waking."],
    daytime: ["Guard caffeine cutoff 8 hours before sleep."],
    evening: ["Dim lights 2–3 hours before bed and run an NSDR wind-down."],
    pages: [{ title: "Sleep Hygiene", href: "/sleep-hygiene" }],
  },
  focus: {
    morning: ["Delay caffeine 90 minutes and set a clear 90-minute deep work block."],
    daytime: ["Insert physiological sighs between tasks to reset stress."],
    evening: ["Journal wins + plan tomorrow to offload cognitive load."],
    pages: [{ title: "Focus & Concentration", href: "/focus-concentration" }],
  },
  body: {
    morning: ["Break fast with 30–40 g protein and hydration + electrolytes."],
    daytime: ["Schedule zone-2 cardio or strength work based on energy."],
    evening: ["Finish last meal 3 hours before bed to support sleep + metabolism."],
    pages: [
      { title: "Fitness & Workouts", href: "/fitness-workouts" },
      { title: "Diet & Nutrition", href: "/diet-nutrition" },
    ],
  },
  stress: {
    morning: ["Use panoramic vision walk or gratitude reflection to set tone."],
    daytime: ["Practice physiological sigh or box breathing when tension rises."],
    evening: ["Run 10-minute NSDR/yoga nidra to lower cortisol before bed."],
    pages: [
      { title: "Nervous System Regulation", href: "/nervous-system" },
      { title: "NSDR & Meditation", href: "/nsdr-meditation" },
    ],
  },
  energy: {
    morning: ["Hydrate with water + electrolytes immediately after waking."],
    daytime: ["Schedule a 10-minute walk or movement snack every 90 minutes."],
    evening: ["Finish last meal 3 hours before bed and dim lights to protect sleep."],
    pages: [
      { title: "Diet & Nutrition", href: "/diet-nutrition" },
      { title: "Daily Routine", href: "/daily-routine" },
    ],
  },
  neuro: {
    morning: ["Prime with 20 minutes cardio or novelty practice before learning."],
    daytime: ["Use 90-minute learning blocks + NSDR for consolidation."],
    evening: ["Review key concepts before sleep to leverage memory consolidation."],
    pages: [
      { title: "Memory & Learning", href: "/memory-learning" },
      { title: "Unlocking Creativity", href: "/creativity" },
    ],
  },
};

const availableTimeOptions = [
  { value: "<30", label: "Under 30 minutes", description: "Micro-habits + focused anchors" },
  { value: "30-60", label: "30–60 minutes", description: "Balanced protocol" },
  { value: ">60", label: "More than 60 minutes", description: "Full training & recovery" },
];

const scheduleOptions = [
  { value: "morning", label: "Morning focus", description: "Most energy before noon" },
  { value: "midday", label: "Midday flex", description: "Balanced daytime availability" },
  { value: "evening", label: "Evening focus", description: "Prime output after 5 p.m." },
  { value: "varied", label: "Variable / shift", description: "Schedule changes frequently" },
];

const habitOptions = [
  { id: "consistentSleep", label: "Consistent sleep schedule" },
  { id: "caffeine", label: "Leans on caffeine" },
  { id: "eveningScreens", label: "Screens late into night" },
  { id: "stressfulWork", label: "High-stress workload" },
  { id: "travelOften", label: "Frequent travel / jet lag" },
  { id: "nightShift", label: "Rotating / night shift" },
  { id: "newParent", label: "New parent / limited sleep" },
];

const experienceOptions = [
  {
    value: "beginner",
    label: "New to routines",
    description: "Just getting started, need simple wins",
  },
  {
    value: "intermediate",
    label: "Some structure",
    description: "Occasionally consistent, ready to level up",
  },
  {
    value: "advanced",
    label: "Dialed in",
    description: "Looking for optimization & data",
  },
];

const equipmentOptions = [
  {
    value: "none",
    label: "No equipment",
    description: "Bodyweight, limited space",
  },
  {
    value: "basic",
    label: "Bands / dumbbells",
    description: "Home gym basics",
  },
  {
    value: "full",
    label: "Gym access",
    description: "Full equipment available",
  },
];

const basePlan = {
  morning: [
    "Hydrate right after waking with water + electrolytes.",
    "Spend at least 5 minutes setting your daily priority.",
  ],
  daytime: [
    "Batch deep work into two 90-minute focus blocks.",
    "Take 5–10 minute movement or sunlight breaks every 90 minutes.",
  ],
  evening: [
    "Dim lights and taper stimulation 2–3 hours before bed.",
    "Log wins + plan tomorrow to clear mental residue.",
  ],
  pages: [],
};

function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isLocked]);
}

function buildPlan(selections) {
  const plan = {
    morning: [...basePlan.morning],
    daytime: [...basePlan.daytime],
    evening: [...basePlan.evening],
    pages: [...basePlan.pages],
  };

  selections.goals.forEach((goal) => {
    const data = goalRecommendations[goal];
    if (!data) return;
    plan.morning.push(...data.morning);
    plan.daytime.push(...data.daytime);
    plan.evening.push(...data.evening);
    data.pages.forEach((page) => {
      if (!plan.pages.some((existing) => existing.href === page.href)) {
        plan.pages.push(page);
      }
    });
  });

  if (selections.schedule === "morning") {
    plan.morning.push("Front-load the most demanding work before noon.");
    plan.evening.push("Use lighter creative or reflective tasks post dinner.");
  } else if (selections.schedule === "evening") {
    plan.daytime.push("Protect the evening focus window—communicate boundaries.");
    plan.evening.push("Signal shutdown with NSDR or breath practice before bed.");
  } else if (selections.schedule === "varied") {
    plan.morning.push("Use light therapy / hydration to anchor inconsistent shifts.");
    plan.daytime.push("Lean on NSDR between shifts to reset alertness.");
  }

  if (selections.availableTime === "<30") {
    plan.daytime.push("Stack micro-habits (5-minute walks, quick breath resets) across the day.");
  } else if (selections.availableTime === ">60") {
    plan.daytime.push("Schedule full strength + conditioning blocks each week and log performance.");
  }

  return plan;
}

function SummaryPlan({ plan }) {
  return (
    <div className={styles.summaryGrid}>
      <div className={styles.summarySection}>
        <h3>Morning Anchors</h3>
        <ul>
          {plan.morning.map((item) => (
            <li key={`morning-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.summarySection}>
        <h3>Daytime Moves</h3>
        <ul>
          {plan.daytime.map((item) => (
            <li key={`day-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.summarySection}>
        <h3>Evening Reset</h3>
        <ul>
          {plan.evening.map((item) => (
            <li key={`evening-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
      {plan.pages.length > 0 && (
        <div className={styles.summarySection}>
          <h3>Recommended Deep Dives</h3>
          <div className={styles.summaryLinks}>
            {plan.pages.map((page) => (
              <a key={page.href} href={page.href} className={styles.summaryLink}>
                <span>{page.title}</span>
                <span>→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MotivationStep({ goals }) {
  if (!goals.length) {
    return <p>Select at least one focus area to see why it matters.</p>;
  }
  return (
    <div className={styles.motivationGrid}>
      {goals.map((goal) => (
        <div key={goal} className={styles.motivationCard}>
          <h3>{goalOptions.find((opt) => opt.id === goal)?.label ?? goal}</h3>
          <p>{motivationCopy[goal]}</p>
        </div>
      ))}
    </div>
  );
}

function AccountPrompt({ onClose, hasSaved }) {
  return (
    <div className={styles.loginModal} role="dialog" aria-modal="true">
      <div className={styles.loginCard}>
        <h3>Save & Track Your Plan</h3>
        <p>
          {hasSaved
            ? "Your plan is saved to this device. Create an account to sync across devices, adapt recommendations, and receive optional digests."
            : "We’ll remember your routine, adapt suggestions, and send optional nudges."}
        </p>
        <ul className={styles.benefitsList}>
          <li>Sync tailored protocol across devices</li>
          <li>Adaptive adjustments as your goals evolve</li>
          <li>Streak tracking + weekly digests</li>
        </ul>
        <div className={styles.loginActions}>
          <button
            type="button"
            className={styles.emailButton}
            onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
          >
            Sign in / Create account
          </button>
          <button
            type="button"
            className={styles.socialButton}
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Continue with Google
          </button>
        </div>
        <button type="button" className={styles.closeLogin} onClick={onClose}>
          Maybe later
        </button>
      </div>
    </div>
  );
}

function ProtocolWizard({ onClose }) {
  const [step, setStep] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [availableTime, setAvailableTime] = useState("30-60");
  const [schedule, setSchedule] = useState("morning");
  const [habits, setHabits] = useState([]);
  const [experience, setExperience] = useState("beginner");
  const [equipment, setEquipment] = useState("none");
  const [showAccountPrompt, setShowAccountPrompt] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [hasSaved, setHasSaved] = useState(false);
  const { data: session } = useSession();

  useBodyScrollLock(true);

  const selections = useMemo(
    () => ({
      goals: selectedGoals,
      availableTime,
      schedule,
      habits,
      experience,
      equipment,
    }),
    [selectedGoals, availableTime, schedule, habits, experience, equipment]
  );

  const metadata = useMemo(
    () => ({ availableTime, schedule, habits, experience, equipment }),
    [availableTime, schedule, habits, experience, equipment]
  );

  const plan = useMemo(() => buildPlan(selections), [selections]);

  const steps = [
    { title: "What brings you here?", total: 4 },
    { title: "Tell us about your context", total: 4 },
    { title: "Why this matters", total: 4 },
    { title: "Your tailored protocol", total: 4 },
  ];

  const canContinue = () => {
    if (step === 0) {
      return selectedGoals.length > 0;
    }
    if (step === 1) {
      return Boolean(experience) && Boolean(equipment);
    }
    return true;
  };

  const toggleGoal = (id) => {
    setSelectedGoals((prev) => (prev.includes(id) ? prev.filter((goal) => goal !== id) : [...prev, id]));
  };

  const toggleHabit = (id) => {
    setHabits((prev) => (prev.includes(id) ? prev.filter((habit) => habit !== id) : [...prev, id]));
  };

  async function handleSave() {
    setSaving(true);
    setSaveError("");
    try {
      const response = await fetch("/api/protocol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goals: selections.goals,
          plan,
          metadata,
          userId: session?.user?.id ?? undefined,
        }),
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        throw new Error(errorPayload.error || "Failed to save plan.");
      }

      setHasSaved(true);
      if (!session?.user?.id) {
        setShowAccountPrompt(true);
      }
    } catch (error) {
      console.error(error);
      setSaveError(error instanceof Error ? error.message : "Failed to save plan.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.panel}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close wizard">
          ✕
        </button>
        <div className={styles.stepHeader}>
          <h2 className={styles.stepTitle}>{steps[step].title}</h2>
          <span className={styles.stepIndicator}>
            Step {step + 1} / {steps.length}
          </span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressValue} style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>

        {step === 0 && (
          <div className={styles.contentGrid}>
            <div>
              <p className={styles.sectionLabel}>Choose your focus areas</p>
              <div className={styles.goalGrid}>
                {goalOptions.map((option) => {
                  const selected = selectedGoals.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`${styles.optionCard} ${selected ? styles.optionCardSelected : ""}`}
                      onClick={() => toggleGoal(option.id)}
                      aria-pressed={selected}
                    >
                      <div>
                        <h3 className={styles.optionTitle}>{option.label}</h3>
                        <p className={styles.optionDescription}>{option.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className={styles.sectionLabel}>Daily availability</p>
              <div className={styles.chipGroup}>
                {availableTimeOptions.map((option) => {
                  const selected = availableTime === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`${styles.chip} ${selected ? styles.chipSelected : ""}`}
                      onClick={() => setAvailableTime(option.value)}
                      aria-pressed={selected}
                    >
                      <span>{option.label}</span>
                      <small>{option.description}</small>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className={styles.sectionLabel}>When do you have the most flexibility?</p>
              <div className={styles.chipGroup}>
                {scheduleOptions.map((option) => {
                  const selected = schedule === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`${styles.chip} ${selected ? styles.chipSelected : ""}`}
                      onClick={() => setSchedule(option.value)}
                      aria-pressed={selected}
                    >
                      <span>{option.label}</span>
                      <small>{option.description}</small>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className={styles.contentGrid}>
            <div>
              <p className={styles.sectionLabel}>Which habits already describe you?</p>
              <div className={styles.chipGroup}>
                {habitOptions.map((option) => {
                  const active = habits.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`${styles.chip} ${active ? styles.chipSelected : ""}`}
                      onClick={() => toggleHabit(option.id)}
                      aria-pressed={active}
                    >
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <p className={styles.sectionLabel}>How experienced are you with structured routines?</p>
              <div className={styles.chipGroup}>
                {experienceOptions.map((option) => {
                  const selected = experience === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`${styles.chip} ${selected ? styles.chipSelected : ""}`}
                      onClick={() => setExperience(option.value)}
                      aria-pressed={selected}
                    >
                      <span>{option.label}</span>
                      <small>{option.description}</small>
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <p className={styles.sectionLabel}>What equipment or environment do you have?</p>
              <div className={styles.chipGroup}>
                {equipmentOptions.map((option) => {
                  const selected = equipment === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`${styles.chip} ${selected ? styles.chipSelected : ""}`}
                      onClick={() => setEquipment(option.value)}
                      aria-pressed={selected}
                    >
                      <span>{option.label}</span>
                      <small>{option.description}</small>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.contentGrid}>
            <MotivationStep goals={selectedGoals} />
          </div>
        )}

        {step === 3 && (
          <div className={styles.contentGrid}>
            <SummaryPlan plan={plan} />
            {saveError && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,0,0,0.3)",
                  background: "rgba(255,0,0,0.08)",
                  color: "#ffb4b4",
                }}
              >
                {saveError}
              </div>
            )}
            {hasSaved && !saveError && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid rgba(138, 180, 255, 0.35)",
                  background: "rgba(138, 180, 255, 0.12)",
                  color: "var(--text)",
                }}
              >
                Plan saved. Create an account to sync across devices and unlock streak tracking.
              </div>
            )}
          </div>
        )}

        <div className={styles.buttonRow}>
          <button
            type="button"
            className={styles.ghostButton}
            onClick={() => (step === 0 ? onClose() : setStep((prev) => Math.max(prev - 1, 0)))}
          >
            {step === 0 ? "Cancel" : "Back"}
          </button>
          {step < steps.length - 1 ? (
            <button
              type="button"
              className={styles.primaryButton}
              disabled={!canContinue()}
              onClick={() => setStep((prev) => Math.min(prev + 1, steps.length - 1))}
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving..." : hasSaved ? "Update Plan" : "Save & Track this Plan"}
            </button>
          )}
        </div>

        {showAccountPrompt && (
          <AccountPrompt onClose={() => setShowAccountPrompt(false)} hasSaved={hasSaved} />
        )}
      </div>
    </div>
  );
}

export default function StartProtocolWizard({ buttonClassName = "", buttonLabel = "Start Your Protocol" }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const finalLabel =
    status === "loading"
      ? "Loading..."
      : session?.user
      ? "View your protocol"
      : buttonLabel;
  const handleClick = () => {
    if (session?.user) {
      window.location.href = "/dashboard";
      return;
    }
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className={buttonClassName}
        onClick={handleClick}
        disabled={status === "loading"}
        style={{ cursor: "pointer" }}
      >
        {finalLabel}
      </button>
      {isOpen && !session?.user && <ProtocolWizard onClose={() => setIsOpen(false)} />}
    </>
  );
}
