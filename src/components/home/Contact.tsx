"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32" id="contact">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest text-accent border border-accent/20 rounded-full bg-accent/5">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let&apos;s build something resilient.</h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Currently open to Software Development Engineer (SDE), Full-Stack, and Backend roles. Ready to contribute to high-performance architectures, AI-integrated workflows, and mission-critical codebases.
          </p>

          {/* Email badge with copy */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 bg-surface border border-border rounded-md text-sm font-mono text-foreground">
            <span>{siteConfig.email}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1 hover:text-accent transition-colors ml-2"
              title="Copy email to clipboard"
              aria-label="Copy email"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted" />}
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-medium rounded-sm hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" /> Send Email
            </a>
            <a 
              href={siteConfig.links.linkedin}
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
