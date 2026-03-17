"use client";
import Avatar from "@/app/components/Avatar";
import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { motion } from "motion/react";

export default function Member({
  image,
  name,
  role,
  description,
}: {
  image: string;
  name: string;
  role: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center"
    >
      {/* Avatar */}
      <div className="relative">
        <Avatar image={image} className="w-20 h-20 rounded-full" />

        {/* LinkedIn Icon (hover reveal) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition">
          <GrLinkedin className="text-white text-lg" />
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-primary text-sm font-medium">{role}</p>
        <p className="text-gray-500 text-sm leading-relaxed mt-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}