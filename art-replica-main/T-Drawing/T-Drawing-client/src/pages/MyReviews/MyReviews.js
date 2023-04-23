import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../utilities/Hook/useTitle";
import img2 from "../../assets/images/section3.jpg";
import { AuthContext } from "../../context/AuthProvider";
import MyReviewsRow from "./MyReviewsRow/MyReviewsRow";
import toast from "react-hot-toast";

const MyReviews = () => {
  const [load, setLoad] = useState(true);
  useTitle("MyReviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // pagination
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 4;
  const pages = Math.ceil(count / perPage);
  // console.log(`http://localhost:1000/reviews?email=${user.email}`);
  useEffect(() => {
    fetch(
      `https://t-drawing-server.vercel.app/reviews?email=${user.email}&currentPage=${currentPage}&perPage=${perPage}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReviews(data.reviews);
        setCount(data.count);
        setLoad(false);
      });
  }, [user?.email, logOut, currentPage]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure? You want to remove feedback.?"
    );
    if (proceed) {
      fetch(`https://t-drawing-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Feedback Removed Successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="carousel-img">
          <img src={img2} alt="" className="w-full lg:h-[300px] rounded-b-xl" />
        </div>
        <div className="absolute left-24 top-1/4">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white">
            My Reviews
          </h1>
          <h2 className="lg:text-4xl md:text-2xl text-xl font-bold  text-green-400 ">
            {user?.displayName}
          </h2>
          <h4 className="lg:text-xl font-semibold text-white">{user?.email}</h4>
        </div>
      </div>
      <div className="my-10">
        {load ? (
          <progress className="progress w-full"></progress>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <MyReviewsRow
              key={review._id}
              review={review}
              handleDelete={handleDelete}
            ></MyReviewsRow>
          ))
        ) : (
          <div>
            <div className="text-center my-10 text-4xl font-bold border-2 p-5">
              <h2>NO Reviews or Feedback</h2>
            </div>
          </div>
        )}

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
    </div>
  );
};

export default MyReviews;
