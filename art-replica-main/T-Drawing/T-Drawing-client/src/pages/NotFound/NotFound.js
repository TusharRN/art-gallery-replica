import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/t-drawing-logo.png";
const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-48'>
      <div className="flex items-center font-extrabold text-9xl">
        <span>4</span>
        <img src={logo} alt="" />
        <span>4</span>
          </div>
          <p className="text-3xl font-bold">Not Found</p>
          <Link to='/' className='text-blue-700'>go back--{`>` }</Link>
    </div>
  );
};

export default NotFound;
