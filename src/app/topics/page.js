"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";
// (Reverted) Removed scroll-spy logic

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

// Popular Topics (most accessed/important)
const popularTopics = [
  {
    title: "Sleep Hygiene",
    icon: "🛏️",
    description: "Master the fundamentals of restorative sleep",
    category: "Essential",
    link: "/sleep-hygiene"
  },
  {
    title: "Light Exposure and Circadian Rhythm",
    icon: "☀️",
    description: "Optimize your biological clock with light protocols",
    category: "Essential",
    link: "/light-circadian"
  },
  {
    title: "Focus and Concentration",
    icon: "🎯",
    description: "Enhance cognitive performance and attention",
    category: "Performance",
    link: "/focus-concentration"
  },
  {
    title: "Fitness and Workout Routines",
    icon: "🏋️",
    description: "Science-based exercise protocols for strength and endurance",
    category: "Physical",
    link: "/fitness-workouts"
  },
  {
    title: "NSDR, Meditation and Breathwork",
    icon: "🧘",
    description: "Non-sleep deep rest and stress management techniques",
    category: "Recovery",
    link: "/nsdr-meditation"
  },
  {
    title: "Diet and Nutrition",
    icon: "🥗",
    description: "Nutritional timing and food choices for optimal health",
    category: "Nutrition",
    link: "/diet-nutrition"
  },
  {
    title: "Caffeine Science",
    icon: "☕",
    description: "Strategic caffeine use for energy and performance",
    category: "Performance",
    link: "/caffeine-science"
  },
  {
    title: "Cold Plunges and Deliberate Cooling",
    icon: "🧊",
    description: "Cold exposure protocols for resilience and recovery",
    category: "Heat & Cold",
    link: "/cold-exposure"
  }
];

// All Topics organized by category
const allTopics = [
  // Sleep & Recovery
  {
    title: "Sleep Hygiene",
    icon: "🛏️",
    description: "Master the fundamentals of restorative sleep",
    category: "Sleep & Recovery",
    link: "/sleep-hygiene"
  },
  {
    title: "NSDR, Meditation and Breathwork",
    icon: "🧘",
    description: "Non-sleep deep rest and stress management techniques",
    category: "Sleep & Recovery",
    link: "/nsdr-meditation"
  },
  
  // Light & Circadian
  {
    title: "Light Exposure and Circadian Rhythm",
    icon: "☀️",
    description: "Optimize your biological clock with light protocols",
    category: "Light & Circadian",
    link: "/light-circadian"
  },
  
  // Mental Performance
  {
    title: "Focus and Concentration",
    icon: "🎯",
    description: "Enhance cognitive performance and attention",
    category: "Mental Performance",
    link: "/focus-concentration"
  },
  {
    title: "Memory and Learning",
    icon: "🧠",
    description: "Improve retention and accelerate skill acquisition",
    category: "Mental Performance",
    link: "/memory-learning"
  },
  {
    title: "The Brain and Neuroplasticity",
    icon: "🧬",
    description: "Understand and harness brain adaptability",
    category: "Mental Performance",
    link: "/brain-neuroplasticity"
  },
  {
    title: "Mental Health",
    icon: "💭",
    description: "Science-based approaches to psychological wellbeing",
    category: "Mental Performance",
    link: "/mental-health"
  },
  {
    title: "The Science of ADHD",
    icon: "⚡",
    description: "Understanding and managing attention disorders",
    category: "Mental Performance",
    link: "/adhd-science"
  },
  {
    title: "Unlocking Creativity",
    icon: "💡",
    description: "Protocols for enhanced creative thinking",
    category: "Mental Performance",
    link: "/creativity"
  },
  
  // Physical Health
  {
    title: "Fitness and Workout Routines",
    icon: "🏋️",
    description: "Science-based exercise protocols for strength and endurance",
    category: "Physical Health",
    link: "/fitness-workouts"
  },
  {
    title: "General Health",
    icon: "⚕️",
    description: "Foundational health principles and practices",
    category: "Physical Health",
    link: "/general-health"
  },
  
  // Nutrition & Substances
  {
    title: "Diet and Nutrition",
    icon: "🥗",
    description: "Nutritional timing and food choices for optimal health",
    category: "Nutrition & Substances",
    link: "/diet-nutrition"
  },
  {
    title: "Caffeine Science",
    icon: "☕",
    description: "Strategic caffeine use for energy and performance",
    category: "Nutrition & Substances",
    link: "/caffeine-science"
  },
  {
    title: "Supplementation",
    icon: "💊",
    description: "Evidence-based supplement protocols",
    category: "Nutrition & Substances",
    link: "/supplementation"
  },
  {
    title: "Alcohol, Tobacco and Cannabis",
    icon: "🚫",
    description: "Understanding the effects of recreational substances",
    category: "Nutrition & Substances",
    link: "/substances"
  },
  
  // Hormones & Biology
  {
    title: "Hormone Health",
    icon: "⚖️",
    description: "Optimize hormonal balance naturally",
    category: "Hormones & Biology",
    link: "/hormone-health"
  },
  {
    title: "Male Sexual Health",
    icon: "♂️",
    description: "Male-specific health and performance optimization",
    category: "Hormones & Biology",
    link: "/male-health"
  },
  {
    title: "Female Sexual Health",
    icon: "♀️",
    description: "Female-specific health and hormonal optimization",
    category: "Hormones & Biology",
    link: "/female-health"
  },
  {
    title: "Aging and Longevity Science",
    icon: "⏳",
    description: "Protocols for healthy aging and lifespan extension",
    category: "Hormones & Biology",
    link: "/longevity"
  },
  
  // Heat & Cold Exposure
  {
    title: "Cold Plunges and Deliberate Cooling",
    icon: "🧊",
    description: "Cold exposure protocols for resilience and recovery",
    category: "Heat & Cold Exposure",
    link: "/cold-exposure"
  },
  {
    title: "Sauna and Heat Exposure",
    icon: "🔥",
    description: "Heat therapy for recovery and performance",
    category: "Heat & Cold Exposure",
    link: "/heat-exposure"
  },
  
  // Psychology & Behavior
  {
    title: "Achieving Goals and Building Habits",
    icon: "🎯",
    description: "Behavioral science for lasting change",
    category: "Psychology & Behavior",
    link: "/goals-habits"
  },
  {
    title: "Motivation and Willpower",
    icon: "💪",
    description: "Sustain drive and overcome resistance",
    category: "Psychology & Behavior",
    link: "/motivation"
  },
  {
    title: "Emotional Intelligence and Relationships",
    icon: "❤️",
    description: "Improve social connections and emotional regulation",
    category: "Psychology & Behavior",
    link: "/relationships"
  },
  {
    title: "Happiness and Wellbeing",
    icon: "😊",
    description: "Science-based approaches to life satisfaction",
    category: "Psychology & Behavior",
    link: "/happiness"
  },
  
  // Environment & Lifestyle
  {
    title: "Optimizing Your Environment",
    icon: "🏠",
    description: "Create spaces that support optimal performance",
    category: "Environment & Lifestyle",
    link: "/environment"
  },
  {
    title: "Society and Technology",
    icon: "📱",
    description: "Navigate modern technology's impact on biology",
    category: "Environment & Lifestyle",
    link: "/technology"
  },
  {
    title: "Building Your Daily Routine",
    icon: "📅",
    description: "Structure your day for maximum effectiveness",
    category: "Environment & Lifestyle",
    link: "/daily-routine"
  },
  
  // Nervous System
  {
    title: "How to Regulate Your Nervous System",
    icon: "⚡",
    description: "Master autonomic nervous system control",
    category: "Nervous System",
    link: "/nervous-system"
  }
];

// Group topics by category
const topicsByCategory = allTopics.reduce((acc, topic) => {
  if (!acc[topic.category]) {
    acc[topic.category] = [];
  }
  acc[topic.category].push(topic);
  return acc;
}, {});

export default function TopicsPage() {

  return (
    <>
      <Header />
  <main className="container" style={{ marginTop: '100px', paddingBottom: '100px' }}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                Science-Based <span className={styles.titleGradient}>Topics</span>
              </h1>
              <p className={styles.subtitle}>
                Explore evidence-based protocols and insights from Dr. Andrew Huberman&apos;s research. 
                From foundational health practices to advanced optimization strategies.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>{allTopics.length}</div>
                  <div className={styles.statLabel}>Topics Available</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>{Object.keys(topicsByCategory).length}</div>
                  <div className={styles.statLabel}>Categories</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Science-Based</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Content with Table of Contents */}
        <div className={styles.contentWrapper}>
          {/* Table of Contents Sidebar */}
          <FadeIn delay={0.1}>
            <nav className={styles.tableOfContents}>
              <div className={styles.tocHeader}>
                <h3>Navigate Topics</h3>
              </div>
              <div className={styles.tocNav}>
                <button 
                  onClick={() => scrollToSection('popular')} 
                  className={styles.tocLink}
                >
                  🌟 Popular Topics
                </button>
                {Object.keys(topicsByCategory).map((category) => (
                  <button 
                    key={category} 
                    onClick={() => scrollToSection(category.toLowerCase().replace(/\s+/g, '-'))} 
                    className={styles.tocLink}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </nav>
          </FadeIn>

          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Popular Topics */}
            <section id="popular" className={styles.popularSection}>
              <FadeIn>
                <h2 className={styles.sectionTitle}>Most Popular Topics</h2>
                <p className={styles.sectionSubtitle}>
                  Start with these foundational protocols for maximum impact
                </p>
              </FadeIn>

              <div className={styles.popularGrid}>
                {popularTopics.map((topic, index) => (
                  <FadeInScale key={topic.title} delay={index * 0.05}>
                    <Link href={topic.link} className={styles.topicCard}>
                      <div className={styles.topicIcon}>{topic.icon}</div>
                      <div className={styles.topicContent}>
                        <h3 className={styles.topicTitle}>{topic.title}</h3>
                        <p className={styles.topicDescription}>{topic.description}</p>
                        <div className={styles.topicCategory}>{topic.category}</div>
                      </div>
                    </Link>
                  </FadeInScale>
                ))}
              </div>
            </section>

            {/* All Topics by Category */}
            <section className={styles.allTopicsSection}>
              <FadeIn>
                <h2 className={styles.sectionTitle}>All Topics</h2>
                <p className={styles.sectionSubtitle}>
                  Comprehensive collection organized by category
                </p>
              </FadeIn>

              <div className={styles.categoriesContainer}>
                {Object.entries(topicsByCategory).map(([category, topics], categoryIndex) => (
                  <FadeIn key={category} delay={categoryIndex * 0.05}>
                    <div id={category.toLowerCase().replace(/\s+/g, '-')} className={styles.categorySection}>
                      <h3 className={styles.categoryTitle}>{category}</h3>
                      <div className={styles.categoryGrid}>
                        {topics.map((topic, index) => (
                          <FadeInScale key={topic.title} delay={(categoryIndex * topics.length + index) * 0.02}>
                            <Link href={topic.link} className={styles.topicCardSmall}>
                              <div className={styles.topicIconSmall}>{topic.icon}</div>
                              <div className={styles.topicContentSmall}>
                                <h4 className={styles.topicTitleSmall}>{topic.title}</h4>
                                <p className={styles.topicDescriptionSmall}>{topic.description}</p>
                              </div>
                            </Link>
                          </FadeInScale>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}