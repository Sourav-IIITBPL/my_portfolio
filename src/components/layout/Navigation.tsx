"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Projects", href: "#projects" },
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
        <Link href="/" className="font-mono text-sm tracking-widest font-semibold text-foreground flex items-center gap-2">
          SOURAV.DEV
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm text-muted">
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
          <div className="flex items-center gap-4 text-sm">
            <Link href="/resume/09-26-SDE-Resume.pdf" target="_blank" className="text-foreground hover:text-accent transition-colors font-medium">
              Resume
            </Link>
            <Link href="#contact" className="px-4 py-2 bg-foreground text-background font-medium rounded-sm hover:bg-muted transition-colors">
              Contact
            </Link>
            <button 
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
              className="hidden lg:flex items-center justify-center p-2 rounded-sm border border-border text-muted hover:text-foreground transition-colors"
              aria-label="Command Palette"
            >
              <Command className="w-4 h-4" />
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-b border-border shadow-xl md:hidden flex flex-col"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={isHome ? item.href : `/${item.href}`}
                  className="text-lg font-medium text-muted hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link
                href="/resume/09-26-SDE-Resume.pdf"
                target="_blank"
                className="text-lg font-medium text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
