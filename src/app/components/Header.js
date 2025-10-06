"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => pathname === path;
  
  const isMoreActive = () => {
    return ['/physical', '/seasonal', '/biohacking'].includes(pathname);
  };

  return (
    <header className={styles.header}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" className={styles.brand} aria-label="Huberman Protocol home">
          Huberman Protocol
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <Link 
            href="/daily" 
            className={isActive('/daily') ? styles.navHighlight : ''}
          >
            Daily
          </Link>
          <Link 
            href="/topics" 
            className={isActive('/topics') ? styles.navHighlight : ''}
          >
            Topics
          </Link>
          <Link 
            href="/sleep" 
            className={isActive('/sleep') ? styles.navHighlight : ''}
          >
            Sleep
          </Link>
          <Link 
            href="/stress" 
            className={isActive('/stress') ? styles.navHighlight : ''}
          >
            Stress
          </Link>
          <Link 
            href="/mental" 
            className={isActive('/mental') ? styles.navHighlight : ''}
          >
            Focus
          </Link>
          <Link 
            href="/nutrition" 
            className={isActive('/nutrition') ? styles.navHighlight : ''}
          >
            Nutrition
          </Link>
          <Link 
            href="/nsdr" 
            className={isActive('/nsdr') ? styles.navHighlight : ''}
          >
            NSDR
          </Link>
          <Link 
            href="/visualizations" 
            className={isActive('/visualizations') ? styles.navHighlight : ''}
          >
            Charts
          </Link>
          
          {/* Dropdown Menu */}
          <div 
            className={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className={`${styles.dropdownButton} ${isMoreActive() ? styles.navHighlight : ''}`}
            >
              More <span className={styles.dropdownArrow}>▼</span>
            </button>
            
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownSection}>
                  <h4>Physical Performance</h4>
                  <Link href="/physical">Movement & Exercise</Link>
                </div>
                
                <div className={styles.dropdownSection}>
                  <h4>Advanced Protocols</h4>
                  <Link href="/seasonal">Seasonal Optimization</Link>
                  <Link href="/biohacking">Biohacking Tools</Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}