import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyReviewsRow = ({ review, handleDelete, handleUpdate }) => {

  const {
    rating,
    comment,
    userEmail,
    userName,
    userImg,
    serviceTitle,
    time,
    _id,
  } = review;
  // time converting milisec to time
  const commentTime = new Date(time);
  const current = new Date();
  current.setTime(commentTime.getTime());

 
  return (
    <div className="flex justify-start mx-5 mb-5 pb-3 border-b-2">
      <div className="mr-5">
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={userImg} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="md:flex items-center justify-between">
            <h2 className="text-xl font-bold">{userName}</h2>
            <div>
              <small>{`${current}`}</small>
            </div>
          </div>
          <div>
            <small>{userEmail}</small>
            <div>
              <div className="flex items-center">
                <p>{serviceTitle}</p>
                <div className="flex items-center ml-10">
                  <p className="mr-1 font-semibold">Rating: {rating}</p>
                  <FaStar className="text-yellow-500"></FaStar>
                </div>
              </div>
            </div>
            <p className="font-bold">
              Feedback: "
              <span className="text-green-500 font-normal">{comment}</span>"
            </p>

            
            {/* buttons */}
            <div className="flex justify-end">
              <button
                className="btn btn-circle btn-sm mr-4 bg-red-500"
                onClick={() => handleDelete(_id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link
                className="btn btn-square btn-sm bg-green-500"
                to={`/update/${_id}`}
              >
                ⌘
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsRow;
