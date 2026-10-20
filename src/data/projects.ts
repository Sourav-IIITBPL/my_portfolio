import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "preflight",
    title: "PreFlight",
    category: "Pre-Transaction Risk Analysis Platform",
    description: "A transaction-security platform that simulates and analyzes DeFi transactions before execution to identify security and execution risks.",
    technologies: ["Solidity", "Foundry", "Chainlink CRE", "React", "TypeScript", "Viem"],
    highlights: [
      "Built a transaction-security platform that simulates and analyzes DeFi transactions before execution to identify security and execution risks.",
      "Designed modular on-chain guards and off-chain simulation workflows for transaction validation and risk assessment."
    ],
    architecture: [
      "USER TRANSACTION",
      "FRONTEND / EXTENSION",
      "TRANSACTION ANALYSIS",
      "SIMULATION",
      "ON-CHAIN GUARDS",
      "RISK ENGINE",
      "SECURITY DECISION"
    ],
    github: "https://github.com/Sourav-IIITBPL/preflight",
    demo: "https://preflight-v1.vercel.app",
    image: "/images/preflight.png"
  },
  {
    slug: "settleone",
    title: "SettleOne",
    category: "Payment Commitment Platform",
    description: "A full-stack payment commitment platform supporting buyer-seller escrow workflows and transaction lifecycle management.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Solidity", "Foundry", "Viem"],
    highlights: [
      "Built a full-stack payment commitment platform supporting buyer-seller escrow workflows and transaction lifecycle management.",
      "Developed backend APIs for deal creation, transaction verification, dispute handling, and settlement."
    ],
    architecture: [
      "BUYER",
      "COMMITMENT",
      "ESCROW",
      "DELIVERY",
      "ACCEPTANCE / DISPUTE",
      "SETTLEMENT"
    ],
    github: "https://github.com/SettleOne/about.git",
    demo: "https://settleone-marketing.settleone.workers.dev",
    image: "/images/settleone.png"
  },
  {
    slug: "flux",
    title: "FLUX",
    category: "Intelligent Creative Layout Engine",
    description:
      "A deterministic, constraint-based layout engine that adapts multi-element creative layouts across device sizes.",
    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "Framer Motion",
      "Constraint Satisfaction",
      "Collision Resolution"
    ],
    highlights: [
      "Implemented priority-based sizing and axis-aligned bounding-box collision resolution.",
      "Separated pure-function layout computation from React rendering.",
      "Used Zustand for state management and Framer Motion for animated positioning."
    ],
    architecture: [
      "LAYOUT COMPUTATION",
      "REACT RENDERING",
      "STATE MANAGEMENT",
      "ANIMATED POSITIONING"
    ],
    github: "https://github.com/Sourav-IIITBPL/FLUX-Intelligent-Creative-Layout-Engine.git",
    demo: "https://flux-intelligent-creative-layout-en.vercel.app/",
    image: "/images/flux.png"
  },
  {
    slug: "ai-trip-planner",
    title: "AI Trip Planner",
    category: "AI-Powered Travel Application",
    description: "A full-stack itinerary generator converting natural-language trip descriptions into structured, day-by-day travel schedules using Google Gemini.",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "Google Gemini API", "Zod", "Tailwind CSS"],
    highlights: [
      "Integrated Google Gemini API to convert natural-language travel descriptions into structured day-by-day itineraries.",
      "Built an Express backend to keep API keys server-side and validate generated output with Zod schemas.",
      "Engineered robust client-server error handling for malformed JSON, retries, and schema violations."
    ],
    architecture: [
      "USER INPUT (NATURAL LANGUAGE)",
      "REACT FRONTEND (VITE)",
      "EXPRESS API BACKEND",
      "GEMINI LLM REASONING",
      "ZOD SCHEMA VALIDATION",
      "STRUCTURED ITINERARY UI"
    ],
    demo: "https://ai-trip-planner-v1.vercel.app/",
    image: "/images/ai-trip-planner.png"
  },
  {
    slug: "protocol-invariant-checker",
    title: "Protocol Invariant Checker",
    category: "Developer Security Tooling",
    description: "A modular Rust CLI for automated protocol invariant checking and structured security reports.",
    technologies: ["Rust", "CLI", "Protocol Analysis", "Testing"],
    highlights: [
      "Developed a modular Rust CLI for automated protocol invariant checking and structured security reports.",
      "Used trait-based abstractions to support reusable protocol implementations and extensible analysis pipelines."
    ],
    architecture: [
      "CLI",
      "PROTOCOL ADAPTER",
      "INVARIANT ENGINE",
      "VALIDATION",
      "STRUCTURED REPORT"
    ],
    github: "https://github.com/Sourav-IIITBPL/protocol-invariant-checker",
    image: "/images/protocol-invariant-checker.png"
  },
  {
    slug: "dexgateway",
    title: "DexGateway",
    category: "Routing / Transaction Infrastructure",
    description: "Multi-network routing infrastructure to discover liquidity, calculate pricing, and optimize execution costs across various decentralized exchanges.",
    technologies: ["Solidity", "Foundry", "React", "Node.js", "Express", "TypeScript", "The Graph"],
    highlights: [
      "Integrated multiple exchanges for aggregated liquidity discovery.",
      "Built backend services for optimal pricing and execution cost calculation.",
      "Designed transaction pipelines combining Express.js and smart contracts."
    ],
    architecture: [
      "DEX INTEGRATION",
      "LIQUIDITY DISCOVERY",
      "PRICING ENGINE",
      "EXECUTION OPTIMIZATION",
      "TRANSACTION PIPELINE"
    ],
    github: "https://github.com/Sourav-IIITBPL/dexgateway"
  }
];
