import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-12 bg-surface/20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-mono text-sm font-bold tracking-wider text-foreground">Sourav Yadav</span>
          <span className="text-xs text-muted">Software Development Engineer · Full-Stack · Backend · AI-Native</span>
          <a href={`mailto:${siteConfig.email}`} className="text-xs font-mono text-accent hover:underline mt-1">
            {siteConfig.email}
          </a>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-muted">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href={siteConfig.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LeetCode</a>
          <a href={siteConfig.links.codechef} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">CodeChef</a>
          {siteConfig.links.twitter && (
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">X / Twitter</a>
          )}
          <a href={siteConfig.resumeUrl} target="_blank" className="text-foreground hover:text-accent transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  );
}
