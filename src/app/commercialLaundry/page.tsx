import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
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
            don’t let laundry slow you down. Our commercial laundry service will
            do everything for you. We pickup your industry's laundry from one or
            multiple locations as often as you need us! We have commercial-grade
            machines and expert launderers who will take care of all your
            laundry in a professional manner. Then deliver it right back so it’s
            ready for you.
          </p>
          <p>
            We work with several types of businesses, and here are just a few:
          </p>
          <ul className="list-disc pl-6">
            <li>Hotels/Motels – towels, comforters, and sheets</li>
            <li>
              Air BnB/VRBO – area rugs, linens, towels, blankets, pillows,
              sheets
            </li>
            <li>Day Spas/Med Spas/Gyms – towels, and robes</li>
            <li>
              Colleges – student laundry programs, department or specialty
              laundry
            </li>
            <li>Sport Teams – uniforms, towels, and specialty spot cleaning</li>
            <li>
              Event Venues/Linen Rentals – table linens, chair linens, napkins
            </li>
            <li>
              Salons/Barbers/Aestheticians/Massage Therapists – towels, sheets
            </li>
            <li>Pet Groomers – towels, pet beds, and more</li>
            <li>
              Hospitals/Clinics/Doctor’s offices – uniforms, bed linens, and
              more
            </li>
            <li>
              Industrial Businesses/Mechanics – uniforms, work towels, and rags
            </li>
          </ul>
          <p>
            If your business is not on the list, don’t worry. We will work with
            whatever you have to give us and can create a custom cleaning
            process or quote for your needs.
          </p>
          <p>
            <strong>Contact Us for your custom quote:</strong>{" "}
            <a href="/contact" className="text-blue-500 hover:underline">
              Click here
            </a>{" "}
            or call us today –{" "}
            <a
              href="tel:+13212227176"
              className="text-blue-500 hover:underline"
            >
              321-222-7176 Extension 2
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CommercialLaundryPage;
