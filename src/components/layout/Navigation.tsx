"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";

import { siteConfig } from "@/data/config";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "About", href: "#about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glass border-border py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-wider font-semibold text-foreground flex items-center gap-2 group">
          <span className="hidden sm:inline group-hover:text-accent transition-colors">Sourav Yadav</span>
          <span className="sm:hidden font-bold group-hover:text-accent transition-colors">SY</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-5 text-sm text-muted font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={isHome ? item.href : `/${item.href}`}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link 
              href={siteConfig.resumeUrl} 
              target="_blank" 
              className="px-3 py-1.5 text-xs font-mono border border-border rounded text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Resume
            </Link>
            <Link 
              href="#contact" 
              className="px-3.5 py-1.5 text-xs font-medium bg-foreground text-background rounded-sm hover:bg-muted transition-colors"
            >
              Contact
            </Link>
            <button 
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
              className="hidden lg:flex items-center justify-center p-1.5 rounded-sm border border-border text-muted hover:text-foreground transition-colors"
              aria-label="Command Palette"
              title="Press Cmd+K or Ctrl+K"
            >
              <Command className="w-3.5 h-3.5" />
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-2xl md:hidden flex flex-col overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={isHome ? item.href : `/${item.href}`}
                  className="text-base font-medium text-muted hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <div className="flex items-center gap-3">
                <Link
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  className="flex-1 py-2 text-center text-sm font-medium border border-border rounded text-foreground hover:bg-surface transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </Link>
                <Link
                  href="#contact"
                  className="flex-1 py-2 text-center text-sm font-medium bg-foreground text-background rounded hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-muted">
                <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GITHUB</a>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LINKEDIN</a>
                <a href={siteConfig.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-foreground">LEETCODE</a>
                <a href={siteConfig.links.codechef} target="_blank" rel="noreferrer" className="hover:text-foreground">CODECHEF</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
