import React from "react";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Team from "./components/Team";
import Approach from "./components/Approach";
import Subscribe from "./components/Subscribe";
export const metadata = {
  title: "About Us - Certis",
  description: "Learn more about Certis, our mission, vision, and values.",
  keywords: ["Certis", "about us", "mission", "vision", "team"],
};
export default function page() {
  return (
    <div>
      <Hero />
      <Mission />
      <Team />
      <Approach />
      <Subscribe />
    </div>
  );
}
