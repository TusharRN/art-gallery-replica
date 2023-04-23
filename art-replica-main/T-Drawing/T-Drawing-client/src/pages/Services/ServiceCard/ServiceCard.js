import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, rating, description } = service;
  return (
    <div
      data-aos="zoom-in"
      className="card card-compact  bg-base-100 rounded-none border-b-2"
    >
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center">
            <p className="mr-1 font-semibold">Rating: {rating}</p>
            <FaStar className="text-yellow-500"></FaStar>
          </div>
        </div>
        <div className="mb-2">
          <p>
            {description.length > 100 ? description.slice(0, 100) : description}
            ...
          </p>
        </div>
        <div className="card-actions items-center">
          <p className=" font-semibold text-xl">
            Price: <span className="text-green-500">${price}</span>
          </p>
          <Link
            to={`/serviceDetails/${_id}`}
            className="btn bg-green-500 hover:bg-green-600 border-none"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
