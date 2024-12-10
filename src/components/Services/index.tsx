"use client";
import { useTheme } from "next-themes";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Services = () => {
  const { theme } = useTheme();
  const features = featuresData(theme);
  return (
    <>
      <section id="services" className="lg:pb-15 md:pt-15 mt-28 pb-16 pt-28 ">
        <div className="container">
          <SectionTitle
            title="Services"
            paragraph="We provide reliable self-service, residential and commercial delivery services."
            center
          />

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
