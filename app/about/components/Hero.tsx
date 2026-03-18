"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary/10 py-28 md:py-36">
      
      {/* Background decorative blobs */}
      <div className="absolute w-100 h-100 bg-primary/20 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-75 h-75 bg-white/30 blur-3xl rounded-full -bottom-32 -right-32" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl  font-bold leading-tight text-gray-900"
        >
          <span className="text-primary relative">
            Who We Are
            <span className="absolute left-0 -bottom-2 w-full h-2 bg-primary/20 -z-10 rounded" />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-gray-600 max-w-2xl text-base leading-relaxed"
        >
          Certis Global is a sustainability and impact advisory firm that
          helps organizations translate global sustainability goals into
          practical strategies and measurable results.
        </motion.p>
      </div>
    </section>
  );
}