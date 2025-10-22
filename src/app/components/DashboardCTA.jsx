"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import styles from "../page.module.css";

export default function DashboardCTA() {
  const { data: session, status } = useSession();

  if (status !== "authenticated" || !session?.user) {
    return null;
  }

  return (
    <Link href="/dashboard" className={styles.buttonTertiary}>
      <span>📊 View Dashboard</span>
    </Link>
  );
}
