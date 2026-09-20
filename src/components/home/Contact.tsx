"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section className="py-32" id="contact">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let&apos;s build something.</h2>
          <p className="text-lg text-muted mb-12">
            Currently open to software engineering opportunities. Whether it&apos;s full-stack development, backend architecture, or AI-native tooling, I&apos;m ready to contribute to systems that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:sourav.dev.officials@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-medium rounded-sm hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" /> Send Message
            </a>
            <a 
              href="https://linkedin.com/in/0xsourav"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-surface border border-border text-foreground font-medium rounded-sm hover:bg-surface-hover transition-colors flex items-center justify-center gap-2"
            >
              Connect on LinkedIn <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
