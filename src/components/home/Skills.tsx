"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export function Skills() {
  return (
    <section className="py-24 bg-surface/30" id="skills">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Engineering Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-border rounded-lg bg-background"
            >
              <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-6 border-b border-border pb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
