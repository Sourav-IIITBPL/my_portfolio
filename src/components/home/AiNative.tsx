"use client";

import { motion } from "framer-motion";
import { Terminal, Bot, Brain } from "lucide-react";

const aiDomains = [
  {
    title: "Python & Automation",
    icon: Terminal,
    description:
      "Python programming, automation, and code analysis. Developing structured scripts and tooling to parse complex codebases, automate multi-step verification tasks, and process outputs efficiently.",
    tags: ["Python", "Automation", "Code Analysis", "Tooling"],
  },
  {
    title: "LLM Engineering",
    icon: Bot,
    description:
      "LLM API integration, agentic workflows, prompt engineering, and AI-integrated applications. Direct experience building automated smart-contract auditing suites that coordinate static analysis tools with LLM API reasoning to generate structured audit reports.",
    tags: ["LLM API Integration", "Agentic Workflows", "Prompt Engineering", "AI-Integrated Apps"],
  },
  {
    title: "ML & Deep Learning Foundations",
    icon: Brain,
    description:
      "Machine learning and deep learning fundamentals that I have learned and am continuing to develop. Focused on core mathematical concepts, loss optimization, neural network architectures, and algorithmic theory.",
    tags: ["ML Fundamentals", "Deep Learning Concepts", "Neural Networks", "Continuous Study"],
  },
];

export function AiNative() {
  return (
    <section className="py-24" id="ai-ml">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-xs font-mono text-accent tracking-widest uppercase mb-2">Specialization</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">AI Engineering & Applied ML</h3>
          <p className="text-base text-muted leading-relaxed">
            Developing practical automation tooling, LLM-powered analytical workflows, and building upon core machine learning fundamentals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {aiDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-lg border border-border bg-surface/40 hover:bg-surface/70 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-md bg-background border border-border text-accent group-hover:border-accent/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                      Area 0{index + 1}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {domain.title}
                  </h4>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-background border border-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
