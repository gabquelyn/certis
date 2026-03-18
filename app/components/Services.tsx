"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";
import { FiCheckCircle } from "react-icons/fi";
import { TbPlugConnected } from "react-icons/tb";
import { GiMuscleUp } from "react-icons/gi";
import { TbRulerMeasure2 } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function Services() {
  const content = [
    {
      title: "Sustainability Strategy & Integration",
      details:
        "Embedding sustainability into corporate strategy, governance, and operational decision-making.",
      list: [
        "ESG strategy development",
        "Sustainability roadmaps",
        "Climate transition planning",
        "Sustainable finance framework",
      ],
      icon: <TbPlugConnected />,
    },
    {
      title: "Climate Risk & Resilience",
      details:
        "Identifying, assessing, and managing climate-related risks and opportunities.",
      list: [
        "Climate risk assessments",
        "Scenario analysis",
        "Transition risk evaluation",
        "Climate resilience planning",
      ],
      icon: <GiMuscleUp />,
    },
    {
      title: "Impact Measurement & Evaluation",
      details:
        "Measuring outcomes and demonstrating real, data-driven impact.",
      list: [
        "Impact measurement frameworks",
        "Monitoring systems",
        "OECD-DAC evaluations",
        "Cost-effectiveness analysis",
      ],
      icon: <TbRulerMeasure2 />,
    },
    {
      title: "Climate & Development Finance",
      details:
        "Mobilizing and structuring finance for sustainable and climate-aligned projects.",
      list: [
        "Climate finance readiness",
        "Project preparation",
        "Blended finance advisory",
        "Development finance engagement",
      ],
      icon: <FaMoneyBillTrendUp />,
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#70A43F0D] overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute w-125 h-125 bg-primary/10 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-100 h-100 bg-primary/10 blur-3xl rounded-full -bottom-32 -right-32" />

      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Core Service Areas
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-4" />
          <p className="mt-5 text-gray-500">
            Delivering strategic, financial, and impact-driven sustainability
            solutions across sectors.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-5"
            >
              
              {/* Icon */}
              <div
                className={clsx(
                  "text-2xl p-3 rounded-xl w-fit transition",
                  i % 2 === 0
                    ? "bg-primary/10 text-primary"
                    : "bg-[#40609315] text-[#406093]"
                )}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.details}
              </p>

              {/* List */}
              <ul className="flex flex-col gap-3 mt-2">
                {service.list.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <FiCheckCircle className="text-primary mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}