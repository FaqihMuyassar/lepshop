import React from "react";
import { Navigasibar } from "../components/Navigasibar";
import { Banner } from "../components/Banner";
import { BrandCard } from "../components/BrandCard";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Adv } from "../components/Adv";
import white from "../../Data/brandwhite.json";
import BrandData from "../../Data/brand.json";
import Data from "../../Data/data.json";
import { Adv2 } from "../components/Adv2";
import Link from "next/link";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";

const Landing = () => {
  const [isDark, setIsDark] = useState(false);
  function hendle() {
    setIsDark(!isDark)
  }
  console.log(isDark); // Menambahkan console.log untuk memastikan fungsi hendle berjalan dengan baik
  return (
    <>
      <div className="navbar bg-base-100 md:px-24 py-4 dark:bg-grey-500 fixed top-0 w-full z-50">
        <div className="navbar-start">
          <div className="flex gap-12 items-center text-lg font-semibold">
            <Link href={"/"}>
              <Image width={10} height={10} alt="image" src="/lepshop/img/logo.png" className="w-10" />
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
                <label
                  className="cursor-pointer grid place-items-center"
                  onClick={setIsDark}
                >
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
              <label className="cursor-pointer grid place-items-center" onClick={hendle}>
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
                  <Image width={10} height={10} alt="image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="mt-24">
          <Banner />
        </div>
        <div className="pb-4 flex flex-col gap-5 pt-12">
          <div className="mx-auto flex justify-center items-center md:gap-[1040px] gap-48">
            <h2 className="text-2xl py-6 font-bold dark:text-white">For You</h2>
            <Link href="/product" className="text-base dark:text-white">
              Tampilkan Semua
            </Link>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 md:gap-8 gap-4 mx-auto">
            {Data.slice(0, 10).map((items, index) => {
              return <Card key={index} {...items} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-12">
          <div className="mx-auto flex justify-center items-center md:gap-[1050px] gap-56">
            <h2 className="text-2xl py-6 font-bold dark:text-white">News</h2>
            <Link href="/lepshop/news" className="text-base dark:text-white">
              Tampilkan Semua
            </Link>
          </div>
          <div className="flex md:flex-row flex-col h-full md:gap-12 gap-6 mx-auto">
            <div className="md:w-2/3 w-full h-full ">
              <Adv2
                id={1}
                title={
                  "Lenovo Hadirkan Laptop Untuk Kelas Bisnis Terbaru Yaitu ThinkPad L dan X13"
                }
                image={"/lepshop/img/adv1.png"}
                date={"14/02/24"}
                width={"md:w-[800px] w-[410px]"}
                height={"md:h-[560px] h-80"}
              />
            </div>
            <div className="md:w-1/3 h-1/2 flex md:flex-col flex-row w-full gap-6">
              <Adv
                id={2}
                title={"Asus Luncurkan dua leptop gaming layar OLED terbaru"}
                image={"/lepshop/img/adv2.png"}
                date={"14/02/24"}
                width={"md:w-96 w-48"}
                height={"md:h-full h-36"}
              />
              <Adv
                id={3}
                title={
                  "Xiaomi Redmi G Pro dibanderol dibawah 20 juta, ini spesifikasinya"
                }
                image={"/lepshop/img/adv3.png"}
                date={"14/02/24"}
                width={"md:w-96 w-48"}
                height={"md:h-full h-36"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-12 pb-24">
          <h2 className="py-6 font-bold text-2xl dark:text-white">
            Our Brand Partner
          </h2>
          <div className="grid md:grid-cols-7 grid-cols-4 md:gap-6 gap-2 pb-12 ">
            {isDark === false
              ? BrandData.map((items, index) => {
                  return <BrandCard key={index} {...items} />;
                })
              : white.map((items, index) => {
                  return <BrandCard key={index} {...items} />;
                })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
