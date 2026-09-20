"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { Award } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-24" id="achievements">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 border border-border rounded-lg bg-surface/50 hover:bg-surface transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background border border-border rounded-md text-accent shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{achievement.title}</h3>
                  <div className="text-sm font-mono text-muted mb-4">{achievement.issuer}</div>
                  <p className="text-muted leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
