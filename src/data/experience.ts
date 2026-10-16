import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "blockchain-intern",
    role: "Blockchain Engineering Intern",
    company: "SKXYWTF",
    link: "https://www.linkedin.com/company/skxywtf/",
    period: "Aug 2026 – Sep 2026",
    type: "Part-time",
    location: "Remote, Phoenix, AZ, USA",
    description: [
    "Built an LLM-integrated smart-contract auditing pipeline that orchestrated static-analysis tools, used LLM API calls to interpret findings, and generated structured audit reports."
  ],
    technologies: [
    "Python",
    "LLM APIs",
    "Agentic Workflows",
    "Static Analysis",
    "Smart Contract Security"
  ]
},
  {
    id: "sec-researcher",
    role: "Independent Software Security Researcher",
    company: "Sherlock · Code4rena · Cantina",
    link: {
      Sherlock: "https://audits.sherlock.xyz/watson/sourav_DEV",
      Code4rena: "https://code4rena.com/%40Sourav_DEV",
      Cantina: "https://cantina.xyz/u/0xSourav",
    },
    github: "https://github.com/Sourav-IIITBPL/audits",
    period: "July 2025 – June 2026",
    type: "Self-Employed",
    location: "Remote",
    description: [
      "Audited 20+ smart-contract codebases, analyzing business logic, state transitions, edge cases, and security invariants.",
      "Developed reproducible proof-of-concepts and testing environments to validate identified issues.",
      "Strengthened skills in codebase comprehension, debugging, testing, and software architecture analysis."
    ],
    technologies: ["Solidity", "Foundry", "Security Research", "Protocol Analysis"]
  }
];
