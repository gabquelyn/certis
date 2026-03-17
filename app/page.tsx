import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import CTA from "./components/CTA";
export const metadata = {
  title: "Home - Certis",
  description:
    "Welcome to Certis, your partner in innovative business solutions.",
  keywords: ["Certis", "home", "business solutions", "technology"],
  openGraph: {
    title: "Home - Certis",
    description:
      "Welcome to Certis, your partner in innovative business solutions.",
    url: "https://www.certis.com",
    type: "website",
    images: [{ url: "/home-og.png", width: 1200, height: 630 }],
  },
};
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Services />
      <CTA />
    </div>
  );
}
