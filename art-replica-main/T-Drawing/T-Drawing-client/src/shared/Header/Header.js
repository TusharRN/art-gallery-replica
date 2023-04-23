import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/t-drawing-logo.png";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut();
  };
  let activeStyle = {
    backgroundColor: "#4ADE80",
    color: "black",
  };
  const menuOptions = (
    <>
      <li className="font-semibold ">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="hover:bg-green-400 lg:mr-2"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="hover:bg-green-400 lg:mr-2"
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="hover:bg-green-400"
          to="/services"
        >
          Services
        </NavLink>
        {user?.uid && (
          <>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="hover:bg-green-400 lg:mx-2"
              to="/myReviews"
            >
              My Reviews
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="hover:bg-green-400"
              to="/addService"
            >
              Add Service
            </NavLink>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar h-20 pt-14 pb-14 bg-base-100 border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuOptions}
            </ul>
          </div>
          <Link to="/">
            <div className="flex flex-col items-center">
              <img className="w-1/2" src={logo} alt="" />
              <h2 className="font-bold">T-Drawing</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuOptions}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <div className="flex items-center">
              <div
                className="tooltip tooltip-bottom pt-1"
                data-tip={user?.displayName}
              >
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>
              </div>
              <Link to="/login">
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline text-green-500 hover:bg-green-500 hover:border-none ml-3"
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center">
              <FaUser></FaUser>
              <Link to="/login">
                <button className="btn btn-outline text-green-500 hover:bg-green-400 hover:border-none ml-3">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
