import PageHeader from "@/components/Common/PageHeader";
import Contact from "@/components/Contact";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Contact us for a custom quote",
  description: "For additional questions, or Request a Custom quote.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <PageHeader
        pageName="Contact Us"
        description="For additional questions, or Request a
Custom quote."
      />

      <section className="container mx-auto flex flex-col items-center justify-between space-y-8 px-4 py-8 md:flex-row md:space-y-0">
        {/* Contact Component */}
        <div className="w-full md:w-1/2">
          <Contact />
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/images/logo/cleanFoldPoster.png" // Replace with the actual path to your CleanFold image
            alt="CleanFold Logo"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
