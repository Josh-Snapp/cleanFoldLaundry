"use client";
import { useTheme } from "next-themes";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Services = () => {
  const { theme } = useTheme();
  const features = featuresData(theme);
  const paragraph = [
    "As your local, premier laundry pickup-and-delivery service, let us help you “take a load off” by doing laundry for you. We offer full-service, reliable pickup and delivery to homes and businesses. Unlike our competitors who use 3rd-party processors, we are proudly family-owned and operated which means you know exactly who is doing your laundry every step of the way. We offer one-time servicing, as well as discounted recurring service for those who find they enjoy having their time back!",
    " ",
    "Use promo code “TRY10” to save 10% off your first order today!",
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
