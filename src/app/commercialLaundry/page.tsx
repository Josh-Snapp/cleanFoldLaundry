import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

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
            care of all your laundry in a professional manner. Then deliver it
            right back so it&rsquo;s ready for you.
          </p>
          <p>
            We work with several types of businesses, and here are just a few:
          </p>
          <ul className="list-disc pl-6">
            <li>Hotels/Motels &ndash; towels, comforters, and sheets</li>
            <li>
              Air BnB/VRBO &ndash; area rugs, linens, towels, blankets, pillows,
              sheets
            </li>
            <li>Day Spas/Med Spas/Gyms &ndash; towels, and robes</li>
            <li>
              Colleges &ndash; student laundry programs, department or specialty
              laundry
            </li>
            <li>
              Sport Teams &ndash; uniforms, towels, and specialty spot cleaning
            </li>
            <li>
              Event Venues/Linen Rentals &ndash; table linens, chair linens,
              napkins
            </li>
            <li>
              Salons/Barbers/Aestheticians/Massage Therapists &ndash; towels,
              sheets
            </li>
            <li>Pet Groomers &ndash; towels, pet beds, and more</li>
            <li>
              Hospitals/Clinics/Doctor&rsquo;s offices &ndash; uniforms, bed
              linens, and more
            </li>
            <li>
              Industrial Businesses/Mechanics &ndash; uniforms, work towels, and
              rags
            </li>
          </ul>
          <p>
            If your business is not on the list, don&rsquo;t worry. We will work
            with whatever you have to give us and can create a custom cleaning
            process or quote for your needs.
          </p>
          <p>
            <strong>Contact Us for your custom quote:</strong>{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Click here
            </a>{" "}
            or call us today &ndash;{" "}
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
