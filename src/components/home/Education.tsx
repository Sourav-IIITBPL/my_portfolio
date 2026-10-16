"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const relevantCoursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)",
  "Operating Systems",
  "Computer Networks",
  "System Architecture"
];

export function Education() {
  return (
    <section className="py-24" id="education">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-2">Academic Background</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Education</h3>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-lg border border-border bg-surface/40 hover:bg-surface/70 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-background border border-border rounded-md text-accent shrink-0 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-base text-muted font-medium">
                      {edu.degree} in {edu.field}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 md:self-start">
                  <span className="text-xs font-mono px-3 py-1 bg-surface border border-border rounded text-muted">
                    {edu.startDate} – {edu.endDate}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 bg-accent/10 border border-accent/20 rounded text-accent flex items-center gap-1.5 font-semibold">
                    <Award className="w-3.5 h-3.5" /> {edu.grade}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-border/60">
                <div className="flex items-center gap-2 text-xs font-mono text-muted mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span className="uppercase tracking-wider">Relevant Engineering Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {relevantCoursework.map((course) => (
                    <span 
                      key={course}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-background border border-border text-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
