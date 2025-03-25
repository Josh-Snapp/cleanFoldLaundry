import PageHeader from "@/components/Common/PageHeader";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickup and Delivery",
  description: "We offer pick up and delivery service",
  // other metadata
};

const PickUpDelivery = () => {
  return (
    <>
      <PageHeader pageName="Pick and Delivery Services" description="" />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <p> Coming Soon!</p>
        </div>
      </section>
    </>
  );
};

export default PickUpDelivery;
