import styles from "../styles/PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
    </div>
  );
}