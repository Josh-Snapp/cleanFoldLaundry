import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Guarantee from "@/components/Guarantee";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Fold Laundy",
  description: "LAUNDRY MADE EASY!",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Features />
      <Pricing />
      <Guarantee />
    </>
  );
}
