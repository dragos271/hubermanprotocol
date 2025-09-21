"use client";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" className={styles.brand} aria-label="Huberman Protocol home">
          Huberman Protocol
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <a href="#sleep">Sleep</a>
          <a href="#stress">Stress</a>
          <a href="#mental">Mental</a>
          <a href="#physical">Physical</a>
          <a href="#nutrition">Nutrition</a>
          <a href="#nsdr">NSDR</a>
        </nav>
      </div>
    </header>
  );
}