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
              <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-4 border-b border-border pb-3 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-[10px] text-muted/60">{category.skills.length} skills</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2.5 py-1 text-xs font-mono border border-border rounded bg-surface/40 text-foreground hover:border-accent/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
