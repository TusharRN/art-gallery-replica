import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ slide }) => {
  const { img, id, next, prev } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div>
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="absolute flex flex-col items-center transform -translate-y-1/2 top-1/3 w-full">
        <h1 className="lg:text-6xl md:text-4xl font-bold text-white">
          DISCOVER YOUR <br />
        </h1>
        <h1 className="text-green-400 lg:text-6xl md:text-4xl text-3xl font-bold">
          "OWN ART"
        </h1>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 top-1/2 w-full">
        <div className="lg:w-full w-3/4">
          <p className="text-white md:text-xl text-center md:block hidden">
            T-Drawing can draw your imagination and make you see your own
            imagination what you can't see.
            <br />
            “Art is never finished, only abandoned.” – Leonardo Da Vinci.
          </p>
        </div>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 top-2/3 w-full">
        <Link
          to="/services"
          className="btn btn-outline hover:bg-green-500 text-white"
        >
          Art gallery
        </Link>
      </div>

      <div className="absolute left-10 top-1/2">
        <a href={`#slide${prev}`} className="text-white font-bold text-4xl ">
          ❮
        </a>
      </div>
      <div className="absolute right-10 top-1/2">
        <a href={`#slide${next}`} className="text-white font-bold text-4xl">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slide;
