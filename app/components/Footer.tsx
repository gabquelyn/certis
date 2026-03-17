"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white pt-20 pb-10 px-6 md:px-12 lg:px-20">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="bg-white p-1 px-6 w-fit rounded-lg">
            <div className="relative h-15 w-30">
              <Image
                src="/assets/fullogo.png"
                fill
                alt="logo"
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-4 text-white/70 leading-relaxed text-sm">
            Certis Global Advisory helps organizations, industries, and
            governments operationalize sustainability and comply with evolving
            ESG frameworks.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-semibold mb-4">Quick Links</p>
          <div className="flex flex-col gap-3 text-white/70 text-sm">
            <Link href="/about" className="hover:text-white transition">
              About the Firm
            </Link>
            <Link href="/services" className="hover:text-white transition">
              Service Portfolio
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-white font-semibold mb-4">Sustainability</p>
          <div className="flex flex-col gap-3 text-white/70 text-sm">
            <p className="hover:text-white transition">ESG Compliance</p>
            <p className="hover:text-white transition">SDG Alignment</p>
            <p className="hover:text-white transition">Social Impact</p>
            <p className="hover:text-white transition">
              Environmental Governance
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-4">Contact</p>

          <div className="flex flex-col gap-4 text-white/70 text-sm">
            <div className="flex items-start gap-3">
              <GrLocation className="mt-1 text-white" />
              <span>Lagos | Global</span>
            </div>

            <div className="flex items-start gap-3">
              <LuMail className="mt-1 text-white" />
              <span>info@certisglobal.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <Link href = "/">
                <FaLinkedin />
              </Link>
              <Link href = "/">
                <FaInstagram />
              </Link>
              <Link href = "/">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
        <p>
          © {new Date().getFullYear()} Certis Global Advisory Limited. All
          rights reserved.
        </p>

        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
