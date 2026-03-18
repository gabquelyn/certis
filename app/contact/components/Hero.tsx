"use client";
import Link from "next/link";
import Button from "@/app/components/Button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-[400px] h-[400px] bg-white/40 blur-3xl rounded-full -bottom-32 -right-32" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900"
        >
          Our locations
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-gray-600 max-w-2xl text-base leading-relaxed"
        >
          Come visit our friendly team at one of our offices.
        </motion.p>
      </div>
    </section>
  );
}
