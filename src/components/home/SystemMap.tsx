"use client";

import { motion } from "framer-motion";

export function SystemMap() {
  return (
    <section className="py-32 border-y border-border" id="system-map">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-2">Architecture</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">System Map</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center overflow-x-auto pb-6"
        >
          <pre className="font-mono text-sm md:text-base leading-loose text-muted">
            {`                         `}
            <span className="text-foreground font-bold">SOURAV.DEV</span>
            {`\n                              │\n             ┌────────────────┼────────────────┐\n             │                │                │\n        `}<span className="text-accent">SOFTWARE</span>{`          `}<span className="text-accent">SECURITY</span>{`           `}<span className="text-accent">AI</span>{`\n             │                │                │\n        ┌────┴────┐       ┌───┴────┐       ┌───┴────┐\n        │         │       │        │       │        │\n     FRONTEND   BACKEND  AUDITS  TOOLING  AGENTS  ANALYSIS\n        │         │       │        │       │        │\n      React     Node     Solidity  Rust   LLMs    Code`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
