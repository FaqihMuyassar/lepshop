import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSign = ({ role }) => {
  const notify = () => toast("Wow so easy!");
  const [login, setLogin] = useState(false);
  useEffect(() => {
    handleLocalstorage();
  });

  const handleLocalstorage = () => {
    const data = sessionStorage.getItem("isLogin");
    if (!!data === false) {
      return sessionStorage.setItem("isLogin", JSON.stringify(login));
    } else {
      return sessionStorage.setItem("isLogin", JSON.stringify(login));
    }
  };

  return (
    <>
      <div className="hero h-screen bg-greytua">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body w-96" action={"/lepshop/"} method="post">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">
                  {role === "login" ? "Login Now!" : "Register Now!"}
                </h1>
                <p className="py-6">
                  {role === "login"
                    ? "Please insert your account"
                    : "Please insert your details brody"}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="flex justify-between items-center mb-8">
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                  <label className="label">
                    <Link
                      href={role === "login" ? "/sign/register" : "/sign/login"}
                      className="label-text-alt link link-hover"
                    >
                      {role === "login"
                        ? "Don't have an account?"
                        : "Already have an account"}
                    </Link>
                  </label>
                </div>
                <label>
                  <input type="checkbox" />
                  {" "}  Remember me
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit" 
                  onClick={role === "login" ? () => setLogin(true) : alert("ur acc has been created !!")}
                  className="btn btn-primary"
                >
                  {role === "login" ? "Login" : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSign;
