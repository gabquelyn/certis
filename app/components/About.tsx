"use client";
import Image from "next/image";
import React from "react";
import Avatar from "./Avatar";
import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            From Compliance to <br />
            <span className="text-primary">Credible Impact</span>
          </h2>

          <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-4" />

          <p className="mt-5 text-gray-500  leading-relaxed">
            We are a global organization dedicated to implementing innovative
            solutions that address the world&apos;s most pressing challenges.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-100 md:h-125 lg:h-150 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/river.png"
              alt="sustainability"
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              What We Do
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              We help institutions integrate sustainability and climate risk
              into core decision-making—strengthening resilience, unlocking
              finance, and driving long-term impact.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In a world facing climate disruption, regulatory pressure, and
              shifting capital flows, organizations must move beyond commitments
              to practical implementation. Certis Global works with financial
              institutions, governments, development partners, and corporations
              to embed sustainability into strategy, investment decisions, and
              operations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our work helps clients manage climate risk, mobilize capital,
              improve impact outcomes, and build resilient institutions.
            </p>

            {/* Team */}
            <div className="flex items-center gap-4 mt-4">
              
              <div className="flex">
                <Avatar image="/assets/1.jpg" />
                <Avatar image="/assets/2.jpg" className="-ml-3 border-2 border-white" />
                <Avatar image="/assets/3.jpg" className="-ml-3 border-2 border-white" />
              </div>

              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  200+ Team Members
                </span>
                <br />
                Across the globe
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}