import React, { useEffect, useState } from "react";
import AllReviewRow from "./AllReviewRow/AllReviewRow";

const AllReview = ({ service_id }) => {
  const [reviews, setReviews] = useState([]);
  const [load, setLoading] = useState(true);

  // pagination
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;
  const pages = Math.ceil(count / perPage);

  useEffect(() => {
    fetch(
      `https://t-drawing-server.vercel.app/reviews/all?sid=${service_id}&currentPage=${currentPage}&perPage=${perPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setCount(data.count);
        setLoading(false);
      });
  }, [reviews, currentPage]);
  return (
    <div>
      <div className="mb-10 mx-5">
        <p className="text-2xl font-bold text-green-500">Feedback</p>
        <h2 className="text-5xl font-semibold">Client's Feedback </h2>
      </div>
      <div className="overflow-x-auto w-full my-10">
        {load ? (
          <progress className="progress w-full"></progress>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <AllReviewRow key={review._id} review={review}></AllReviewRow>
          ))
        ) : (
          <div className="text-center my-10 text-4xl font-bold border-2 p-5">
            <h2>NO Reviews or Feedback</h2>
          </div>
        )}
      </div>
      {/* pagination */}
      <div className="my-10 flex justify-center">
        <div className="btn-group">
          {[...Array(pages).keys()].map((number) => (
            <button
              onClick={() => setCurrentPage(number)}
              key={number}
              className={`btn ${currentPage === number && "bg-green-400"}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReview;
