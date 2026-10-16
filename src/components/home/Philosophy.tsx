"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-32" id="about">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
              About / Engineering Philosophy
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground">
              I approach software engineering from the inside out.
            </h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                From designing relational data models and backend APIs to building interactive interfaces and testing complex state transitions, I focus on understanding how each component behaves—and how the entire system responds when things go wrong.
              </p>
              <p>
                I value clean architecture, thoughtful engineering decisions, and rigorous testing to build software that is reliable, maintainable, and ready for real-world use.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
