import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        
        <div className="mb-12">
          <div className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">{project.category}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{project.title}</h1>
          <p className="text-xl text-muted leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-surface border border-border text-foreground font-medium rounded-sm hover:bg-surface-hover transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> View Source
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:bg-muted transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {project.image && (
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface mb-16">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover" 
            />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Overview & Highlights</h2>
              <ul className="space-y-4 text-muted">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {project.architecture && project.architecture.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Architecture Flow</h2>
                <div className="border border-border rounded-lg bg-surface/50 p-6 md:p-8 font-mono text-sm overflow-x-auto">
                  <pre className="text-muted leading-loose">
                    {project.architecture.map((node, i) => (
                      <div key={i}>
                        <span className="text-foreground">{node}</span>
                        {i < project.architecture!.length - 1 && (
                          <div className="text-accent ml-4">↓</div>
                        )}
                      </div>
                    ))}
                  </pre>
                </div>
              </section>
            )}
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-6 border-b border-border pb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-xs font-mono border border-border rounded-md text-foreground bg-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
