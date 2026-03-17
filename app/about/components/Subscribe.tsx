"use client";
import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Subscribe() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-primary/10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-[300px] h-[300px] bg-white/30 blur-3xl rounded-full -bottom-32 -right-32" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-primary">Be a part</span>
              <br />
              We are just getting started
            </h2>

            <p className="text-gray-500 mt-4 max-w-md">
              Sign up for our newsletter and stay ahead with insights, releases,
              and industry trends shaping sustainability.
            </p>
          </div>

          {/* Input */}
          <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-5 py-3 w-full bg-white/80 backdrop-blur-md border border-white/40 shadow-sm focus:ring-2 focus:ring-primary outline-none transition"
            />

            <Button className="rounded-full w-full md:w-fit px-6 py-3 text-white shadow-md hover:shadow-lg transition">
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-gray-400">
            We care about your data. Read our privacy policy.
          </p>
        </motion.div>

        {/* RIGHT IMAGE COLLAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-125 w-full"
        >
          {/* Floating images */}
          {[
            { src: "/assets/a.jpg", className: "top-0 left-10 w-32 h-40" },
            { src: "/assets/b.jpg", className: "top-10 right-0 w-36 h-60" },
            { src: "/assets/c.jpg", className: "bottom-0 right-10 w-40 h-44" },
            { src: "/assets/d.jpg", className: "bottom-10 left-0 w-36 h-36" },
            { src: "/assets/e.jpg", className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-52 z-10" },
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className={`absolute rounded-2xl overflow-hidden shadow-xl ${img.className}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}