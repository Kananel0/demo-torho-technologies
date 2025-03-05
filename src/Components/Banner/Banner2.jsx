import React from "react";
import BannerPng from "../../assets/banner1.jpg"

const Banner2 = ({ togglePlay }) => {
  return (
    <div className="relative py-12 sm:py-0">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center">
          {/* text content section */}
          <div className="relative order-2 sm:order-1 lg:pr-20">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
Vision.               
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              To be The Leading Innovation Consultancy in Africa. Supporting the development of State Capacity and Private Sector Efficiency 

We remain steadfast in being a Real Partner in solving client’s needs, by utilizing the characteristics of the client and the location to contribute to society, a better quality of life 

Providing an environment of Excellence.

We help exceptional founders to Build their next Venture
              </p>
             
            </div>
            {/* backgrond color blob */}
            {/* <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-200px] left-[300px] blur-3xl opacity-50 "></div> */}
          </div>

          {/* image section */}
          <div data-aos="fade-up" className="order-1 sm:order-2">
          <img src={BannerPng} alt="" className="w-full max-w-[400px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Banner2;
