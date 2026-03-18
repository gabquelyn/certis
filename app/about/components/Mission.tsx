"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Mission() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 ">
            We are a Nigeria-Based Firm with a{" "}
            <span className="text-primary">Global Outlook</span>
          </h2>

         
          <ul className="flex flex-col gap-5 text-gray-600 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-2 w-2 h-2 bg-primary rounded-full shrink-0" />
              Our mission is to help clients integrate sustainability and climate
              risk into decision-making—improving resilience, access to finance,
              regulatory readiness, and long-term profitability.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 w-2 h-2 bg-primary rounded-full shrink-0" />
              We accelerate Nigeria&apos;s low-carbon transition through world-class
              advisory, technical expertise, and climate finance solutions.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 w-2 h-2 bg-primary rounded-full shrink-0" />
              Our goal is to build a practical, indigenous sustainability firm
              that transforms ESG from compliance into business value.
            </li>
          </ul>
        </motion.div>

        {/* Image + Floating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Image */}
          <div className="relative h-100 md:h-125 lg:h-150 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/ecg.png"
              alt="mission"
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 right-4 md:right-10 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-xs"
          >
            <p className="font-semibold text-sm border-l-4 border-primary pl-3 mb-3 text-gray-900">
              <span className="text-gray-500">Expertise</span> <br />
              ESG Leaders
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Driving sustainable change across emerging markets with precision
              and purpose.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}