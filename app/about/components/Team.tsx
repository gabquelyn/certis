"use client";
import React from "react";
import Member from "./Member";
import { motion } from "motion/react";

export default function Team() {
  const members = [
    {
      image: "/assets/1.jpg",
      name: "Olivia Rhye",
      role: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      image: "/assets/2.jpg",
      name: "Phoenix Baker",
      role: "Engineering Manager",
      description:
        "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      image: "/assets/4.jpg",
      name: "Lana Steiner",
      role: "Product Lead",
      description:
        "Driving product innovation across sustainability platforms.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-primary/10 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute w-100 h-100 bg-primary/10 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-75 h-75 bg-primary/10 blur-3xl rounded-full -bottom-32 -right-32" />

      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Team
            </h2>
            <p className="text-primary font-medium mt-2">
              The Leadership Team
            </p>
          </div>

          <p className="text-gray-500 max-w-md">
            Meet the experts driving innovation, sustainability, and impact
            across global markets.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <Member key={m.image} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}