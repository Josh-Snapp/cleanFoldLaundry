import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickup and Delivery",
  description: "We offer pick up and delivery service",
  // other metadata
};

const PickUpDelivery = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pick and Delivery Services"
        description="We offer pick up and delivery services"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <p> Coming Soon!</p>
        </div>
      </section>
    </>
  );
};

export default PickUpDelivery;
