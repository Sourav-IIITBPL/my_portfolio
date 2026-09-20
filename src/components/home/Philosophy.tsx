"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-32" id="about">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              I like understanding what happens underneath the abstraction.
            </h2>
            <div className="space-y-6 text-lg text-muted">
              <p>
                My engineering philosophy is rooted in building end-to-end systems with clean architecture, strict testing, and a focus on edge cases.
              </p>
              <p>
                Whether it&apos;s designing a relational schema, orchestrating backend services, or writing smart contracts that secure real value, I prioritize performance, security, and developer experience.
              </p>
              <p>
                I believe the best engineers don&apos;t just write code—they understand the whole system, from the database indices up to the client UI, and how to make it resilient against failure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
