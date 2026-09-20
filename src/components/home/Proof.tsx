"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "DSA PROBLEMS", value: "500+" },
  { label: "LEETCODE RATING", value: "1868" },
  { label: "SECURITY REVIEWS", value: "20+" },
  { label: "EXPECTED GRAD", value: "2027" },
];

export function Proof() {
  return (
    <section className="py-12 border-y border-border bg-surface/50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-transparent md:divide-border/50">
          {metrics.map((metric, index) => (
            <motion.div 
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start md:pl-8 first:pl-0"
            >
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-mono">{metric.value}</span>
              <span className="text-xs font-mono text-muted tracking-wider">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
