import React from "react";
import video from "../../assets/video.mp4"
import BannerPng from "../../assets/banner2.jpg"


const Banner = ({ togglePlay }) => {
  return (
    <div className="relative py-12 sm:py-0">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false" style={{ marginLeft: "-100px" }}>
          <img src={BannerPng} alt="" className="w-full max-w-[400px] rounded-lg" />

          

</div>





          
          {/* text content section */}
          <div className="relative lg:pr-20">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Mission.
              
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              Nation Building  

We bring success to our clients by contributing to enhance their corporate value 

We assist our clients in achieving their objectives, while operating in an increasingly complex environment, sometimes adverse, allowing an adequate risk management. 

Supporting clients through a wide range of personalized services and tailor-made solutions. 

              </p>
              <div className="flex gap-6">
             
              </div>
            </div>
            {/* <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
