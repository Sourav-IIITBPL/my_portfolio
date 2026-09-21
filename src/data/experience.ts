import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "blockchain-intern",
    role: "Blockchain Engineering Intern",
    company: "skxyWtf",
    period: "Aug 2026 – Sep 2026",
    location: "Part-time, Remote, Phoenix, USA",
    description: [
      "Developed an automatic LLM API-based smart contract auditing suite running static analysis tools and producing audit reports, with LLM API calls used to perform AI-agent-assisted auditing."
    ],
    technologies: ["AI Agents", "LLMs", "Smart Contracts", "Static Analysis", "Python"]
  },
  {
    id: "sec-researcher",
    role: "Independent Software Security Researcher",
    company: "Sherlock · Code4rena · Cantina",
    period: "July 2025 – June 2026",
    location: "Remote",
    description: [
      "Audited 20+ smart-contract codebases, analyzing business logic, state transitions, edge cases, and security invariants.",
      "Developed reproducible proof-of-concepts and testing environments to validate identified issues.",
      "Strengthened skills in codebase comprehension, debugging, testing, and software architecture analysis."
    ],
    technologies: ["Solidity", "Foundry", "Security Research", "Protocol Analysis"]
  }
];
