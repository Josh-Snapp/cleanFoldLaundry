import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Guarantee from "@/components/Guarantee";
import Independent from "@/components/Independent";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";
import StickyButton from "@/components/FooterButton";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Clean Fold Laundy",
  description:
    "Clean Fold Laundry provides laundry services in zip codes 33701, 3702, 33703, 33704, 33705,33706, 33707, 33708, 33709, 33710, 33711, 33712, 33713, 33714, 33715, 33781, 32901, 32904, 32905, 32907, 32908, 32909, 32949, 32950 and surrounding areas. Fast, reliable, and professional laundry services.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollUp />
      <Services />
      <Pricing />
      <Guarantee />
      <Independent />
    </>
  );
}
