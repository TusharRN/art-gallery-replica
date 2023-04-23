import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/section.webp";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../../shared/GoogleLogin/GoogleLogin";
import useTitle from "../../utilities/Hook/useTitle";

const SignUp = () => {
    useTitle("SignUp");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdateProfile(name, imageUrl);
        form.reset();
        navigate(from, { replace: true });
        toast.success("Sign in successful.");
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateProfile = (name, imageUrl) => {
    const profile = { displayName: name, photoURL: imageUrl };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error("error", error));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content flex-col w-full lg:flex-row">
        <div className="lg:w-1/2 flex justify-center lg:mr-16">
          <img className=" lg:w-full md:w-1/2 w-3/4" src={img} alt="" />
        </div>
        <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          {/* form */}
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                className="input input-bordered"
                name="imageUrl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-green-500 hover:bg-green-400 border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="mb-5">
            <GoogleLogin></GoogleLogin>
          </div>
          <p className="text-center">
            Already have an account?
            <Link className="text-green-500 font-bold ml-2" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
