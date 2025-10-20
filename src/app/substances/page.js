import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Alcohol, Tobacco & Cannabis – Huberman Protocol",
  description:
    "Understand the neuroscience cost of recreational substances and how to mitigate damage when use occurs.",
};

const heroStats = [
  { value: "0", label: "Safe Alcohol Dose" },
  { value: "48 h", label: "Brain Recovery Window" },
  { value: "2x", label: "Risk: Sleep Disruption" },
];

const protocols = [
  {
    icon: "🍷",
    timing: "Alcohol",
    title: "If You Drink, Do It Deliberately",
    description:
      "Huberman lab states no safe dose. If you choose to drink, plan for minimal frequency, hydrate aggressively, and respect recovery needs.",
    actions: [
      "Keep to 1 drink (women) / 2 drinks (men) max and not daily",
      "Consume with protein-rich meals and alternate water",
      "Avoid within 3 hours of bedtime to protect deep sleep",
    ],
    science:
      "Episode #86 cites hippocampal shrinkage and cancer risk even at low doses. Alcohol fragments sleep, spikes cortisol, and impairs neurogenesis for up to 5 days.",
  },
  {
    icon: "🚭",
    timing: "Nicotine",
    title: "Use Nicotine Without Smoke",
    description:
      "Smoking and vaping deliver toxins. If using nicotine for focus, choose low-dose gum or lozenges, cycle usage, and monitor blood pressure.",
    actions: [
      "Cap at 1–2 mg per session; avoid after 4 p.m.",
      "Never combine with combustible tobacco",
      "Take 2-week breaks each quarter to maintain receptor sensitivity",
    ],
    science:
      "Nicotine can enhance attention via acetylcholine receptors, but smoking introduces carbon monoxide and carcinogens. Huberman urges medical supervision and cessation planning.",
  },
  {
    icon: "🌿",
    timing: "Cannabis",
    title: "Timing & Dose Matter",
    description:
      "THC closer to bedtime can shorten REM and impair memory. Low-dose THC/CBD earlier in the evening reduces risk, but chronic use impacts motivation and hormone levels.",
    actions: [
      "Favor vaporized or edible microdoses (<5 mg THC) with higher CBD",
      "Avoid daily use to protect dopamine and sperm/egg quality",
      "Track sleep quality and mood; pause if metrics decline",
    ],
    science:
      "Huberman Lab shares data showing hippocampal impacts in frequent users and testosterone suppression. CBD alone may aid anxiety without these effects but requires lab testing for purity.",
  },
  {
    icon: "🛡️",
    timing: "Recovery",
    title: "Post-Use Protocol",
    description:
      "Support detox and brain repair with hydration, electrolytes, sweat, and antioxidant-rich foods.",
    actions: [
      "Hydrate with electrolytes + 1 g vitamin C",
      "Prioritize sleep hygiene and daylight following day",
      "Use zone-2 cardio and sauna (if cleared) to expedite clearance",
    ],
    science:
      "Episodes on alcohol and cannabis note increased oxidative stress. Hydration, heat, and aerobic exercise accelerate metabolism and restore neurotransmitter balance.",
  },
];

const steps = [
  {
    title: "Know Your Why",
    text: "Clarify whether substance use is social, stress-relief, or performance. Identify alternative tools (breathwork, cold, exercise) to fill the same role.",
  },
  {
    title: "Set Guardrails",
    text: "Define max doses, frequency, and hard cutoffs (e.g., no alcohol Monday–Thursday, no nicotine after 4 p.m.).",
  },
  {
    title: "Monitor Biomarkers",
    text: "Track sleep scores, HRV, mood, and productive output. If metrics fall, pause use for 30 days and reassess.",
  },
  {
    title: "Seek Support",
    text: "If quitting is the goal, consult addiction specialists. Huberman highlights pharmacological aids (naltrexone, varenicline) and behavioral protocols that increase success.",
  },
];

const resources = [
  {
    title: "Huberman Lab #86",
    detail: "Detailed breakdown of alcohol’s impact on the brain and body with reduction strategies.",
  },
  {
    title: "Episode #70",
    detail: "Nicotine science, benefits, and harm-reduction considerations when using gum or pouches.",
  },
  {
    title: "Addiction Support",
    detail: "SAMHSA helpline (1-800-662-HELP) and local clinicians for evidence-based cessation plans.",
  },
];

export default function SubstancesPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🚫"
          title="Recreational"
          accent="Substances"
          subtitle="Understand the true cost of alcohol, nicotine, and cannabis so you can choose deliberately—or design an exit plan."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Physiology Over Fables</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman emphasizes that no amount of alcohol is health-promoting, smoking always damages tissue, and chronic THC alters hormone and dopamine dynamics. Use this information to minimize harm or seek cessation.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  The nervous system retains a memory of every exposure. Sleep fragmentation, lowered testosterone/estrogen, and impaired neurogenesis accumulate over time. If you choose to use, do so sparingly, pair with replenshing habits, and work with medical professionals.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Harm Reduction Playbook</h2>
                <p className={styles.sectionSubtitle}>
                  Strategies to reduce damage while working toward healthier defaults.
                </p>
              </div>
              <div className={styles.protocolsGrid}>
                {protocols.map((protocol) => (
                  <FadeInScale key={protocol.title}>
                    <article className={styles.protocolCard}>
                      <div className={styles.protocolHeader}>
                        <div className={styles.protocolIcon}>{protocol.icon}</div>
                        <div className={styles.protocolTiming}>{protocol.timing}</div>
                      </div>
                      <h3>{protocol.title}</h3>
                      <p className={styles.protocolDescription}>{protocol.description}</p>
                      <div className={styles.protocolActions}>
                        <h4>Implementation</h4>
                        <ul>
                          {protocol.actions.map((action) => (
                            <li key={action}>{action}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.protocolScience}>
                        <h4>Why it works</h4>
                        <p>{protocol.science}</p>
                      </div>
                    </article>
                  </FadeInScale>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Action Steps</h2>
                <p className={styles.sectionSubtitle}>
                  Sequence these moves to regain control and protect brain health.
                </p>
              </div>
              <div className={styles.implementationSteps}>
                {steps.map((step, index) => (
                  <FadeInScale key={step.title} delay={index * 0.05}>
                    <div className={styles.implementationStep}>
                      <div className={styles.stepNumber}>{index + 1}</div>
                      <div className={styles.stepContent}>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  </FadeInScale>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Get Support</h2>
                <p className={styles.sectionSubtitle}>
                  Leverage science-backed resources and professionals.
                </p>
              </div>
              <div className={styles.resourceList}>
                {resources.map((resource) => (
                  <div key={resource.title} className={styles.resourceItem}>
                    <strong>{resource.title}</strong>
                    <span>{resource.detail}</span>
                  </div>
                ))}
              </div>
              <p className={styles.note}>
                *If you suspect dependence, seek immediate medical help. Combine behavioral tools (cold exposure, breathwork, exercise) with professional treatment to increase success rates.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
