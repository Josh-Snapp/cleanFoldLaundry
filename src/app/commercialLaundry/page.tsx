import PageHeader from "@/components/Common/PageHeader";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Laundry Services",
  description: "Commercial Laundry Services",
  // other metadata
};

const CommercialLaundryPage = () => {
  return (
    <>
      <PageHeader pageName="Commercial Laundry Services" description="" />
      <div className="flex items-center justify-center">
        <div className="container mx-auto space-y-6 px-4 py-8 text-center text-gray-700 dark:text-gray-300">
          <div className="relative mx-auto aspect-[1/1] w-full md:max-w-[600px] lg:max-w-[600px]">
            <Image
              src="/images/commercialLaundry/yachtimage.png"
              alt="author"
              fill
            />
          </div>
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
          <ul className="mx-auto inline-block list-disc pl-6 text-left">
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
              Hospitals/Clinics/Doctor&rsquo;s offices – uniforms, bed linens,
              and more
            </li>
            <li>
              Industrial Businesses/Mechanics – uniforms, work towels, and rags
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
