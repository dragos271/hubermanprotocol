const topicCategories = [
  {
    id: "sleep-recovery",
    title: "Sleep & Recovery",
    items: [
      {
        slug: "sleep-hygiene",
        title: "Sleep Hygiene",
        icon: "🛏️",
        description: "Master the fundamentals of restorative sleep",
        href: "/sleep-hygiene",
      },
      {
        slug: "nsdr-meditation",
        title: "NSDR, Meditation and Breathwork",
        icon: "🧘",
        description: "Non-sleep deep rest techniques",
        href: "/nsdr-meditation",
      },
    ],
  },
  {
    id: "light-circadian",
    title: "Light & Circadian",
    items: [
      {
        slug: "light-circadian",
        title: "Light Exposure and Circadian Rhythm",
        icon: "☀️",
        description: "Optimize your biological clock",
        href: "/light-circadian",
      },
    ],
  },
  {
    id: "mental-performance",
    title: "Mental Performance",
    items: [
      {
        slug: "focus-concentration",
        title: "Focus and Concentration",
        icon: "🎯",
        description: "Enhance cognitive performance and attention",
        href: "/focus-concentration",
      },
      {
        slug: "memory-learning",
        title: "Memory and Learning",
        icon: "🧠",
        description: "Improve retention and skill acquisition",
        href: "/memory-learning",
      },
      {
        slug: "brain-neuroplasticity",
        title: "The Brain and Neuroplasticity",
        icon: "🧬",
        description: "Understand and harness brain adaptability",
        href: "/brain-neuroplasticity",
      },
      {
        slug: "mental-health",
        title: "Mental Health",
        icon: "💭",
        description: "Science-based approaches to wellbeing",
        href: "/mental-health",
      },
      {
        slug: "adhd-science",
        title: "The Science of ADHD",
        icon: "⚡",
        description: "Understanding and managing attention disorders",
        href: "/adhd-science",
      },
      {
        slug: "creativity",
        title: "Unlocking Creativity",
        icon: "💡",
        description: "Protocols for enhanced creative thinking",
        href: "/creativity",
      },
    ],
  },
  {
    id: "physical-health",
    title: "Physical Health",
    items: [
      {
        slug: "fitness-workouts",
        title: "Fitness and Workout Routines",
        icon: "🏋️",
        description: "Science-based exercise protocols",
        href: "/fitness-workouts",
      },
      {
        slug: "general-health",
        title: "General Health",
        icon: "⚕️",
        description: "Foundational health principles and practices",
        href: "/general-health",
      },
    ],
  },
  {
    id: "nutrition-substances",
    title: "Nutrition & Substances",
    items: [
      {
        slug: "diet-nutrition",
        title: "Diet and Nutrition",
        icon: "🥗",
        description: "Nutritional timing and food choices",
        href: "/diet-nutrition",
      },
      {
        slug: "caffeine-science",
        title: "Caffeine Science",
        icon: "☕",
        description: "Strategic caffeine use for energy and performance",
        href: "/caffeine-science",
      },
      {
        slug: "supplementation",
        title: "Supplementation",
        icon: "💊",
        description: "Evidence-based supplement protocols",
        href: "/supplementation",
      },
      {
        slug: "substances",
        title: "Alcohol, Tobacco and Cannabis",
        icon: "🚫",
        description: "Understanding recreational substance effects",
        href: "/substances",
      },
    ],
  },
  {
    id: "hormones-biology",
    title: "Hormones & Biology",
    items: [
      {
        slug: "hormone-health",
        title: "Hormone Health",
        icon: "⚖️",
        description: "Optimize hormonal balance naturally",
        href: "/hormone-health",
      },
      {
        slug: "male-health",
        title: "Male Sexual Health",
        icon: "♂️",
        description: "Male-specific health optimization",
        href: "/male-health",
      },
      {
        slug: "female-health",
        title: "Female Sexual Health",
        icon: "♀️",
        description: "Female-specific health optimization",
        href: "/female-health",
      },
      {
        slug: "longevity",
        title: "Aging and Longevity Science",
        icon: "⏳",
        description: "Protocols for healthy aging",
        href: "/longevity",
      },
    ],
  },
  {
    id: "heat-cold",
    title: "Heat & Cold Exposure",
    items: [
      {
        slug: "cold-exposure",
        title: "Cold Plunges and Deliberate Cooling",
        icon: "🧊",
        description: "Cold exposure protocols",
        href: "/cold-exposure",
      },
      {
        slug: "heat-exposure",
        title: "Sauna and Heat Exposure",
        icon: "🔥",
        description: "Heat therapy for recovery and performance",
        href: "/heat-exposure",
      },
    ],
  },
  {
    id: "psychology-behavior",
    title: "Psychology & Behavior",
    items: [
      {
        slug: "goals-habits",
        title: "Achieving Goals and Building Habits",
        icon: "🎯",
        description: "Behavioral science for lasting change",
        href: "/goals-habits",
      },
      {
        slug: "motivation",
        title: "Motivation and Willpower",
        icon: "💪",
        description: "Sustain drive and overcome resistance",
        href: "/motivation",
      },
      {
        slug: "relationships",
        title: "Emotional Intelligence and Relationships",
        icon: "❤️",
        description: "Improve social connections and emotional regulation",
        href: "/relationships",
      },
      {
        slug: "happiness",
        title: "Happiness and Wellbeing",
        icon: "😊",
        description: "Science-based approaches to life satisfaction",
        href: "/happiness",
      },
    ],
  },
  {
    id: "environment-lifestyle",
    title: "Environment & Lifestyle",
    items: [
      {
        slug: "environment",
        title: "Optimizing Your Environment",
        icon: "🏠",
        description: "Create spaces for optimal performance",
        href: "/environment",
      },
      {
        slug: "technology",
        title: "Society and Technology",
        icon: "📱",
        description: "Navigate technology's impact on biology",
        href: "/technology",
      },
      {
        slug: "daily-routine",
        title: "Building Your Daily Routine",
        icon: "📅",
        description: "Structure your day for effectiveness",
        href: "/daily-routine",
      },
    ],
  },
  {
    id: "nervous-system",
    title: "Nervous System",
    items: [
      {
        slug: "nervous-system",
        title: "How to Regulate Your Nervous System",
        icon: "⚡",
        description: "Master autonomic nervous system control",
        href: "/nervous-system",
      },
    ],
  },
];

const popularTopicSlugs = [
  "sleep-hygiene",
  "light-circadian",
  "focus-concentration",
  "fitness-workouts",
  "nsdr-meditation",
  "diet-nutrition",
  "caffeine-science",
  "cold-exposure",
];

const allTopics = topicCategories.flatMap((category) => category.items);

const topicsBySlug = allTopics.reduce((acc, topic) => {
  acc[topic.slug] = topic;
  return acc;
}, {});

export { topicCategories, popularTopicSlugs, allTopics, topicsBySlug };

export function getTopicsByCategory() {
  return topicCategories.map((category) => ({
    ...category,
    items: category.items.map((topic) => ({
      ...topic,
      sectionId: category.id,
    })),
  }));
}

export function getPopularTopics() {
  return popularTopicSlugs
    .map((slug) => topicsBySlug[slug])
    .filter(Boolean);
}

export function getTopicSectionId(categoryId) {
  return categoryId;
}
