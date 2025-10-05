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
          <Link href="/daily">Daily</Link>
          <Link href="/sleep">Sleep</Link>
          <Link href="/stress">Stress</Link>
          <Link href="/mental">Mental</Link>
          <Link href="/physical">Physical</Link>
          <Link href="/nutrition">Nutrition</Link>
          <Link href="/nsdr">NSDR</Link>
          <Link href="/seasonal">Seasonal</Link>
          <Link href="/biohacking">Advanced</Link>
        </nav>
      </div>
    </header>
  );
}