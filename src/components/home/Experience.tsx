"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section className="py-24" id="experience">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Experience</h2>
        
        <div className="relative border-l border-border ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 ml-8 last:mb-0"
            >
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] mt-1.5 ring-4 ring-background" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-muted hidden md:inline">—</span>
                <span className="text-muted font-medium">{exp.company}</span>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="text-xs font-mono text-muted px-2 py-1 bg-surface border border-border rounded inline-flex items-center">
                  {exp.period}
                </div>
                {exp.location && (
                  <div className="text-xs font-mono text-muted px-2 py-1 bg-surface/50 border border-border/50 rounded inline-flex items-center">
                    {exp.location}
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 text-muted mb-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-border shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono border border-border rounded text-muted bg-surface/50">
                    {tech}
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
