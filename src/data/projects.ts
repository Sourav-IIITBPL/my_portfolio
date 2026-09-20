import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "preflight",
    title: "PreFlight",
    category: "Pre-Transaction Risk Analysis Platform",
    description: "A pre-transaction risk analysis platform designed to simulate and guard on-chain transactions before they are executed. Provides a vital security layer using simulation and rule-based risk engines.",
    technologies: ["Solidity", "Foundry", "Chainlink CRE", "React", "TypeScript", "Viem", "Browser Extension"],
    highlights: [
      "Built a browser extension for preemptive transaction capture.",
      "Integrated transaction simulation to detect malicious outcomes.",
      "Developed on-chain guards using Chainlink CRE."
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
    github: "https://github.com/Sourav-IIITBPL", // Will update if specific repo is known
    image: "/images/preflight-project-logo.png"
  },
  {
    slug: "settleone",
    title: "SettleOne",
    category: "Payment Commitment Platform",
    description: "A full-stack transaction platform for payment commitments, escrow, and dispute resolution. Bridges frontend user experience with reliable backend settlement and smart contract execution.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Solidity", "Foundry", "Viem"],
    highlights: [
      "Architected a complete full-stack transaction lifecycle.",
      "Implemented secure escrow mechanisms backed by smart contracts.",
      "Designed PostgreSQL schema for commitment states and disputes."
    ],
    architecture: [
      "BUYER",
      "COMMITMENT",
      "ESCROW",
      "DELIVERY",
      "ACCEPTANCE / DISPUTE",
      "SETTLEMENT"
    ],
    github: "https://github.com/Sourav-IIITBPL",
    image: "/images/settleone-project-logo.png"
  },
  {
    slug: "protocol-invariant-checker",
    title: "Protocol Invariant Checker",
    category: "Developer Security Tooling",
    description: "A Rust-based CLI tool for analyzing protocol invariants. It provides trait-based abstractions and structured reporting to systematically validate core assumptions in distributed systems.",
    technologies: ["Rust", "CLI", "Protocol Analysis", "Testing"],
    highlights: [
      "Designed trait-based abstractions for extensibility.",
      "Developed an invariant engine to automatically validate constraints.",
      "Generated structured reports for developer security insights."
    ],
    architecture: [
      "CLI",
      "PROTOCOL ADAPTER",
      "INVARIANT ENGINE",
      "VALIDATION",
      "STRUCTURED REPORT"
    ],
    github: "https://github.com/Sourav-IIITBPL"
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
    github: "https://github.com/Sourav-IIITBPL"
  }
];
