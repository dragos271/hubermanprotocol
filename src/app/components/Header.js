"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Header.module.css";
import "../../../components/PillNav/PillNav.css";
import PillNav from "../../../components/PillNav/PillNav";

const NAV_ITEMS = [
  { label: "Daily", href: "/daily" },
  { label: "Topics", href: "/topics" },
  { label: "Sleep", href: "/sleep" },
  { label: "Stress", href: "/stress" },
  { label: "Focus", href: "/mental" },
  { label: "NSDR", href: "/nsdr" },
  { label: "Charts", href: "/visualizations" },
];

export default function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const userFirstName = useMemo(() => {
    const fullName = session?.user?.name;
    if (fullName && fullName.trim()) {
      return fullName.split(" ")[0];
    }
    const email = session?.user?.email;
    return email ? email.split("@")[0] : null;
  }, [session?.user?.name, session?.user?.email]);

  const userInitial = useMemo(() => {
    const source = session?.user?.name ?? session?.user?.email ?? "";
    return source.trim().charAt(0).toUpperCase() || "U";
  }, [session?.user?.name, session?.user?.email]);

  const handleSignIn = () => signIn("google", { callbackUrl: "/dashboard" });
  const handleSignOut = () => signOut({ callbackUrl: "/" });

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.pillNavShell}>
          <PillNav
            logo="/logo.svg"
            logoAlt="Huberman Protocol"
            items={NAV_ITEMS}
            activeHref={pathname}
            className={styles.pillNav}
            ease="power2.easeOut"
            baseColor="rgba(12, 18, 34, 0.96)"
            pillColor="rgba(15, 23, 42, 0.72)"
            hoveredPillTextColor="#f8fafc"
            pillTextColor="#e2e8f0"
            initialLoadAnimation
          />
        </div>
        <div className={styles.authControls}>
          {status === "loading" ? (
            <div className={styles.authSkeleton} aria-hidden="true" />
          ) : session?.user ? (
            <>
              <a href="/dashboard" className={styles.sessionSummary}>
                <span className={styles.sessionAvatar} aria-hidden="true">
                  {session.user.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={session.user.image} alt="" />
                  ) : (
                    <span>{userInitial}</span>
                  )}
                </span>
                <span className={styles.sessionMeta}>
                  <span className={styles.sessionLabel}>Welcome</span>
                  <span className={styles.sessionName}>{userFirstName ?? "Explorer"}</span>
                </span>
              </a>
              <button type="button" className={styles.signOutGhost} onClick={handleSignOut}>
                Sign out
              </button>
            </>
          ) : (
            <button type="button" className={styles.signInCta} onClick={handleSignIn}>
              <span>Sign in</span>
              <span className={styles.signInIcon}>→</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
