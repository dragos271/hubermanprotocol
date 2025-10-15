# 🧠 Huberman Protocol

> Science-based protocols for sleep, stress, mental & physical health.

A comprehensive web application that translates neuroscience research into actionable daily protocols. Built on the scientific framework popularized by Dr. Andrew Huberman, this project provides evidence-based systems for optimizing human performance and well-being.

## 🌟 Overview

The Huberman Protocol is an interactive platform that helps you understand and implement neuroscience-backed behaviors to improve sleep, manage stress, enhance focus, optimize physical performance, and support overall health. The protocols are organized around the core biological systems that determine hormone release, attention, and recovery.

## ✨ Key Features

### 📚 Protocol Library

- **🌙 Sleep Protocol** - Anchor circadian rhythm, optimize sleep quality, and reduce sleep latency
- **💨 Stress Management** - Regulate your autonomic nervous system with breathing techniques and cold exposure
- **🧠 Mental Health & Focus** - Lock-in protocols for deep focus and sustained attention
- **🏋️ Physical Training** - Science-based fitness protocols for strength, endurance, and recovery
- **🥗 Nutrition** - Evidence-based nutritional strategies and supplementation guidance
- **🧘 NSDR (Non-Sleep Deep Rest)** - Recovery protocols for dopamine restoration and stress reduction
- **🔬 Biohacking** - Advanced protocols for optimal human performance and longevity
- **🍂 Seasonal Protocols** - Adapt your routines to seasonal changes and combat seasonal depression
- **📅 Daily Protocol** - Structured daily routines combining all core principles

### 🎨 Interactive Features

- **Interactive Visualizations** - Circadian wheel, body system diagrams, and neurotransmitter balance displays
- **Smooth Animations** - Powered by Framer Motion for an engaging user experience
- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **Dark Theme** - Easy on the eyes for any time of day

## 🛠️ Technology Stack

- **Framework**: [Next.js 15.5](https://nextjs.org/) with React 19
- **Styling**: CSS Modules with custom properties
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: Turbopack (Next.js built-in)
- **Runtime**: Node.js

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dragos271/hubermanprotocol.git
cd hubermanprotocol
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
hubermanprotocol/
├── src/
│   └── app/
│       ├── components/        # Reusable UI components
│       │   ├── Header.js
│       │   ├── Footer.js
│       │   ├── Motion.js
│       │   ├── CircadianWheel.js
│       │   └── ...
│       ├── biohacking/        # Advanced biohacking protocols
│       ├── daily/             # Daily protocol page
│       ├── mental/            # Mental health & focus protocols
│       ├── nsdr/              # NSDR & recovery protocols
│       ├── nutrition/         # Nutrition & supplementation
│       ├── physical/          # Physical training protocols
│       ├── seasonal/          # Seasonal adaptation protocols
│       ├── sleep/             # Sleep optimization protocols
│       ├── stress/            # Stress management protocols
│       ├── styles/            # Global styles and CSS modules
│       ├── globals.css        # Global CSS variables and base styles
│       ├── layout.js          # Root layout
│       └── page.js            # Home page
├── public/                    # Static assets
├── package.json
└── README.md
```

## 🎯 Core Principles

The protocols in this application are built on five core pillars:

1. **Sleep** 🌙 - Foundation for recovery, learning, and metabolism
2. **Stress** 💨 - Autonomic nervous system regulation
3. **Focus** 🎯 - Attention control and cognitive performance
4. **Movement** 🏃 - Physical health and longevity
5. **Nutrition** 🥗 - Fuel for optimal brain and body function

Each protocol is designed to work with your natural biological rhythms and requires no special equipment or supplements to get started.

## 🔬 Scientific Foundation

All protocols are based on peer-reviewed neuroscience research and the work of scientists in the fields of:

- Circadian biology
- Neuroplasticity
- Stress physiology
- Performance optimization
- Metabolic health

The information presented is educational and should not replace professional medical advice.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Attribution

This project is inspired by the work of Dr. Andrew Huberman and the Huberman Lab Podcast. The protocols are compiled from publicly available scientific research and educational content.

## 📚 Resources

- [Huberman Lab Podcast](https://www.hubermanlab.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🌐 Deploy

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ for optimal human performance
