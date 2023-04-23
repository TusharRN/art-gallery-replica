import React from 'react';
import img2 from "../../../assets/images/section3.jpg";

const AboutUs = () => {
    return (
      <div className="mb-20">
        <div className="relative">
          <div>
            <img src={img2} alt="" className="w-full" />
          </div>
          <div className="absolute right-0 md:w-1/2 w-11/12 h-full top-0 bg-white bg-opacity-80">
            <div className="h-full md:px-5 px-2 flex flex-col justify-center">
              <h2 className="md:text-2xl font-bold text-green-500 text-center">
                About Us
              </h2>
              <h1 className="lg:text-4xl md:text-3xl font-bold text-black">
                “Art is a lie that makes us realize truth.”
              </h1>
              <h4 className="lg:text-xl text-xs text-gray-600">
                T-Drawing can draw your imagination and make you see your own
                imagination what you can't see.
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;