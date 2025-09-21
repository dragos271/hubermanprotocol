import styles from "../styles/SectionCard.module.css";

export default function SectionCard({ id, title, icon, bullets = [], footnote }) {
  return (
    <section id={id} className={styles.card} aria-labelledby={`${id}-title`}>
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden>{icon}</span>
        <h3 id={`${id}-title`} className={styles.title}>{title} Protocol</h3>
      </div>
      <ul className={styles.list}>
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      {footnote && <p className={styles.foot}>{footnote}</p>}
    </section>
  );
}