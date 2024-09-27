/** @format */
import { Link, Navigate, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const loginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result => {
      console.log(result.user);
      navigate('/')
    })
    .catch(err => console.log(err))
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content border  flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src={img}
            alt=""
          />
        </div>
        <div className="card w-1/2 shrink-0 shadow-2xl">
          <form
            onSubmit={loginForm}
            className="card-body">
            <h2 className="text-center font-semibold text-3xl">Log In</h2>
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
                Are you new here?{" "}
                <Link to={"/register"}>
                  <span className="font-bold text-[#FF3811]">Register</span>
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] hover:bg-[#df3f1f] text-white font-semibold text-lg">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
