"use client";
import { useTheme } from "next-themes";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Services = () => {
  const { theme } = useTheme();
  const features = featuresData(theme);
  const paragraph = [
    "Our Premier Laundry Service offers pickup and delivery service, to make laundry easy by skipping it and leaving it to us. Your Laundry Delivered to your door. Sign up for weekly or bi-weekly service for already discounted services.",
    " ",
    "USE PROMO CODE “TRY 10” to save 10 Percent on your first order today.",
  ];

  return (
    <>
      <section id="services" className="lg:pb-15 md:pt-15 pb-16 pt-12">
        <div className="container">
          <SectionTitle title="Premier Laundry Services" paragraph="" center />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
