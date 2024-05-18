import React from "react";
import { Navigasibar } from "../components/Navigasibar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import data from "../../Data/data.json";
import { useState } from "react";

const Product = () => {
  const [content, setContent] = useState("Semua")
  const hendle = content
  const [tampilkan, setTampilkan] = useState(data.slice(0, 10).map((items, index) => {
    return (<Card key={index} {...items} />)
  }));
  const handle = tampilkan
  const handler = () => {
    if (content === "Semua") {
      setContent("Lebih Sedikit");
      setTampilkan(data.map((items, index) => {
        return <Card key={index} {...items} />;
      }));
    } else {
      setContent("Semua");
      setTampilkan(data.slice(0, 10).map((items, index) => {
        return <Card key={index} {...items} />;
      }));
    }
  };
  return (
    <>
      <Navigasibar />
      <div className="flex md:ml-40 md:flex-row flex-col">
        {/* Ini Buat Sidebar */}
        <div id="sideBar" className="md:w-1/12 w-full ml-4 ">
          <h3 className="text-2xl font-bold pt-12 md:pb-8 pb-4">Filter</h3>
          <div className="flex md:flex-col gap-3">
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="msi">
                <input type="checkbox" className="h-6 w-6" id="msi" />
                <p className="font-semibold text-lg">MSI</p>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="hp">
                <input type="checkbox" className="h-6 w-6" id="hp" />
                <p className="font-semibold text-lg">HP</p>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="asus">
                <input type="checkbox" className="h-6 w-6" id="asus" />
                <p className="font-semibold text-lg">Asus</p>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="dell">
                <input type="checkbox" className="h-6 w-6" id="dell" />
                <p className="font-semibold text-lg">Dell</p>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="lenovo">
                <input type="checkbox" className="h-6 w-6" id="lenovo" />
                <p className="font-semibold text-lg">Lenovo</p>
              </label>
            </div>
          </div>
        </div>
        {/* Ini Buat Container Card */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold md:pt-12 pt-4 md:pb-8 pb-4 ml-3.5 md:ml-24">
            Produk
          </h3>
          <div className="grid md:grid-cols-5 grid-cols-2 md:gap-8 gap-4 mx-auto pb-12 md:ml-24 ml-3.5">
            {handle}
          </div>
          <div className="mx-auto mb-12">
            <button
              className="border border-black rounded-md py-2 w-64 text-lg font-semibold"
              onClick={handler}
            >
              Tampilkan {content}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
