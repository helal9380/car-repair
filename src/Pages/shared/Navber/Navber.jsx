/** @format */

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navber = () => {
  const { user, loading, logOut } = useAuth();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    )
  }
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <a href="#service">Service</a>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      {user ? (
        ""
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );
  
  const handleLogOut = () => {
    logOut()
    .then(() => {
      console.log('successfully log out');
      location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className=" font-semibold text-3xl">
          Car Repair
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl font-semibold menu-horizontal px-1 space-x-2">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {user && (
          <button onClick={handleLogOut} className="btn font-semibold bg-[#FF3811] text-white hover:bg-[#c53b20]">
            Logout
          </button>
        )}
        <button className="btn font-semibold hover:border-[#FF3811] hover:bg-[#FF3811] btn-outline border-[#FF3811]">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Navber;
