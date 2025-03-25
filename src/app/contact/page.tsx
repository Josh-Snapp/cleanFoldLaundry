import PageHeader from "@/components/Common/PageHeader";
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
      <PageHeader
        pageName="Contact Us"
        description="For additional questions, or Request a
Custom quote."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
