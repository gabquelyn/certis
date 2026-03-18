"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const links = [
    { tag: "Home", href: "/" },
    { tag: "About", href: "/about" },
    { tag: "Services", href: "/services" },
    { tag: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Glass Navbar */}
        <div className="flex items-center py-3 justify-between backdrop-blur-md bg-white/70 border border-white/30 shadow-lg rounded-2xl mt-4 px-5">
          {/* Logo */}
          <div className="relative md:h-10 h-6 w-19 md:w-28">
            <Image
              src="/assets/logo2.png"
              fill
              alt="logo"
              className="object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative text-gray-700 font-medium transition",
                  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                  pathname === link.href
                    ? "after:w-full text-black"
                    : "after:w-0 hover:after:w-full hover:text-black",
                )}
              >
                {link.tag}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact#contact">
              <Button className="bg-primary text-white px-5 py-2 rounded-full shadow hover:scale-105 transition">
                Book a consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-3 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-5"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "text-gray-700 font-medium",
                    pathname === link.href && "text-primary",
                  )}
                >
                  {link.tag}
                </Link>
              ))}
              <Link href="/contact#contact">
                <Button className="bg-primary text-white w-full py-2 rounded-full">
                  Book a consultation
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
