"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { Award, ExternalLink } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-24" id="achievements">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Achievements & Recognitions</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const content = (
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background border border-border rounded-md text-accent shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    {achievement.link && (
                      <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0" />
                    )}
                  </div>
                  <div className="text-xs font-mono text-muted mb-3">{achievement.issuer}</div>
                  <p className="text-muted text-sm leading-relaxed mb-2">
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <span className="text-xs font-mono text-accent inline-flex items-center gap-1">
                      {achievement.link.startsWith("/certificates") ? "View Certificate ↗" : "Verified Profile ↗"}
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <motion.div 
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 border border-border rounded-lg bg-surface/50 hover:bg-surface transition-colors group"
              >
                {achievement.link ? (
                  <a href={achievement.link} target="_blank" rel="noreferrer" className="block w-full h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
