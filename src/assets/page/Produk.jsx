import React from "react";
import { Navigasibar } from "../components/Navigasibar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import data from "../../Data/data.json";
import { useState } from "react";

const Product = () => {
  const handleAddToCart = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    setCart([...cart, selectedItem]);
  };
  const [content, setContent] = useState("Semua");
  const hendle = content;
  const [tampilkan, setTampilkan] = useState(
    data.slice(0, 10).map((items, index) => {
      return <Card key={index} {...items} />;
    })
  );
  const handle = tampilkan;
  const handler = () => {
    if (content === "Semua") {
      setContent("Lebih Sedikit");
      setTampilkan(
        data.map((items, index) => {
          return <Card key={index} {...items} />;
        })
      );
    } else {
      setContent("Semua");
      setTampilkan(
        data.slice(0, 10).map((items, index) => {
          return <Card key={index} {...items} />;
        })
      );
    }
  };
  return (
    <>
      <Navigasibar />
      <div className="flex md:ml-40 md:flex-row flex-col mt-24">
        {/* Ini Buat Sidebar */}
        <div id="sideBar" className="md:w-1/12 w-full ml-4 ">
          <h3 className="text-2xl font-bold pt-12 md:pb-8 pb-4">Filter</h3>
          <div className="hidden md:flex md:flex-col gap-3">
            <div className="text-xl font-bold">Merk</div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="msi">
                <input type="checkbox" className="h-4 w-4" id="msi" />
                <p className="font-semibold text-lg dark:text-white">MSI</p>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="hp">
                <input type="checkbox" className="h-4 w-4" id="hp" />
                <p className="font-semibold text-lg dark:text-white">HP</p>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="asus">
                <input type="checkbox" className="h-4 w-4" id="asus" />
                <p className="font-semibold text-lg dark:text-white">Asus</p>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="dell">
                <input type="checkbox" className="h-4 w-4" id="dell" />
                <p className="font-semibold text-lg dark:text-white">Dell</p>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 mb-4" htmlFor="lenovo">
                <input type="checkbox" className="h-4 w-4" id="lenovo" />
                <p className="font-semibold text-lg dark:text-white">Lenovo</p>
              </label>
            </div>
            <div className="text-xl font-bold">Harga</div>
            <div>
              <label
                className="flex items-center gap-2 mb-4"
                htmlFor="harga 10 jt"
              >
                <input type="checkbox" className="h-4 w-4" id=">10 jt" />
                <p className="font-semibold text-lg dark:text-white">
                  +10 juta
                </p>
              </label>
            </div>
              <label
                className="flex items-center gap-2 mb-4"
                htmlFor="harga 10 jt"
              >
                <input type="checkbox" className="h-4 w-4" id=">10 jt" />
                <p className="font-semibold text-lg dark:text-white">
                  -10 juta
                </p>
              </label>
              <div className="text-xl font-bold">Rating</div>
            <label className="flex items-center gap-2 mb-4" htmlFor="rating">
              <input type="checkbox" className="h-4 w-4" id=">10 jt" />
              <p className="font-semibold text-lg dark:text-white">4.5+</p>
            </label>
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
              className="outline outline-1 dark:border-white rounded-md py-2 w-64 text-lg font-semibold dark:text-white"
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
