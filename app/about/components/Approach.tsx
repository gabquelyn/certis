"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { MdOutlinePeopleOutline } from "react-icons/md";

export default function Approach() {
  const content = [
    {
      title: "Impact Driven",
      description:
        "Focused on outcomes that matter most for your business and the world.",
      icon: <FaArrowTrendUp />,
    },
    {
      title: "Evidence Based",
      description:
        "Our recommendations are backed by data and rigorous analysis.",
      icon: <FiBookOpen />,
    },
    {
      title: "Practical",
      description:
        "Actionable advice that takes into account operational realities.",
      icon: <TbBulb />,
    },
    {
      title: "Collaborative",
      description:
        "We work as an extension of your team, ensuring knowledge transfer.",
      icon: <MdOutlinePeopleOutline />,
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute w-100 h-100 bg-primary/10 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-75 h-75 bg-tertiary/10 blur-3xl rounded-full -bottom-32 -right-32" />

      <div className="max-w-7xl mx-auto relative flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Why Our Approach Works
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mx-auto mt-3" />
          <p className="text-gray-500 max-w-2xl mt-6">
            We help organizations, industries, and governments operationalize
            and comply with emerging sustainability standards through practical,
            data-driven strategies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {content.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className={clsx(
                  "h-14 w-14 flex items-center justify-center rounded-xl text-xl mb-4 transition",
                  i % 2 === 0
                    ? "bg-tertiary/20 text-tertiary group-hover:bg-tertiary group-hover:text-white"
                    : "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white"
                )}
              >
                {c.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold  text-gray-900">
                {c.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}