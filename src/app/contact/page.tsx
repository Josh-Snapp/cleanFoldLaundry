import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Contact us for a custom quote",
  description: "For additional questions, or Request a Custom quote.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="For additional questions, or Request a
Custom quote."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
