"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-surface/30" id="projects">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-2">Selected Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h3>
        </div>

        <div className="space-y-24">
          {projects.map((project) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
                  <div className="text-xs font-mono text-accent mb-4">{project.category}</div>
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{project.title}</h4>
                  <p className="text-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-mono border border-border rounded text-muted bg-surface">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-xs font-mono border border-transparent text-muted">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-muted hover:text-foreground transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="md:col-span-7 order-1 md:order-2">
                  <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-lg border border-border bg-surface aspect-[4/3] relative group-hover:border-muted transition-colors">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center font-mono text-muted/50 text-4xl font-bold bg-surface-hover">
                        {project.title.charAt(0)}
                      </div>
                    )}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
