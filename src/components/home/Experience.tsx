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
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-3">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-muted hidden md:inline">—</span>
                <div className="flex items-center gap-2">
                  {typeof exp.link === "string" ? (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-foreground hover:text-accent font-medium underline underline-offset-4 decoration-border hover:decoration-accent transition-colors inline-flex items-center gap-1"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-muted font-medium">{exp.company}</span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <div className="text-xs font-mono text-muted px-2.5 py-1 bg-surface border border-border rounded inline-flex items-center">
                  {exp.period}
                </div>
                {exp.type && (
                  <div className="text-xs font-mono text-accent px-2.5 py-1 bg-accent/5 border border-accent/20 rounded inline-flex items-center">
                    {exp.type}
                  </div>
                )}
                {exp.location && (
                  <div className="text-xs font-mono text-muted px-2.5 py-1 bg-surface/50 border border-border/50 rounded inline-flex items-center">
                    {exp.location}
                  </div>
                )}
              </div>

              {/* Platform verification links if any */}
              {typeof exp.link === "object" && (
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-xs font-mono text-muted">Profiles:</span>
                  {Object.entries(exp.link).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono px-2 py-0.5 rounded border border-border bg-surface text-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      {platform} ↗
                    </a>
                  ))}
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono px-2 py-0.5 rounded border border-border bg-surface text-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      Audit Reports Repo ↗
                    </a>
                  )}
                </div>
              )}
              
              <ul className="space-y-3 text-muted mb-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono border border-border rounded text-muted bg-surface/50">
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
