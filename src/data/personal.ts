export const personalInfo = {
  name: "Jason Bokinz",
  title: "Full Stack Software Engineer",
  location: "New York",
  linkedin: "https://linkedin.com/in/jason-bokinz",
  github: "https://github.com/JasonBokinz",
  email: "jbokinz.dev@gmail.com",
  calendly: "https://calendly.com/jbokinz-dev/30min",
};

export const hobbies = [
  { label: "Basketball", image: "/images/hobbies/basketball.png" },
  { label: "Lifting", image: "/images/hobbies/lifting.png" },
  { label: "Golfing", image: "/images/hobbies/golf.jpg" },
  { label: "Beach", image: "/images/hobbies/beach.jpg" },
];

export const languages = [
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "Ruby", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
  { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
];

export const education = {
  school: "Stony Brook University",
  degree: "Bachelor of Science in Computer Science",
  specialization: "Artificial Intelligence",
  graduationDate: "May 2025",
  gpa: "3.70",
  honors: "Magna Cum Laude",
  deansListCount: 8,
  highlights: [
    { label: "GPA", value: "3.70" },
    { label: "Honors", value: "Magna Cum Laude" },
    { label: "Dean's List", value: "8 Semesters" },
  ],
};

export interface Course {
  code: string;
  name: string;
}

export const courses: Course[] = [
  { code: "CSE 101", name: "Computer Science Principles" },
  { code: "CSE 114", name: "Intro to Object-Oriented Programming" },
  { code: "CSE 214", name: "Data Structures" },
  { code: "CSE 215", name: "Foundations of Computer Science" },
  { code: "CSE 216", name: "Programming Abstractions" },
  { code: "CSE 220", name: "Systems Fundamentals I" },
  { code: "CSE 300", name: "Technical Communications" },
  { code: "CSE 303", name: "Intro to Theory of Computation" },
  { code: "CSE 310", name: "Computer Networks" },
  { code: "CSE 312", name: "Legal Issues in Info Systems" },
  { code: "CSE 316", name: "Software Development" },
  { code: "CSE 320", name: "Systems Fundamentals II" },
  { code: "CSE 337", name: "Scripting Languages" },
  { code: "CSE 351", name: "Introduction to Data Science" },
  { code: "CSE 352", name: "Artificial Intelligence" },
  { code: "CSE 354", name: "Natural Language Processing" },
  { code: "CSE 355", name: "Computational Geometry" },
  { code: "CSE 373", name: "Analysis of Algorithms" },
  { code: "CSE 416", name: "Software Engineering" },
  { code: "AMS 210", name: "Applied Linear Algebra" },
  { code: "AMS 301", name: "Finite Mathematical Structures" },
  { code: "AMS 310", name: "Probability and Statistics" },
  { code: "MAT 203", name: "Calculus III with Applications" },
];

export const favoriteCourses = [
  {
    code: "CSE 316",
    name: "Software Development",
    description:
      "Full-stack web development course building progressively more complex applications.",
    projects: [
      "Reddit clone: iterative build from React/CSS fundamentals to auth, voting, comments, and MongoDB integration",
    ],
    tech: ["React", "CSS", "JavaScript", "MongoDB", "Node.js"],
  },
  {
    code: "CSE 320",
    name: "Systems Fundamentals II",
    description:
      "Deep systems programming in C covering memory management, concurrency, and low-level data structures.",
    projects: [
      "Huffman file compressor/decompressor",
      "Custom malloc, calloc, and free implementation",
      "Threaded mailbox system with mutexes",
    ],
    tech: ["C", "Valgrind", "pthreads", "Mutexes"],
  },
  {
    code: "CSE 354",
    name: "Natural Language Processing",
    description:
      "How LLMs work under the hood, from tokenization and embeddings to attention mechanisms.",
    projects: [
      "Built a custom LLM designed to help students learn abstract studying concepts",
    ],
    tech: ["Python", "PyTorch", "Transformers", "scikit-learn"],
  },
];

export const experiences = [
  {
    company: "West Palm Test Prep",
    productUrl: "https://whiz.study",
    productLabel: "whiz.study",
    logo: "/images/whiz/wptp-logo.png",
    location: "West Palm Beach, FL",
    summary:
      "AI-powered EdTech learning platform serving 80,000+ users, built in a TurboRepo monorepo with Next.js, Expo (React Native), Express, and PostgreSQL via Prisma ORM.",
    roles: [
      {
        title: "Software Engineer",
        period: "January 2024 - Present",
        highlights: [
          "Launched whiz.study, an AI-powered EdTech learning platform serving **80,000+ users**, built in a TurboRepo monorepo with **Next.js**, **Expo (React Native)**, **Express**, and **PostgreSQL** via Prisma ORM",
          "Integrated a **Stripe** payment infrastructure including **subscription billing**, **one-time payments**, and a **free trial system** driving **1,600+ active subscriptions** and recurring revenue",
          "Led a team of engineers in building an **AI tutor** using **OpenAI SDK** and **OpenRouter**, delivering step-by-step walkthroughs, real-time explanations, and tailored feedback that interacts with the student's workspace to guide them through problems",
          "Refactored a tightly coupled monolith into a **modular, plugin-based structure** where each exam type is self-contained with its own implementation and architecture, reducing new exam type creation time by **~75%**",
          "Expanded the iOS mobile app to support **40+ AP exams**, building new **React Native** views and **Express** backend endpoints to mirror existing web app functionality",
          "Constructed a **concept-level knowledge graph (DAG)** to map topic dependencies, powering mastery tracking and personalized study recommendations across the platform",
        ],
      },
    ],
    tech: [
      "TypeScript", "SQL",
      "React", "Next.js", "React Native", "Express", "Node.js", "Tailwind",
      "PostgreSQL", "Prisma", "Redis",
      "Stripe", "OpenAI SDK", "OpenRouter", "RabbitMQ", "Bun",
    ],
    showcases: [],
  },
  {
    company: "Stony Brook University",
    logo: "/images/sbu-seawolves.png",
    logoBg: "white" as const,
    location: "Stony Brook, NY",
    summary:
      "Research and engineering roles spanning financial simulations, automated data pipelines, and LLM hallucination reduction.",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "September 2023 - December 2023",
        highlights: [
          "Built an automated web scraping pipeline using **Puppeteer** to extract current IRS tax bracket data across **4 tax categories**, parsing bracket rules across multiple filing statuses and persisting year-stamped records to **PostgreSQL**",
          "Engineered a **Monte Carlo** simulation engine with parallel **Bun** workers to model long-term retirement outcomes, processing **48,000+** financial calculations per run including progressive tax computation, investment growth, and withdrawal optimization",
          "Implemented financial algorithms including **Roth conversion** tax optimization, **Required Minimum Distribution** calculations, and custom asset liquidation strategies across **3 account types**, enabling users to simulate personalized withdrawal plans",
        ],
      },
      {
        title: "Machine Learning Researcher",
        period: "May 2023 - August 2023",
        highlights: [
          "Developed an end-to-end **RAG pipeline** using **OpenAI ada-002** embeddings and **Pinecone** vector search, reducing **GPT-3.5-Turbo** hallucination",
          "Benchmarked **zero-shot**, **few-shot**, and **chain-of-thought** prompting across **1,000+** **GPT-3.5-Turbo** and **GPT-4** responses, scoring factual consistency via **cosine similarity** against **ada-002** reference embeddings",
        ],
      },
    ],
    tech: [
      "TypeScript", "Python", "SQL",
      "Puppeteer", "Bun", "Node.js",
      "PostgreSQL",
      "OpenAI SDK", "Pinecone", "LangChain",
      "NumPy", "Pandas",
    ],
    showcases: [],
  },
];

export const projects = [
  {
    name: "HoopMetrics",
    description:
      "A Python desktop application that scrapes live data from nba.com using Selenium. Select any NBA team to view their full roster, coaching staff, and latest team updates. Explore franchise history including retired numbers, Hall of Fame inductees, all-time records, and championships. Compare any two players head-to-head with color-coded stat breakdowns.",
    tech: ["Python", "Selenium", "Tkinter", "Pillow"],
    github: "https://github.com/JasonBokinz/HoopMetrics",
  },
];
