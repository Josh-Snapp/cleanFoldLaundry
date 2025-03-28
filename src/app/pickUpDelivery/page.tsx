import PageHeader from "@/components/Common/PageHeader";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickup and Delivery",
  description: "We offer pick up and delivery service",
  // other metadata
};

const PickUpDelivery = () => {
  return (
    <>
      <PageHeader
        pageName="Clean Fold Pickup and Delivery Laundry Service"
        description=""
      />

      <section className="flex items-center justify-center pb-[120px] pt-[30px]">
        <div className="container space-y-6 text-center text-gray-700 dark:text-gray-300">
          <p className="text-lg font-semibold">
            Currently, Serving 2 great locations:
          </p>
          <ul className="inline-block list-disc pl-6 text-left">
            <li>
              St. Petersburg, St. Pete Beach, Pinellas Park & Seminole, Florida
            </li>
            <li>Palm Bay & Melbourne, Florida</li>
          </ul>
          <div className="relative mx-auto aspect-[3/2] w-full  md:max-w-[600px] lg:max-w-[600px]">
            <Image
              src="/images/pickupDelivery/pickUpDeliveryImg.png"
              alt="author"
              fill
            />
          </div>
          <p>
            No time for laundry? Tired of folding or picking your clothes out of
            the hamper? We can help! Your laundry delivered fresh &amp; neatly
            folded within 1-2 business days!{" "}
            <strong>AT A CLICK OF A BUTTON.</strong> Simply schedule your pickup
            through our link above, put your laundry in whatever bag you got,
            and set it outside on your doorstep. We will do the rest!
          </p>
          <p>
            We offer full-service, reliable pickup and delivery to homes and
            businesses. Unlike our competitors who use 3rd-party processors, we
            are proudly family-owned and operated which means you know exactly
            who is doing your laundry every step of the way. We offer one-time
            servicing, as well as discounted recurring service for those who
            find they enjoy having their time back!
          </p>
          <p>
            <strong>
              Use promo code “TRY10” to save 10% off your first order today!
            </strong>
          </p>
          <div className="mt-8 hidden sm:block">
            <a
              href="https://cleanfoldlaundry.curbsidelaundries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Schedule Pickup
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickUpDelivery;
