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
      "Designed modular on-chain guards and off-chain simulation workflows for transaction validation and risk assessment.",
      "Integrated React/TypeScript frontend with smart contracts and transaction-analysis services."
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
    github: "https://github.com/Sourav-IIITBPL",
    image: "/images/preflight-project-logo.png"
  },
  {
    slug: "settleone",
    title: "SettleOne",
    category: "Payment Commitment Platform",
    description: "A full-stack payment commitment platform supporting buyer-seller escrow workflows and transaction lifecycle management.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Solidity", "Foundry", "Viem"],
    highlights: [
      "Built a full-stack payment commitment platform supporting buyer-seller escrow workflows and transaction lifecycle management.",
      "Developed backend APIs for deal creation, transaction verification, dispute handling, and settlement.",
      "Integrated wallet-based authentication, smart contracts, and frontend workflows using modular services."
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
    description: "A modular Rust CLI for automated protocol invariant checking and structured security reports.",
    technologies: ["Rust", "CLI", "Protocol Analysis", "Testing"],
    highlights: [
      "Developed a modular Rust CLI for automated protocol invariant checking and structured security reports.",
      "Used trait-based abstractions to support reusable protocol implementations and extensible analysis pipelines.",
      "Implemented validation workflows and unit tests for protocol-level properties."
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
