import Link from "next/link";
import { useState,useEffect } from "react";

const FormSign = ({ role }) => {
  const [login, setLogin]  = useState(false);
  console.log(login);
useEffect(() => {
  handleLocalstorage()
})

const  handleLocalstorage = () => {
  const data = sessionStorage.getItem("isLogin")
  if(!!data === false) {
    return sessionStorage.setItem("isLogin", JSON.stringify(login))
  } else {
    return sessionStorage.setItem("isLogin", JSON.stringify(login))
  }
}

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body w-96" action={"/"}>
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
              <div className="form-control mt-6">
                <button type="submit" onClick={role === "login" ? () => setLogin(true) : null} className="btn btn-primary">
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
