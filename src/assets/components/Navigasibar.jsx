import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

export const Navigasibar = () => {
  const [isDark, setIsDark] = useState(false);

  function Hendle () {
    setIsDark(!isDark)
    console.log(isDark);
  }
  return (
    <>
      <div className="navbar bg-base-100 md:px-24 py-4 dark:bg-grey-500 fixed top-0 w-full z-50">
        <div className="navbar-start">
          <div className="flex gap-12 items-center text-lg font-semibold">
            <Link href={"/"}>
              <img src="/img/logo.png" className="w-10" />
            </Link>
            <div className="hidden md:block">
              <div className="flex gap-4">
                <Link href={"/product"} className="dark:text-white">
                  Produk
                </Link>
                <Link href={"/news"} className="dark:text-white">
                  Berita
                </Link>
                <Link href={"/dukungan"} className="dark:text-white">
                  Dukungan
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-64 md:w-96 outline outline-1 dark:outline-white dark:text-white"
            />
          </div>
        </div>
        <div className="navbar-end gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-2"
            >
              <li>
                <Link href={"/product"} className="text-xl">
                  Produk
                </Link>
              </li>
              <li>
                <Link href={"/news"} className="text-xl">
                  Berita
                </Link>
              </li>
              <li>
                <Link href={"/dukungan"} className="text-xl">
                  Dukungan
                </Link>
              </li>
              <div className="flex gap-4 items-center justify-start px-3">
                <Link href={"/cart"}>
                  <IoCartOutline size={24} />
                </Link>
                <label className="cursor-pointer grid place-items-center" onClick={setIsDark}>
                  <input
                    type="checkbox"
                    value="dracula"
                    className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                  />
                  <svg
                    className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                    className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
                <div className="avatar">
                  <Link href={"/"} className="w-8 mask mask-circle">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center items-center gap-4">
              <Link href={"/cart"}>
                <IoCartOutline size={32} color="dark:white" />
              </Link>
              <label className="cursor-pointer grid place-items-center">
                <input
                  type="checkbox"
                  value="dracula"
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
              <div className="avatar">
                <Link href={"/"} className="w-10 mask mask-circle">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
