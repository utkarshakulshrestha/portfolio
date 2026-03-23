export const personalInfo = {
  name: "Utkarsha Kulshrestha",
  initials: "UK",
  title: "MBA Candidate @ CMU Tepper",
  tagline: "4 years of shipping AI products at EY",
  email: "ukulshre@tepper.cmu.edu",
  phone: "412.579.1892",
  linkedin: "https://www.linkedin.com/in/utkarshak/",
  github: "https://github.com/utkarshakulshrestha",
  twitter: "https://x.com/utkarshakulshr1",
  summary: "Seeking PM internships at AI-first startups. 4+ years of product experience at EY — owned roadmaps, ran user research, and led a 15-member squad building an automation platform for 1,200+ users. Now pursuing my MBA at CMU Tepper, focused on AI and product strategy.",
  seeking: "PM internships (Summer 2026)",
}

export const topImpacts = [
  { metric: "CMU Tepper", label: "MBA 2027" },
  { metric: "1,200+", label: "Platform Users" },
  { metric: "4+ yrs", label: "Product Experience" },
]

export const skills = [
  "Product Requirements & Success Metrics",
  "User Research & A/B Testing",
  "Sprint Management & Roadmapping",
  "AI/ML (LLMs, RAG, Fine-Tuning)",
  "Market & Competitor Research",
  "Figma, Notion, Amplitude, JIRA",
  "Python, SQL, REST APIs",
  "Cross-functional Team Leadership",
]

export const experience = [
  {
    id: 1,
    title: "Product Lead – AI Automation Platform",
    company: "EY GDS",
    location: "Gurugram, India",
    duration: "May 2023 – Jul 2025",
    highlights: [
      {
        text: "Defined product requirements and success metrics for an AI-powered automation platform serving 1,200+ users across 5 business units",
        metrics: ["22% cycle time reduction", "$1.8M annual savings"],
      },
      {
        text: "Ran A/B tests and built Tableau dashboards to analyze user feedback, driving adoption and retention improvements",
        metrics: ["22% adoption boost"],
      },
      {
        text: "Owned quarterly roadmap and managed sprints for a 15-member cross-functional squad (design, engineering, business)",
        metrics: ["35% more releases", "78% → 94% on-time delivery"],
      },
      {
        text: "Conducted user research for Fortune 500 client, translating needs into product requirements that drove measurable savings",
        metrics: ["$4.5M client savings", "78% adoption increase"],
      },
    ],
    impactHighlights: ["$4.5M Client Savings", "1,200+ Users", "15-Member Squad"],
  },
  {
    id: 2,
    title: "Associate Product Manager – Platform Foundations",
    company: "EY GDS",
    location: "Gurugram, India",
    duration: "Jan 2021 – Apr 2023",
    highlights: [
      {
        text: "Built a reusable automation platform from scratch with 3,000+ SAP components, reducing manual effort by 72%",
        metrics: ["North American Software Awards recognition"],
      },
      {
        text: "Introduced structured feedback loops and weekly sprint reviews to improve alignment across teams",
        metrics: ["35% less misalignment"],
      },
      {
        text: "Transitioned from engineering to product — started building test frameworks, then owned documentation, roadmap, and stakeholder communication",
        metrics: [],
      },
    ],
    impactHighlights: ["72% Effort Reduction", "Award-Winning Platform", "Eng → PM Transition"],
  },
  {
    id: 3,
    title: "Business Development Associate – Product & Growth",
    company: "K21 Academy",
    location: "Jaipur, India",
    duration: "Jul 2020 – Dec 2020",
    highlights: [
      {
        text: "Conducted user research and developed CRM-driven insights to shape product and content strategy at an ed-tech startup",
        metrics: ["$330K revenue in 6 months"],
      },
      {
        text: "Managed end-to-end content and product workflows — first exposure to fast-paced, resource-constrained environment",
        metrics: [],
      },
    ],
    impactHighlights: ["$330K Revenue", "Ed-Tech Startup"],
  },
]

export const education = [
  {
    id: 1,
    degree: "Master of Business Administration (MBA)",
    school: "Carnegie Mellon University - Tepper School of Business",
    location: "Pittsburgh, PA",
    duration: "2025 - 2027",
    details: [
      "Concentrations: Strategy, Business Technologies, Entrepreneurship, AI in Business",
      "Fellowships: Forté Fellow & Roger J. and Elizabeth Darcie Corbin Fellowship",
      "Clubs: Business & Technology Club, Design & Business Club, Tepper Women in Business",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science",
    school: "JECRC University",
    location: "Jaipur, India",
    duration: "2016 - 2020",
    gpa: "3.7/4.0",
    details: [
      "Microsoft Student Partner: Trained 2,000+ students in cloud technologies",
      "National Hackathon Winner",
      "Microsoft Imagine Cup 2018 Co-Lead (India)",
    ],
  },
]

export const achievements = [
  {
    id: 1,
    title: "EY GDS Consulting Superstar 2024",
    description: "Selected among 50,000 employees for exceptional product delivery, innovation, and client impact.",
    type: "award",
    icon: "trophy",
  },
  {
    id: 2,
    title: "North American Software Awards",
    description: "Recognized for building award-winning automation platform that drove 72% efficiency gains.",
    type: "award",
    icon: "medal",
  },
  {
    id: 3,
    title: "18 Project Excellence Awards",
    description: "Recognized for product leadership, cross-functional execution, and measurable business impact at EY.",
    type: "award",
    icon: "star",
  },
  {
    id: 4,
    title: "$4.5M+ Client Impact",
    description: "Delivered measurable savings through AI automation strategy for Fortune 500 clients.",
    type: "metric",
    icon: "chart",
  },
  {
    id: 5,
    title: "9,000+ Workflows Shipped",
    description: "Led cross-functional teams to deliver enterprise-scale automation solutions.",
    type: "metric",
    icon: "rocket",
  },
]

export const projects = [
  {
    id: 1,
    title: "PNC Prism",
    subtitle: "CMU Tepper · Academic Project for PNC",
    description: "Designed an AI-powered productivity solution for PNC's product managers. Led user research with 15+ PMs, defined requirements, and built a business case projecting 400% ROI.",
    metrics: ["400% Projected ROI", "15+ PM Interviews", "Full Business Case"],
    tags: ["AI/ML", "Product Strategy", "User Research"],
    link: "/projects/pnc-prism",
  },
  {
    id: 2,
    title: "Gemini Chronos",
    subtitle: "Google Hackathon · Winner",
    description: "Built an AI-powered financial planning assistant using Google's Gemini API. Designed the product concept, user flows, and multi-agent RAG architecture over a 48-hour hackathon.",
    metrics: ["Hackathon Winner", "RAG Pipeline", "Multi-Agent"],
    tags: ["Google Gemini", "RAG", "Hackathon"],
    link: "/projects/gemini-chronos",
  },
  {
    id: 3,
    title: "EY Automation Platform",
    subtitle: "EY GDS · Shipped Product",
    description: "Owned the product roadmap for a reusable SAP automation platform from 0→1. Grew it to 3,000+ components used across Fortune 500 engagements. Won North American Software Awards.",
    metrics: ["72% Effort Reduction", "3,000+ Components", "Award Winner"],
    tags: ["Enterprise", "Automation", "SAP"],
    link: "/projects/ey-automation",
  },
]

export const certifications = [
  "Microsoft Azure Fundamentals",
  "AWS Cloud Practitioner",
  "Google Cloud Digital Leader",
  "Generative AI at SAP",
  "Agile PM",
  "ISTQB",
]
