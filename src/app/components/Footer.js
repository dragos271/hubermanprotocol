import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Huberman Protocol (fan-made). Educational use only.</p>
      </div>
    </footer>
  );
}