"use client";
import { useTheme } from "next-themes";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const { theme } = useTheme();
  const features = featuresData(theme);
  return (
    <>
      <section id="features" className="lg:pb-15 md:pt-15 mt-16 pb-16 pt-28 ">
        <div className="container">
          <SectionTitle
            title="Services"
            paragraph="We provide the best laundry services in the area."
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

export default Features;
