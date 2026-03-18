"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image with slow zoom */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/mike-mill.jpg')] bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />

      <div className="relative z-10 flex flex-col gap-4 md:gap-6 items-center justify-center text-center px-6 md:px-12 lg:px-24">
        {/* Subheading / Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-5  font-medium border-b-4 border-primary/50 pb-1 rounded-lg"
        >
          ESG & Sustainability Advisory
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight "
        >
          Advancing Sustainability.
          <br />
          <span className="text-primary">Strengthening Impact.</span>
          <br /> Enabling Resilient Growth.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 /90 max-w-4xl text-base md:text-lg leading-relaxed"
        >
          Certis Global Advisory Limited is a sustainability and ESG advisory
          firm supporting governments, corporates, development finance
          institutions, investors, and development partners to design, finance,
          and deliver high-impact, sustainable solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <Link href="/contact/#contact">
            <Button className=" shadow-lg text-white rounded-full px-6 py-3 hover:shadow-xl transition">
              Request a consultation
            </Button>
          </Link>
          <Link href="/services">
            <Button className="text-primary shadow-lg bg-white rounded-full px-6 py-3 hover:shadow-xl transition">
              Explore our services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
