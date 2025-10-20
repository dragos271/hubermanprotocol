"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";
import {
  allTopics,
  getPopularTopics,
  topicCategories,
} from "@/data/topics";
// (Reverted) Removed scroll-spy logic

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const categories = topicCategories;
const popularTopics = getPopularTopics();
const heroStats = [
  { label: "Topics Available", value: allTopics.length },
  { label: "Categories", value: categories.length },
  { label: "Science-Based", value: "100%" },
];

const getSectionId = (categoryId) => categoryId;

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default function TopicsPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const hasQuery = normalizedQuery.length > 0;

  const filteredCategories = useMemo(() => {
    if (!hasQuery) return categories;
    return categories
      .map((category) => {
        const items = category.items.filter((topic) => {
          const haystack = `${topic.title} ${topic.description}`.toLowerCase();
          return haystack.includes(normalizedQuery);
        });
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [hasQuery, normalizedQuery]);

  const filteredPopular = useMemo(() => {
    if (!hasQuery) return popularTopics;
    return popularTopics.filter((topic) => {
      const haystack = `${topic.title} ${topic.description}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [hasQuery, normalizedQuery]);

  const categoriesToRender = hasQuery ? filteredCategories : categories;
  const popularToRender = hasQuery ? filteredPopular : popularTopics;
  const totalMatches = hasQuery
    ? filteredCategories.reduce((acc, category) => acc + category.items.length, 0)
    : allTopics.length;
  const noTopicMatches = hasQuery && totalMatches === 0;

  const highlightText = (text) => {
    if (!hasQuery) return text;
    const regex = new RegExp(`(${escapeRegExp(normalizedQuery)})`, "ig");
    return text.split(regex).map((part, index) => {
      if (!part) return null;
      return part.toLowerCase() === normalizedQuery ? (
        <mark key={`highlight-${index}`} className={styles.highlight}>
          {part}
        </mark>
      ) : (
        part
      );
    });
  };

  return (
    <>
      <Header />
      <main
        className={`container ${styles.topicsContainer}`}
        style={{ marginTop: "100px", paddingBottom: "100px" }}
      >
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroShell}>
              <div className={styles.heroContent}>
                <div className={styles.heroBadge}>🧬 Science-Based Protocols</div>
                <h1 className={styles.heroTitle}>Huberman Topics</h1>
                <p className={styles.heroLead}>
                  Evidence-based protocols and insights from Dr. Andrew Huberman&apos;s
                  research
                </p>
              </div>

              <div className={styles.heroStatsGrid}>
                {heroStats.map((stat) => (
                  <div key={stat.label} className={styles.heroStatCard}>
                    <div className={styles.heroStatValue}>{stat.value}</div>
                    <div className={styles.heroStatLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <div className={styles.contentWrapper}>
          <FadeIn delay={0.1}>
            <nav className={styles.tableOfContents}>
              <div className={styles.tocHeader}>
                <h3>Navigate Topics</h3>
              </div>
              <div className={styles.tocNav}>
                <button
                  onClick={() => scrollToSection("popular")}
                  className={styles.tocLink}
                >
                  🌟 Popular Topics
                </button>
                {categoriesToRender.length === 0 ? (
                  <span className={styles.tocEmpty}>No categories in view</span>
                ) : (
                  categoriesToRender.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(getSectionId(category.id))}
                    className={styles.tocLink}
                  >
                    {category.title}
                  </button>
                  ))
                )}
              </div>
            </nav>
          </FadeIn>

          <div className={styles.mainContent}>
            <FadeIn delay={0.05}>
              <div className={styles.searchPanel}>
                <div className={styles.searchField}>
                  <span className={styles.searchIcon}>🔍</span>
                  <input
                    id="topic-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search topics, protocols, or keywords"
                    aria-label="Search topics"
                    className={styles.searchInput}
                  />
                  {query ? (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className={styles.clearButton}
                      aria-label="Clear search"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>
                <p className={styles.searchMeta}>
                  {hasQuery
                    ? `${totalMatches} ${totalMatches === 1 ? "topic matches" : "topics match"}`
                    : "Tip: try keywords like sleep, dopamine, or routines"}
                </p>
              </div>
            </FadeIn>

            <section id="popular" className={styles.popularSection}>
              <FadeIn>
                <h2 className={styles.sectionTitle}>Most Popular Topics</h2>
                <p className={styles.sectionSubtitle}>
                  Start with these foundational protocols for maximum impact
                </p>
              </FadeIn>

              {hasQuery && popularToRender.length === 0 ? (
                <p className={styles.emptyState}>No popular topics match your search.</p>
              ) : (
                <div className={styles.popularGrid}>
                  {popularToRender.map((topic, index) => (
                    <FadeInScale key={topic.slug} delay={index * 0.05}>
                      <Link href={topic.href} className={styles.topicCard}>
                        <div className={styles.topicIcon}>{topic.icon}</div>
                        <div className={styles.topicContent}>
                          <h3 className={styles.topicTitle}>{highlightText(topic.title)}</h3>
                          <p className={styles.topicDescription}>
                            {highlightText(topic.description)}
                          </p>
                        </div>
                      </Link>
                    </FadeInScale>
                  ))}
                </div>
              )}
            </section>

            <section className={styles.allTopicsSection}>
              <FadeIn>
                <h2 className={styles.sectionTitle}>All Topics</h2>
                <p className={styles.sectionSubtitle}>
                  Comprehensive collection organized by category
                </p>
              </FadeIn>

              {noTopicMatches ? (
                <p className={styles.emptyState}>
                  No topics match “{query}”. Try another keyword or clear the search.
                </p>
              ) : (
                <div className={styles.categoriesContainer}>
                  {categoriesToRender.map((category, categoryIndex) => (
                    <FadeIn key={category.id} delay={categoryIndex * 0.05}>
                      <div
                        id={getSectionId(category.id)}
                        className={styles.categorySection}
                      >
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.categoryGrid}>
                          {category.items.map((topic, index) => (
                            <FadeInScale
                              key={topic.slug}
                              delay={
                                (categoryIndex * category.items.length + index) * 0.02
                              }
                            >
                              <Link href={topic.href} className={styles.topicCardSmall}>
                                <div className={styles.topicIconSmall}>{topic.icon}</div>
                                <div className={styles.topicContentSmall}>
                                  <h4 className={styles.topicTitleSmall}>
                                    {highlightText(topic.title)}
                                  </h4>
                                  <p className={styles.topicDescriptionSmall}>
                                    {highlightText(topic.description)}
                                  </p>
                                </div>
                              </Link>
                            </FadeInScale>
                          ))}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
