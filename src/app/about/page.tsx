import PageHeader from "@/components/Common/PageHeader";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for Clean Fold Laundry",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <PageHeader
        pageName="About Page"
        description="Learn more about our company"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">About Us</h1>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            CleanFold Laundry is locally owned and operated by a caring team of
            laundry experts. We are dedicated to providing the utmost attention
            and respect for your personal clothing and items. We understand that
            doing laundry can be overwhelming and time-consuming, so we are here
            to “take the load off” by doing it for you!
          </p>
          <p>
            Customer satisfaction is our #1 priority. We are passionate about
            every wash, dry, and “CLEANFOLD”-ed order we process. We believe in
            caring for our customers and taking every measure to do right by
            them. From greeting you courteously and professionally to delivering
            beautifully packaged laundry parcels straight to your door. We have
            your best interest in mind every step of the way. The most rewarding
            part of what we do is creating long-lasting relationships with our
            clients because we strive to be more than just your average laundry
            processor; we aim to be your family’s local, trusted, go-to laundry
            expert.
          </p>
          <p>
            Our successful service is based on 3 criteria:{" "}
            <strong>quality</strong>, <strong>affordability</strong>, and{" "}
            <strong>reliability</strong>. We always keep these factors in mind
            to maximize customer satisfaction.
          </p>
          <p>
            Thank you for choosing CleanFold Laundry. We appreciate the
            opportunity to care for your family’s washables and wearables.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
