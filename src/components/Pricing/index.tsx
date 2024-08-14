"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import stPeteData from "./stPetePricingData";
import palmBayData from "./palmBayMelbournePricingData";

const Pricing = () => {
  // Step 2: Initialize state variable for current location
  const [currentLocation, setCurrentLocation] = useState("StPete");

  // Step 3: Toggle function to switch between locations
  const toggleLocation = () => {
    setCurrentLocation(
      currentLocation === "StPete" ? "Palm Bay / Melbourne" : "StPete",
    );
  };

  // Step 4: Use currentLocation to decide which data to load
  const data = currentLocation === "StPete" ? stPeteData() : palmBayData();

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-16 lg:py-16">
      <div className="container">
        <SectionTitle
          title={`${currentLocation === "StPete" ? "St. Pete Area" : "Palm Bay / Melbourne Area"} Customer`}
          paragraph="Your Choice Pricing"
          center
          width="665px"
        />
        <div className="flex items-center justify-center">
          <button
            onClick={toggleLocation}
            className="mb-5 rounded-md border border-blue-500 px-4  py-2 text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Switch to{" "}
            {currentLocation === "StPete" ? "Palm Bay / Melbourne" : "St. Pete"}{" "}
            Area
          </button>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <PricingBox
              key={item.id}
              packageName={item.title}
              price={item.pricing}
              duration={"lb"}
              subtitle=""
            >
              {item.attributes.map((attr) => (
                <OfferList
                  key={attr.text}
                  text={attr.text}
                  status={attr.status}
                />
              ))}
            </PricingBox>
          ))}
        </div>
      </div>
      {/* SVG and other static elements */}
    </section>
  );
};

export default Pricing;
