import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import img2 from "../../assets/images/section3.jpg";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../utilities/Hook/useTitle";
import './AddService.css'

const AddService = () => {
  useTitle("AddService");
  const { user } = useContext(AuthContext);
  const [serviceId, setServiceId] = useState();
  useEffect(() => {
    fetch("https://t-drawing-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        const id = data.map((d) => parseInt(d.service_id));
        const maxId = Math.max(...id);
        setServiceId(maxId);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_id = `0${serviceId + 1}`;
    const title = form.title.value;
    const rating = form.rating.value;
    const img = form.imageUrl.value;
    const price = `${form.price.value}.00`;
    const description = form.description.value;

    // console.log(service_id, title, rating, img, price, description);
    const service = {
      service_id,
      title,
      rating,
      img,
      price,
      description,
    };

    fetch("https://t-drawing-server.vercel.app/services/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Successfully Added New Service..!");
        } else {
          toast.error("Failed to Add Service..!");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="relative">
        <div className="carousel-img">
          <img src={img2} alt="" className="w-full lg:h-[300px] rounded-b-xl" />
        </div>
        <div className="absolute left-24 top-1/4">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white">
            Add Services
          </h1>
          <h2 className="lg:text-4xl md:text-2xl text-xl font-bold  text-green-400 ">
            {user?.displayName}
          </h2>
          <h4 className="lg:text-xl font-semibold text-white">{user?.email}</h4>
        </div>
      </div>

      <div className="flex justify-center  bg-[#F3F3F3] rounded-lg my-10">
        <form onSubmit={handleSubmit} className="mt-10 w-11/12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="title"
              type="text"
              placeholder="Service Title"
              className="input input-bordered w-full "
              required
            />
            <input
              name="imageUrl"
              type="text"
              placeholder="Image Url"
              className="input input-bordered w-full "
              required
            />
            <input
              name="rating"
              type="text"
              placeholder="Rating (0-5)"
              className="input input-bordered w-full "
              required
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="my-10">
            <textarea
              name="description"
              className="textarea textarea-bordered w-full h-52"
              placeholder="Description..."
            ></textarea>
            <div className="pt-5">
              <input
                className="btn bg-green-500 hover:bg-green-600 border-none w-full"
                type="submit"
                value="Add new service"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
