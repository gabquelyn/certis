"use client";
import React from "react";
import Button from "./Button";
import { motion } from "motion/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary/80" />

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full -bottom-32 -right-32" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          Ready to elevate your{" "}
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            sustainable journey?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-white/80 md:text-xl max-w-2xl leading-relaxed">
          Let’s work together to transform your compliance obligations into
          competitive advantages.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/contact#contact">
            <Button className="bg-white text-primary px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
              Request a consultation
            </Button>
          </Link>
          <Button className="border border-white/40 text-white px-6 py-3 rounded-full backdrop-blur-md hover:bg-white/10 transition">
            Explore our services
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
