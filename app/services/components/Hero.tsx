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
          Driving{" "}
          <span className="text-primary relative">
            Credible Impact
            <span className="absolute left-0 -bottom-1 w-full h-2 bg-primary/20 -z-10 rounded" />
          </span>
          <br />
          Through Strategic Excellence
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-gray-600 max-w-2xl leading-relaxed"
        >
          We bridge the gap between regulatory compliance and meaningful
          sustainability. Our multi-disciplinary approach ensures your ESG
          journey is data-driven, scalable, and impactful.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contact#contact">
            <Button className="rounded-full px-6 py-3 text-white shadow-lg hover:shadow-xl transition">
              Request a consultation
            </Button>
          </Link>

          <Link href="/services">
            <Button className="rounded-full px-6 py-3 bg-white text-primary border border-primary/20 shadow hover:shadow-md transition">
              Explore our services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}