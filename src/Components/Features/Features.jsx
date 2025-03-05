import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";

const FeaturesData = [
  {
    name: "Software Development",
    icon: (
      <FaLaptopCode className="text-5xl text-white duration-300 group-hover:text-black" />
    ),
    link: "#",
    description: (
      <ul className="pl-5 text-left list-disc">
        <li>Custom Dev</li>
        <li>UX and UI</li>
        <li>Prototyping</li>
        <li>Scale Development/Product</li>
        <li>Innovation Management</li>
      </ul>
    ),
    aosDelay: "300",
  },
  {
    name: "Data Science",
    icon: (
      <CiDatabase className="text-5xl text-white duration-300 group-hover:text-black" />
    ),
    link: "#",
    description: (
      <ul className="pl-5 text-left list-disc">
        <li>Strategy consulting</li>
        <li>Data Science/ advisory</li>
        <li>Organizational/structure</li>
        <li>Market Research</li>
        <li>Brand Development</li>
      </ul>
    ),
    aosDelay: "500",
  },
  {
    name: "Financial Advisory",
    icon: (
      <FaChartLine className="text-5xl text-white duration-500 group-hover:text-black" />
    ),
    link: "#",
    description: (
      <ul className="pl-5 text-left list-disc">
        <li>Financial analysis</li>
        <li>Financial Modelling</li>
        <li>Capital Raising</li>
        <li>Information/Memorandum</li>
        <li>Due Diligence</li>
        <li>Project management</li>
      </ul>
    ),
    aosDelay: "700",
  },
  {
    name: "ICT Business Development",
    icon: (
      <CiHeadphones className="text-5xl text-white duration-500 group-hover:text-black" />
    ),
    link: "#",
    description: (
      <ul className="pl-5 text-left list-disc">
        <li>Commercialization</li>
        <li>Sales process Management</li>
        <li>Smart City management</li>
        <li>Supply chain Management</li>
        <li>IOT procurement</li>
      </ul>
    ),
    aosDelay: "700",
  },
];


const Features = () => {
  return (
    <>
      <div id="services" className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="mb-12 text-3xl font-semibold text-center sm:text-4xl"
          >
            Services We Offer
          </h1>

          {/* card section */}
          <div className="flex flex-row flex-wrap items-center justify-between gap-4">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="flex-1 p-4 sm:py-10 bg-orange-500 hover:bg-black hover:shadow-[0_0_40px_#000000f0] text-white hover:text-orange-500 rounded-lg duration-300 text-center group space-y-3 sm:space-y-6"
              >
                <div className="grid place-items-center">{data.icon}</div>
                <h1 className="text-2xl group-hover:text-orange-500">{data.name}</h1>
                <p className="group-hover:text-orange-500">{data.description}</p>
                <a
                  href={data.link}
                  className="inline-block py-3 text-lg font-semibold text-orange-500 duration-300 group-hover:text-orange-500"
                >
                  {data.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
