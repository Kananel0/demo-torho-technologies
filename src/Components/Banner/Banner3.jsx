import React from "react";
// import video from "../../assets/video.mp4"
import BannerPng from "../../assets/banner3.jpg"



const Banner3 = ({ togglePlay }) => {
  return (
    <div className="relative py-12 sm:py-0">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false" style={{ marginLeft: "-100px" }}>
  <div data-aos="fade-up" className="order-1 sm:order-2">
  <img src={BannerPng} alt="" className="w-full max-w-[400px] rounded-lg" />
  </div>
</div>





          
          {/* text content section */}
          <div className="relative lg:pr-20">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Value.
              
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              Nation Building  
              Integrity to solve our client’s needs with our eye on a common future where we share the pleasures of success together 

We are honest and passionate in our consulting work as we seek to solve our client’s real need for change

We have an Entrepreneurial spirit by developing solutions with agility and continuous learning.

We invest in technological innovations which provide a social impact
 

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

export default Banner3;
