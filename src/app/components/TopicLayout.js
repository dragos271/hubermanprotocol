"use client";

import { FadeIn } from "./Motion";
import styles from "./TopicLayout.module.css";

export default function TopicLayout({
  badge = "Science-Based Protocols",
  icon,
  title,
  accent,
  subtitle,
  stats = [],
  children,
}) {
  return (
    <div className={styles.pageWrap}>
      <section className={styles.hero}>
        <FadeIn>
          <div className={styles.heroContent}>
            {badge ? <span className={styles.heroBadge}>{badge}</span> : null}
            {icon ? <div className={styles.heroIcon}>{icon}</div> : null}
            <h1 className={styles.title}>
              {title}{" "}
              {accent ? <span className={styles.titleGradient}>{accent}</span> : null}
            </h1>
            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            {stats.length > 0 ? (
              <div className={styles.heroStats}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </FadeIn>
      </section>

      {children}
    </div>
  );
}
