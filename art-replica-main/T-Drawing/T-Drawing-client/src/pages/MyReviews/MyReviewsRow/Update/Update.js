import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const Update = () => {
    const { user } = useContext(AuthContext);
    const review = useLoaderData();
    const { comment, rating, _id } = review;

    const navigate = useNavigate()
    const handleUpdate = (object) => {
      const { _id } = object;
      console.log(object);
      console.log(`https://t-drawing-server.vercel.app/reviews/${_id}`);
      fetch(`https://t-drawing-server.vercel.app/reviews/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(object),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            toast.success("Feedback Updated Successfully");
              navigate('/myReviews')
          }
        });
    };
    
     const handleSubmit = (event) => {
       event.preventDefault();
       const form = event.target;
       const rating = form.rating.value;
       const comment = form.comment.value;
       // current time in milisec
       const now = new Date();
       const timeMili = now.getTime();
       const time = timeMili;
       const object = {
         rating,
         comment,
         time,
         _id,
       };
       handleUpdate(object);
    };
    
    return (
      <div className="mt-10">
        <div className="flex justify-center items-center">
          <div className="modal-box">
            <h3 className="font-bold text-2xl mt-3">Update your feedback. </h3>
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
                  defaultValue={rating}
                />
              </div>
              <div className="my-5">
                <textarea
                  name="comment"
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Comment..."
                  defaultValue={comment}
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
    );
};

export default Update;