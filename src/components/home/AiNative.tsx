"use client";

import { motion } from "framer-motion";

export function AiNative() {
  return (
    <section className="py-24" id="ai-native">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase mb-2">Emerging Specialization</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">AI-Native Engineering</h3>
          <p className="text-lg text-muted">
            Combining traditional software engineering with LLM-powered developer tooling, AI agents, and automated code analysis to enhance developer productivity and reasoning.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border rounded-lg bg-surface/50 p-8 md:p-12 font-mono text-sm overflow-x-auto"
        >
          <pre className="text-muted leading-loose">
            <span className="text-accent">CODEBASE</span>
            {"\n"}   ↓
            {"\n"}PARSER
            {"\n"}   ↓
            {"\n"}STATIC ANALYSIS
            {"\n"}   ↓
            {"\n"}CODE UNDERSTANDING
            {"\n"}   ↓
            {"\n"}<span className="text-foreground font-bold">LLM / AGENTS</span>
            {"\n"}   ↓
            {"\n"}SECURITY REASONING
            {"\n"}   ↓
            {"\n"}<span className="text-foreground">STRUCTURED REPORT</span>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
