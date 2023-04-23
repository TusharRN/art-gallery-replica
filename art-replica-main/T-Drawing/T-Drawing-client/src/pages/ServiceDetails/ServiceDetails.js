import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../utilities/Hook/useTitle";
import AllReview from "./AllReview/AllReview";
import ReviewSection from "./ReviewSection/ReviewSection";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id,service_id, title, rating, img, price, description } = service;
  useTitle(title);

  return (
    <div className="mt-16 mb-10">
      <section>
        <div className="text-center mb-10">
          <p className="text-2xl font-bold text-green-500">Details</p>
          <h2 className="text-5xl font-semibold">{title} </h2>
        </div>
        <div>
          <div className="card lg:card-side bg-base-100 mx-3 rounded-none">
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
            <div className="flex justify-center items-center">
              <div className="card-body">
                <h2 className="card-title">Title: {title}</h2>
                <div>
                  <p>{description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold">
                    Price: <span className="text-green-500">${price}</span>
                  </p>
                  <div className="flex items-center">
                    <p className="mr-1 font-semibold">Rating: {rating}</p>
                    <FaStar className="text-yellow-500"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ReviewSection key={_id} service={service}></ReviewSection>
        <AllReview key={service_id} service_id={service_id} ></AllReview>
      </section>
    </div>
  );
};

export default ServiceDetails;
