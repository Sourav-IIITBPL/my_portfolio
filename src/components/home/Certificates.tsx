"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { ExternalLink } from "lucide-react";

export function Certificates() {
  return (
    <section className="py-24 bg-surface/30" id="certificates">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Certifications</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative block overflow-hidden rounded-lg border border-border bg-surface aspect-[4/3]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
                <span className="text-xs font-mono text-muted mb-4">{cert.issuer}</span>
                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-surface border border-border rounded-full hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                <span className="text-xs font-mono text-muted/50 truncate w-full text-center px-2">{cert.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
