"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const primaryLinks = [
    { href: "/daily", label: "Daily" },
    { href: "/topics", label: "Topics" },
    { href: "/sleep", label: "Sleep" },
    { href: "/stress", label: "Stress" },
    { href: "/mental", label: "Focus" },
    { href: "/nutrition", label: "Nutrition" },
    { href: "/nsdr", label: "NSDR" },
    { href: "/visualizations", label: "Charts" },
  ];

  const moreSections = [
    {
      title: "Physical Performance",
      links: [{ href: "/physical", label: "Movement & Exercise" }],
    },
    {
      title: "Advanced Protocols",
      links: [
        { href: "/seasonal", label: "Seasonal Optimization" },
        { href: "/biohacking", label: "Biohacking Tools" },
      ],
    },
  ];

  const isActive = (path) => pathname === path;
  const isMoreActive = () =>
    moreSections.some((section) =>
      section.links.some((link) => isActive(link.href))
    );

  useEffect(() => {
    setIsMobileNavOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleDropdownPointerEnter = (event) => {
    if (event.pointerType === "mouse") {
      setIsDropdownOpen(true);
    }
  };

  const handleDropdownPointerLeave = (event) => {
    if (event.pointerType === "mouse") {
      setIsDropdownOpen(false);
    }
  };

  const handleNavLinkClick = () => {
    setIsMobileNavOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Huberman Protocol home">
          Huberman Protocol
        </Link>

        <button
          type="button"
          className={`${styles.navToggle} ${isMobileNavOpen ? styles.navToggleActive : ""}`}
          onClick={toggleMobileNav}
          aria-expanded={isMobileNavOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
        >
          <span className={styles.navToggleBar} />
          <span className={styles.navToggleBar} />
          <span className={styles.navToggleBar} />
        </button>

        <nav
          id="site-nav"
          className={`${styles.nav} ${isMobileNavOpen ? styles.navOpen : ""}`}
          aria-label="Primary"
        >
          <div className={styles.navLinks}>
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? styles.navHighlight : ""}
                onClick={handleNavLinkClick}
              >
                {link.label}
              </Link>
            ))}

            <div
              className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownOpen : ""}`}
              onPointerEnter={handleDropdownPointerEnter}
              onPointerLeave={handleDropdownPointerLeave}
            >
              <button
                type="button"
                className={`${styles.dropdownButton} ${isMoreActive() ? styles.navHighlight : ""}`}
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                More <span className={styles.dropdownArrow}>▼</span>
              </button>

              {isDropdownOpen && (
                <div className={styles.dropdownMenu} role="menu">
                  {moreSections.map((section) => (
                    <div key={section.title} className={styles.dropdownSection}>
                      <h4>{section.title}</h4>
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={handleNavLinkClick}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
