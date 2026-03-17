"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "motion/react";

export default function Button({
  children,
  onClick,
  className,
  disabled
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
      disabled = {disabled}
      className={clsx(
        "bg-primary cursor-pointer px-6 py-2 rounded-full shadow-sm",
        className
      )}
    >
      {children}
    </motion.button>
  );
}