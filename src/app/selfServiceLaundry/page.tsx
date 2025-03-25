import PageHeader from "@/components/Common/PageHeader";

import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Self-Service Laundry | Our Sister locations provide Self-Service Laundry at the Following Locations",
  description: "This is Self-Service Laundry Page for CleanFoldLaundry",
  // other metadata
};

const GoogleMapComponent = dynamic(() => import("@/components/Maps/index"), {
  ssr: false,
});

const SelfServiceLaundry = () => {
  const northStPeteLat = 27.79059;
  const northStPeteLong = -82.65529;
  const southStPeteLat = 27.75595;
  const southStPeteLong = -82.68006;
  const palmBayLat = 28.01826;
  const palmBayLong = -80.62073;
  return (
    <>
      <PageHeader pageName="Self-Service Laundry" description="" />

      <section className="pb-[120px] pt-[40px]">
        <div className="container">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Saint Petersburg/Tampa Locations
          </h2>

          <div className="flex flex-wrap gap-8">
            <div className="min-w-[300px] flex-1">
              <h3 className="mb-2 text-center text-lg font-semibold">
                <Link
                  href="https://soapyslaundry.com/"
                  className="text-primary hover:underline"
                >
                  Soapy’s South Saint Petersburg
                </Link>
              </h3>
              <p className="mb-4 text-center text-sm text-gray-600">
                3435 15th Ave South
                <br />
                St. Petersburg, FL 33711
              </p>
              <GoogleMapComponent lat={southStPeteLat} lng={southStPeteLong} />
            </div>
            <div className="min-w-[300px] flex-1">
              <h3 className="mb-2 text-center text-lg font-semibold">
                <Link
                  href="https://soapyslaundry.com/"
                  className="text-primary hover:underline"
                >
                  Soapy’s North Saint Petersburg
                </Link>
              </h3>
              <p className="mb-4 text-center text-sm text-gray-600">
                2020 16 th St North
                <br />
                St. Petersburg, FL 33704
              </p>
              <GoogleMapComponent lat={northStPeteLat} lng={northStPeteLong} />
            </div>
          </div>

          <h2 className="mb-4 pt-[40px] text-center text-2xl font-bold">
            Palm Bay/Melbourne Location
          </h2>
          <h3 className="mb-2 text-center text-lg font-semibold">
            <Link
              href="https://palmbayexpress.com/"
              className="text-primary hover:underline"
            >
              Palm Bay Express Laundry
            </Link>
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="mx-auto min-w-[300px] max-w-[800px] flex-1">
              <p className="mb-4 text-center text-sm text-gray-600">
                5275 Babcock St. NE
                <br />
                Palm Bay, FL 32905
              </p>
              <div className="mx-auto max-w-[800px]">
                <GoogleMapComponent lat={palmBayLat} lng={palmBayLong} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelfServiceLaundry;
