"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function Certificates() {
  return (
    <section className="py-24 bg-surface/30 border-t border-border" id="certificates">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Certifications</h2>
        
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {certificates.map((cert, index) => {
            const isPdf = cert.image.endsWith('.pdf');
            return (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex-none w-[85vw] md:w-[450px] overflow-hidden rounded-xl border border-border bg-background snap-center"
              >
                <div className="aspect-[4/3] w-full relative border-b border-border bg-surface">
                  {isPdf ? (
                    <iframe 
                      src={`${cert.image}#view=FitH&toolbar=0&navpanes=0`}
                      className="w-full h-full pointer-events-none md:pointer-events-auto"
                      title={cert.title}
                    />
                  ) : (
                    <Image 
                      src={cert.image} 
                      alt={cert.title}
                      fill
                      className="object-contain p-4"
                    />
                  )}
                  {/* Overlay for mobile scrolling if iframe steals touch */}
                  {isPdf && <div className="absolute inset-0 z-10 md:hidden" />}
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground mb-1 line-clamp-1">{cert.title}</h3>
                    <span className="text-xs font-mono text-muted">{cert.issuer}</span>
                  </div>
                  <a 
                    href={cert.image} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 bg-surface border border-border rounded-full hover:text-accent transition-colors z-20 shrink-0 ml-4"
                    aria-label={`View ${cert.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
