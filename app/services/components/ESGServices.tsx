"use client";
import React from "react";
import { motion } from "motion/react";
import { FaLeaf, FaChartLine, FaGlobe, FaBalanceScale } from "react-icons/fa";
import { MdOutlineWaterfallChart } from "react-icons/md";

const services = [
  {
    title: "Sustainability Strategy & Integration",
    description:
      "We help organizations embed sustainability into corporate strategy, governance structures, and operational decision-making.",
    icon: <FaLeaf />,
    image: "/assets/cl.jpg",
    list: [
      "ESG strategy development",
      "Sustainability roadmaps",
      "Climate transition planning",
      "Sustainable finance framework",
    ],
  },
  {
    title: "Climate Risk & Resilience",
    description:
      "We support institutions in identifying, assessing, and managing climate-related risks and opportunities.",
    icon: <FaGlobe />,
    image: "/assets/broke.jpg",
    list: [
      "Climate risk assessments",
      "Scenario analysis",
      "Transition risk evaluation",
      "Climate resilience planning",
    ],
  },
  {
    title: "Impact Measurement & Evaluation",
    description:
      "We help development programs and investments measure outcomes and demonstrate real impact.",
    icon: <FaChartLine />,
    image: "/assets/assitance.jpg",
    list: [
      "Impact measurement frameworks",
      "Monitoring and evaluation systems",
      "OECD-DAC aligned project evaluations",
      "Cost-effectiveness analysis",
      "Development impact reporting",
    ],
  },
  {
    title: "Climate & Development Finance",
    description:
      "We support organizations in mobilizing and structuring finance for sustainable and climate-aligned projects.",
    icon: <MdOutlineWaterfallChart />,
    image: "/assets/finance.jpg",
    list: [
      "Climate finance readiness",
      "Project preparation support",
      "Blended finance advisory",
      "Development finance engagement",
    ],
  },
  {
    title: "Policy & Institutional Advisory",
    description:
      "We advise governments and institutions on policies and strategies that enable sustainable economic transformation.",
    icon: <FaBalanceScale />,
    image: "/assets/policy.jpg",
    list: [
      "Green policy frameworks",
      "Institutional strategy development",
      "Sustainable finance regulations",
      "Program design for climate and development initiatives",
    ],
  },
];

export default function ESGSections() {
  return (
    <div className="mx-2 md:mx-[10%]">
      {services.map((service, i) => {
        const isReverse = i % 2 !== 0;

        return (
          <section
            key={service.title}
            className="min-h-screen flex items-center py-20 px-6 md:px-16 lg:px-24"
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-100 relative md:h-125 lg:h-150 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                {/* Icon */}
                <div className="text-primary text-3xl">{service.icon}</div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-secondary text-lg leading-relaxed max-w-xl">
                  {service.description}
                </p>

                {/* List */}
                <ul className="flex flex-col gap-3 mt-4">
                  {service.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-secondary text-base"
                    >
                      <span className="w-2 h-2 mt-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
