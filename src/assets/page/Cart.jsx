import { Navigasibar } from "../components/Navigasibar";
import { Footer } from "../components/Footer";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Keranjang = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 43930400;
  const totalPrice = price * quantity;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <Navigasibar />
      <div className="md:pt-24 pt-12 pb-64 md:px-64 px-4">
        <div className="w-full border border-black md:py-4 py-2 px-4 rounded-md">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="h-6 w-6 md:ml-4 ml-0" />
            <div className="h-24 w-[1px] md:mx-4 bg-black"></div>
            <Image width={10} height={10}
              src="/lepshop/img/Dell-XPS-13-Plus.png"
              className="md:w-36 w-24 bg-slate-200 p-4 rounded-sm"
              alt="Dell XPS 13 Plus"
            />
            <div className="flex w-full justify-between">
              <div className="flex flex-col md:flex-row md:gap-[550px]">
                <div className="md:w-3/5 w-full">
                  <h1 className="text-2xl font-semibold">Dell XPS 13 Plus</h1>
                  <p className="md:text-base hidden md:block">
                    Intel® Core™ i7-1260P / Intel® Iris Xe Graphics
                  </p>
                  <p className="md:text-base hidden md:block">16 GB / 1 TB</p>
                </div>
                <div className="flex flex-col items-end md:px-8 md:gap-6 gap-2 md:w-1/2 w-full">
                  <h1 className="md:font-semibold font-normal md:text-2xl text-xl">
                    Rp. {price.toLocaleString("id-ID")}
                  </h1>
                  <div className="flex items-end">
                    <button
                      className="text-xl border border-black w-6 h-6 flex justify-center items-center"
                      onClick={handleDecrease}
                    >
                      <FaMinus size={12} />
                    </button>
                    <div className="w-6 h-6 border border-black text-center">
                      <p>{quantity}</p>
                    </div>
                    <button
                      className="text-xl border border-black w-6 h-6 flex justify-center items-center"
                      onClick={handleIncrease}
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-24 pt-12 pb-12 md:px-64 px-4">
        <div className=" w-full md:h-32 h-20 outline outline-1 rounded-md flex justify-between items-center md:py-4 py-2 px-6 gap-24">
          <div>
            <h1 className="md:text-xl text-lg font-semibold">Total</h1>
            <p className="md:text-2xl text-xl font-semibold">
              Rp. {totalPrice.toLocaleString("id-ID")}
            </p>
          </div>
          <div>
            <Link href={"/checkout"}className="bg-black text-white py-2 md:px-6 px-4 md:text-lg text-base rounded-md">
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Keranjang;