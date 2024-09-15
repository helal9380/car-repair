/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const links = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
      <Link to={'/service'}>Service</Link>
      </li>
      <li>
      <Link to={'/about'}>About</Link>
      </li>
      <li>
      <Link to={'/blog'}>blog</Link>
      </li>
      <li>
      <Link to={'/contact'}>Contact</Link>
      </li>
    </>
  );
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
        <Link to={'/'} className=" font-semibold text-3xl">Car Repair</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl font-semibold menu-horizontal px-1 space-x-2">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn font-semibold hover:border-[#FF3811] hover:bg-[#FF3811] btn-outline border-[#FF3811]">Appointment</button>
      </div>
    </div>
  );
};

export default Navber;
