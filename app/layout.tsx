import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://www.certis.com"),
  title: "Certis - Innovative Solutions for Your Business",
  description:
    "Certis provides cutting-edge solutions and services to help your business grow efficiently.",
  keywords: [
    "Certis",
    "business solutions",
    "services",
    "technology",
    "innovation",
  ],
  authors: [{ name: "Certis Team", url: "https://www.certis.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Certis - Innovative Solutions for Your Business",
    description:
      "Certis provides cutting-edge solutions and services to help your business grow efficiently.",
    url: "https://www.certis.com",
    siteName: "Certis",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certis - Innovative Solutions for Your Business",
    description:
      "Certis provides cutting-edge solutions and services to help your business grow efficiently.",
    images: ["/og/default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-black text-[.9rem] md:text-lg antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
