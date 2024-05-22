import { Navigasibar } from "../components/Navigasibar";
import { Footer } from "../components/Footer";
import data from "../../Data/data.json";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { constants } from "buffer";

const Keranjang = () => {
  return (
    <>
      <Navigasibar />
      <div className="md:pt-24 pt-12 pb-64 md:px-64 px-4">
        <div className="w-full border border-black md:py-4 py-2 px-4 rounded-md">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="h-6 w-6 md:ml-4 ml-0"></input>
            <div className="h-24 w-[1px] md:mx-4 bg-black"></div>
            <img
              src="/img/Dell-XPS-13-Plus.png"
              className="md:w-36 w-24 bg-slate-200 p-4 rounded-sm"
            ></img>
            <div className="flex w-full justify-between">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 w-full">
                <h1 className="text-2xl font-semibold">Dell XPS 13 Plus</h1>
                <p className="md:text-base hidden md:block">Intel® Core™ i7-1260P / Intel® Iris Xe Graphics</p>
                <p className="md:text-base hidden md:block">16 Gb / 1 Tb</p>
              </div>
              <div className="flex flex-col items-end md:px-8 md:gap-6 gap-2">
                <h1 className="md:font-semibold font-normal md:text-2xl text-xl">Rp. 10.999.000</h1>
                <div className="flex items-end">
                  <button className="text-xl border border-black w-6 h-6 flex justify-center items-center">
                    <FaPlus size={12} />
                  </button>
                  <div className="w-6 h-6 border border-black text-center">
                    <p>1</p>
                  </div>
                  <button className="text-xl border border-black w-6 h-6 flex justify-center items-center">
                    <FaMinus size={12} />
                  </button>
                </div>
            </div>
                <></>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-24 pt-12 pb-12 md:px-64 px-4">
        <div className="bg-white w-full md:h-32 h-20 shadow-lg flex justify-between items-center md:py-4 py-2 px-6 gap-24">
          <div className="">
            <h1 className="md:text-xl text-lg font-semibold">Total</h1>
            <p className="md:text-2xl text-xl text-black font-semibold">Rp. 10.999.000</p>
          </div>
          <div>
            <button className="bg-black text-white py-2 md:px-6 px-4 md:text-lg text-base rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Keranjang;
