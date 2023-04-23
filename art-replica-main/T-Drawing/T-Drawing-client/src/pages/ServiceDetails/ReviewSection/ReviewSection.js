import React, { useContext } from "react";
import toast from "react-hot-toast";
import img2 from "../../../assets/images/section3.jpg";
import { AuthContext } from "../../../context/AuthProvider";
const ReviewSection = ({ service }) => {
    const { service_id, title } = service;
    const { user } = useContext(AuthContext);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      // current time in milisec
      const now = new Date();
      const timeMili = now.getTime();
      if (user) {
        const rating = form.rating.value;
        const comment = form.comment.value;
        const userEmail = user?.email;
        const userName = user?.displayName;
        const userImg = user?.photoURL;
        const serviceId = service_id;
        const serviceTitle = title;
        const time = timeMili;
        //   console.log(rating, comment, userEmail, userName, userImg, serviceId, serviceTitle, time);
          const review = {
            rating,
            comment,
            userEmail,
            userName,
            userImg,
            serviceId,
            serviceTitle,
            time,
          };

          fetch("https://t-drawing-server.vercel.app/reviews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
                if (data.acknowledged) {
                  
                  toast.success("Feedback done!");
                  form.reset();
              } else {
                toast.error("Failed to give feedback!");
              }
            })
            .catch((err) => console.error(err));
      } else {
        return toast.error("Login first to give feedback..!");
      }
    };
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <p className="text-2xl font-bold text-green-500">Review</p>
        <h2 className="text-5xl font-semibold">Give Us Feedback </h2>
      </div>
      <div className="relative">
        <div>
          <img src={img2} alt="" className="w-full lg:h-auto h-[400px]" />
        </div>
        <div>
          <div className="absolute right-0 h-full w-full top-0 bg-white bg-opacity-70">
            <div className="flex justify-center items-center h-full">
              <form onSubmit={handleSubmit} className="mt-10 w-11/12">
                {user?.uid ? (
                  <div className="flex items-center m-4">
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold ml-4">
                      {user?.displayName}
                    </h2>
                  </div>
                ) : (
                  <h2 className="text-2xl font-bold mb-2">
                    You need login to give feedback.
                  </h2>
                )}
                <div className="w-1/2">
                  <input
                    name="rating"
                    type="text"
                    placeholder="Rating (0-5)"
                    className="input input-bordered w-full "
                    required
                  />
                </div>
                <div className="my-5">
                  <textarea
                    name="comment"
                    className="textarea textarea-bordered w-full h-24"
                    placeholder="Comment..."
                  ></textarea>
                  <div className="pt-5">
                    <input
                      className="btn bg-green-500 hover:bg-green-600 border-none"
                      type="submit"
                      value="Send FeedBack"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
