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
      <div className="pt-24 pb-64 px-64">
        <div className="w-full border border-black py-4 px-4 rounded-md">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="h-6 w-6 ml-4"></input>
            <div className="h-24 w-[1px] mx-4 bg-black"></div>
            <img
              src="/img/Dell-XPS-13-Plus.png"
              className="w-36 bg-slate-200 p-4 rounded-sm"
            ></img>
            <div className="flex w-full justify-between">
              <div className="w-1/2">
                <h1 className="text-2xl font-semibold">Dell XPS 13 Plus</h1>
                <p>Intel® Core™ i7-1260P / Intel® Iris Xe Graphics</p>
                <p>16 Gb / 1 Tb</p>
              </div>
              <div className="flex flex-col items-end px-8 gap-6">
                <h1 className="font-semibold text-2xl">Rp. 10.999.000</h1>
                <div className="flex">
                  <button className="text-xl border border-black w-6 h-6 flex justify-center items-center">
                  <FaPlus size={12}/>
                  </button>
                  <div className="w-6 h-6 border border-black text-center">
                    <p>1</p>
                  </div>
                  <button className="text-xl border border-black w-6 h-6 flex justify-center items-center">
                  <FaMinus size={12}/>
                  </button>
                </div>
                <></>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 pb-12 px-64">
      <div className="bg-white w-full h-32 shadow-lg flex justify-between items-center py-4 px-6">
          <div className="">
            <h1 className="text-xl font-semibold">Total</h1>
            <p className="text-2xl font-semibold">Rp. 10.999.000</p>
          </div>
          <div>
            <button className="bg-black text-white py-2 px-6 text-lg rounded-md">Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Keranjang;
