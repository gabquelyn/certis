import React from "react";
import Hero from "./components/Hero";
import CTA from "../components/CTA";
import ESGServices from "./components/ESGServices";
export const metadata = {
  title: "Services - Certis",
  description: "Explore the range of services offered by Certis to help your business thrive.",
  keywords: ["Certis", "services", "solutions", "business growth", "technology"],
};
export default function page() {
  return (
    <div>
     <Hero/>
     <ESGServices/>
     <CTA/>
    </div>
  );
}
