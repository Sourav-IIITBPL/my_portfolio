"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 order-2 md:order-1"
          >
            <div className="inline-block px-3 py-1 mb-8 text-xs font-mono tracking-widest text-muted border border-border rounded-full bg-surface">
              SOURAV YADAV / SOFTWARE ENGINEER
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
              I build software systems that are meant to survive the real world.
            </h1>
            
            <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed">
              A software engineer focused on full-stack systems, backend infrastructure, AI-native tooling, and security.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="#projects" 
                className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:bg-muted transition-colors flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="/resume/09-26-SDE-Resume.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-surface border border-border text-foreground font-medium rounded-sm hover:bg-surface-hover transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> View Resume
              </a>
            </div>
            
            <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-6 text-sm text-muted font-mono">
              <a href="https://github.com/Sourav-IIITBPL" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GITHUB</a>
              <a href="https://linkedin.com/in/0xsourav" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LINKEDIN</a>
              <a href="https://leetcode.com/u/SouravIIIT" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LEETCODE</a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-48 h-48 md:w-full md:max-w-sm aspect-square rounded-full overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-500">
              <Image 
                src="/images/my-photo.png" 
                alt="Sourav Yadav" 
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
