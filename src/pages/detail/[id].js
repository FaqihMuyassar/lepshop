import React, { useState } from "react";
import data from "../../Data/data.json";
import { useRouter } from "next/router";
import { Navigasibar } from "../../assets/components/Navigasibar";
import { Footer } from "../../assets/components/Footer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Dynamic = ({ addToCart }) => {
  const notify = () => toast.success("Berhasil ditambah ke keranjang!");
  const { query } = useRouter();
  const filterData = data.filter((item) => item.id == query.id);

  return (
    <main>
      {filterData.map((item, index) => (
        <div key={index}>
          <Navigasibar />
          <div className="flex w-full md:gap-24 gap-4 h-full md:px-56 px-4 py-12 md:flex-row flex-col mt-24">
            <div className="md:w-1/2 w-full flex justify-center items-center">
              <img src={item.image} className="bg-cover" />
            </div>
            <div className="md:w-1/2 md:ml-24 ml-0 w-full">
              <h1 className="text-4xl font-semibold pb-2 dark:text-white">{item.title}</h1>
              <p className="text-slate-500 text-lg md:w-3/4 w-full dark:text-white">
                Bring ideas to life at a blistering pace with our most powerful
                13″ laptop—featuring 12th Gen Intel® Core™ processors and
                innovative, modern design.
              </p>
              <div className="flex gap-4 pt-16 ">
                <button className="border border-black rounded text-center w-56 py-3 text-lg dark:text-white ">
                  16 GB / 512 GB
                </button>
                <button className="border border-black rounded text-center w-56 py-3 text-lg dark:text-white">
                  16 GB / 1 TB
                </button>
              </div>
              <h1 className="text-4xl font-semibold py-8 md:pt-12 pt-24 dark:text-white">{item.price}</h1>
              <div className="flex gap-4">
                <button className="bg-black rounded text-white text-center w-56 py-3 text-lg" onClick={notify}>
                  Add to Cart
                </button>
                <a href={"/checkout"} className="bg-black rounded text-white text-center w-56 py-3 text-lg">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="pb-24 pt-12 md:px-56 px-4 w-full">
            <h1 className="font-semibold text-4xl dark:text-white">Specification</h1>
            <div className="flex md:flex-row flex-col md:gap-24 gap-2 pt-8">
              <div className="md:w-1/2 w-full">
                <div>
                  <h2 className="font-semibold text-xl dark:text-white">Processor</h2>
                  <p className="text-slate-500 text-lg dark:text-white" >{item.Specification.processor}</p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl dark:text-white">Operating System</h2>
                  <p className="text-slate-500 text-lg dark:text-white">
                    {item.Specification.operatingSystem}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl dark:text-white">Video Card</h2>
                  <p className="text-slate-500 text-lg dark:text-white">
                    {item.Specification.videoGrapich}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl dark:text-white">Display</h2>
                  <p className="text-slate-500 text-lg dark:text-white">
                    {item.Specification.display}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 w-full md:ml-24 ml-0">
                <div>
                  <div>
                    <h2 className="font-semibold text-xl dark:text-white">Memory</h2>
                    <p className="text-slate-500 text-lg dark:text-white">
                      {item.Specification.memory}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl dark:text-white">Storage</h2>
                    <p className="text-slate-500 text-lg w-96 dark:text-white">
                      {item.Specification.storage}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl dark:text-white">Color</h2>
                    <p className="text-slate-500 text-lg dark:text-white">{item.Specification.color}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ))}
    </main>
  );
};

export default Dynamic;