export function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-12">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-mono text-sm font-bold tracking-wider">SOURAV.DEV</span>
          <span className="text-xs text-muted">Software Engineer · Full-Stack · Backend · AI-Native</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="https://github.com/Sourav-IIITBPL" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/sourav-yadav" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/sourav_yadav/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
