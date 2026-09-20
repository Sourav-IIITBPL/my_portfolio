"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function SecurityResearch() {
  return (
    <section className="py-24 bg-surface/30 border-y border-border" id="research">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-2">Technical Differentiator</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent" /> Security Research
            </h3>
            <p className="text-muted mb-8">
              Applying adversarial thinking and rigorous engineering practices to distributed systems and smart contracts.
            </p>
          </div>
          
          <div className="md:w-2/3 grid gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 border border-border rounded-lg bg-background"
            >
              <h4 className="text-xl font-bold text-foreground mb-4">Codebase Comprehension & Testing</h4>
              <p className="text-muted mb-4">
                Reviewed 20+ complex distributed software systems, developing reproducible proof-of-concepts and testing environments.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Invariant Reasoning</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Architecture Analysis</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Edge-Case Identification</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
