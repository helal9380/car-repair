/** @format */

import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
  const { createUser,updateUser } = useContext(AuthContext);
  const loginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        updateUser(name)
        .then(() => {
          console.log('Name updated');
        })
        .catch(err => console.log('photo do not updated',err))
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2 mr-8">
          <img
            src={img}
            alt=""
          />
        </div>
        <div className="card w-1/2 shrink-0 shadow-2xl">
          <form
            onSubmit={loginForm}
            className="card-body">
            <h2 className="text-center font-semibold text-3xl">
              Register Now!
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name.."
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <p>
                Have an account? Please{" "}
                <Link to={"/login"}>
                  <span className="font-bold text-[#FF3811]">Login</span>
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] hover:bg-[#df3f1f] text-white font-semibold text-lg">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
