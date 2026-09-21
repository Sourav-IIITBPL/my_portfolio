"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Search } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <Command.Dialog 
        open={open} 
        onOpenChange={setOpen}
        className="w-full max-w-lg bg-surface border border-border rounded-lg shadow-2xl overflow-hidden flex flex-col"
        label="Global Command Menu"
      >
        <div className="flex items-center border-b border-border px-4">
          <Search className="w-5 h-5 text-muted mr-2" />
          <Command.Input 
            autoFocus
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent py-4 outline-none text-foreground placeholder:text-muted"
          />
        </div>
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted">No results found.</Command.Empty>
          
          <Command.Group heading="Navigation" className="text-xs font-mono text-muted px-2 py-1">
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => router.push("/"))}>
              Go Home
            </Command.Item>
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => router.push("/#projects"))}>
              View Projects
            </Command.Item>
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => router.push("/#experience"))}>
              View Experience
            </Command.Item>
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => router.push("/#research"))}>
              View Research
            </Command.Item>
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => router.push("/#skills"))}>
              View Skills
            </Command.Item>
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => router.push("/#certificates"))}>
              View Certificates
            </Command.Item>
          </Command.Group>
          
          <Command.Group heading="External" className="text-xs font-mono text-muted px-2 py-1 mt-2">
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => window.open("/resume/26-09-SDE.pdf", "_blank"))}>
              View Resume
            </Command.Item>
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => window.open("https://github.com/Sourav-IIITBPL", "_blank"))}>
              Open GitHub
            </Command.Item>
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => window.open("https://linkedin.com/in/0xsourav", "_blank"))}>
              Open LinkedIn
            </Command.Item>
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => window.open("https://leetcode.com/u/SouravIIIT", "_blank"))}>
              Open LeetCode
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Settings" className="text-xs font-mono text-muted px-2 py-1 mt-2">
            <Command.Item className="px-2 py-3 rounded-md cursor-pointer hover:bg-surface-hover text-foreground text-sm flex items-center aria-selected:bg-surface-hover aria-selected:text-accent transition-colors" onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))}>
              Toggle Theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </div>
  );
}
