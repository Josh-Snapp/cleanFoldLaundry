import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Laundry ServicesS",
  description: "FOLDED LAUNDRY ART",
  // other metadata
};

const CommercialLaundryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Commercial Laundry Services"
        description="FOLDED LAUNDRY ART"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            When you run or own a business you have plenty to keep you busy, so
            don&rsquo;t let laundry slow you down. Our commercial laundry
            service will do everything for you. We pickup your industry&apos;s
            laundry from one or multiple locations as often as you need us! We
            have commercial-grade machines and expert launderers who will take
            great care of all your laundered items and deliver them back to you
            in a prompt, professional manner. Then deliver it right back so
            it&rsquo;s ready for you.
          </p>
          <p>We work with several types of businesses. Here are just a few:</p>
          <ul className="list-disc pl-6">
            <li>
              <b>Hotels/Motels &ndash;</b> towels, comforters, and sheets
            </li>
            <li>
              <b>Air BnB/VRBO &ndash;</b> area rugs, linens, towels, blankets,
              pillows, sheets
            </li>
            <li>
              <b>Day Spas/Med Spas/Gyms &ndash;</b> towels, and robes
            </li>
            <li>
              <b>Colleges &ndash;</b> student laundry programs, department or
              specialty laundry
            </li>
            <li>
              <b>Sport Teams &ndash;</b> uniforms, towels, and specialty spot
              cleaning
            </li>
            <li>
              <b> Event Venues/Linen Rentals &ndash;</b> table linens, chair
              linens, napkins
            </li>
            <li>
              <b>Salons/Barbers/Aestheticians/Massage Therapists &ndash;</b>{" "}
              towels, sheets
            </li>
            <li>
              <b>Pet Groomers &ndash;</b> towels, pet beds, and more
            </li>
            <li>
              <b>Hospitals/Clinics/Doctor&rsquo;s offices &ndash;</b> uniforms,
              bed linens, and more
            </li>
            <li>
              <b>Industrial Businesses/Mechanics &ndash;</b> uniforms, work
              towels, and rags
            </li>
          </ul>
          <p>
            If your business is not on the list, don&rsquo;t worry. We will work
            with whatever you have to give us and can create a custom cleaning
            process or quote for your needs.
          </p>
          <p>
            <strong>Contact Us for your custom quote:</strong>{" "}
            <Link href="/contact" className="text-blue-500 hover:underline">
              Click here
            </Link>{" "}
            or call us today &ndash;{" "}
            <Link
              href="tel:+13212227176"
              className="text-blue-500 hover:underline"
            >
              321-222-7176
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CommercialLaundryPage;
