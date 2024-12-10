import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Guarantee from "@/components/Guarantee";
import Independent from "@/components/Independent";
import Pricing from "@/components/Pricing";

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
      <Services />
      <Pricing />
      <Guarantee />
      <Independent />
    </>
  );
}
