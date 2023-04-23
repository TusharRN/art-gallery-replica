import React from 'react';
import img1 from '../../../assets/images/slider1.jpg'
import img2 from '../../../assets/images/slider2.jpg'
import img3 from '../../../assets/images/slider3.jpg'
import Slide from './Slide/Slide';
const Banner = () => {
    const bannerData = [
        {
            img: img1,
            prev: 3,
            id: 1,
            next:2
        },
        {
            img: img2,
            prev: 1,
            id: 2,
            next:3
        },
        {
            img: img3,
            prev: 2,
            id: 3,
            next:1
        }
    ]
    return (
      <div>
        <div
          className="carousel w-full slide relative"
          data-bs-ride="carousel"
        >
          {bannerData.map((slide) => (
            <Slide key={slide.id} slide={slide}></Slide>
          ))}
        </div>
      </div>
    );
};

export default Banner;