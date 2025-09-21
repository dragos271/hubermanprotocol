import styles from "../styles/ArticleCard.module.css";

export default function ArticleCard({ title, blurb, href = "#" }) {
  return (
    <a className={styles.card} href={href}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.blurb}>{blurb}</p>
      <span className={styles.cta}>Read →</span>
    </a>
  );
}