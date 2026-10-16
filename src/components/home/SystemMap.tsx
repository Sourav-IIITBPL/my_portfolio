"use client";

import { motion } from "framer-motion";
import { Layers, Server, Bot, ShieldCheck, ArrowRight } from "lucide-react";

const architectureLayers = [
  {
    step: "01",
    title: "Client & Interface",
    icon: Layers,
    focus: "Deterministic UI & State",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Zustand"],
    description: "Responsive interfaces, constraint-based layout engines, and real-time state synchronization."
  },
  {
    step: "02",
    title: "Backend & Data",
    icon: Server,
    focus: "APIs & State Machines",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
    description: "Modular REST APIs, transaction lifecycle flows, relational modeling, and caching."
  },
  {
    step: "03",
    title: "AI-Native Tooling",
    icon: Bot,
    focus: "LLMs & Agentic Pipelines",
    technologies: ["Python", "LLM APIs", "Static Analysis", "Agents"],
    description: "Automated code understanding, static-analysis orchestration, and LLM-assisted report generation."
  },
  {
    step: "04",
    title: "Security & Verification",
    icon: ShieldCheck,
    focus: "Invariants & Auditing",
    technologies: ["Rust CLI", "Solidity", "Foundry", "PoC Testing"],
    description: "Invariant checking pipelines, protocol edge-case verification, and smart contract vulnerability analysis."
  }
];

export function SystemMap() {
  return (
    <section className="py-20 border-y border-border bg-surface/20" id="system-map">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-mono text-accent tracking-widest uppercase mb-2">Systems Architecture</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Engineering Flow</h3>
          </div>
          <p className="text-sm font-mono text-muted max-w-md">
            How I architect systems: from user interfaces and backend services to AI automation and rigorous invariant verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {architectureLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-lg border border-border bg-background flex flex-col justify-between group hover:border-accent/40 transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-accent font-bold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                      TIER {layer.step}
                    </span>
                    <Icon className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                  </div>

                  <h4 className="text-base font-bold text-foreground mb-1">
                    {layer.title}
                  </h4>
                  <div className="text-xs font-mono text-muted mb-3">
                    {layer.focus}
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {layer.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {layer.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border/80 text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop connector arrow */}
                {index < architectureLayers.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border items-center justify-center text-muted">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
