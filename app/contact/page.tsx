"use client";
import React from "react";
import dynamic from "next/dynamic";
// import ContactMap from "./components/ContactMap";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
// export const metadata = {
//   title: "Contact Us - Certis",
//   description:
//     "Get in touch with the Certis team for inquiries, support, or collaborations.",
//   keywords: ["Certis", "contact", "support", "inquiries", "team"],
// };
const ContactMap = dynamic(() => import("./components/ContactMap"), {
  ssr: false,
});
export default function page() {
  return (
    <section>
      <Hero />
      <ContactMap />
      <ContactForm />
    </section>
  );
}
