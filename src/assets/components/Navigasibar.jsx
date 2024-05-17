import { MdDarkMode } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import data from "../../Data/data.json"
import { IoMenu } from "react-icons/io5";
import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa";



export const Navigasibar = ({funcHandle}) => {
  return (
    <>
      <div className="flex justify-between md:items-center py-4 px-8 md:px-20 bg-white h-20">
        <div id="logo">
          <a href="/" className="text-3xl font-bold">
            <Image src="/img/logo.png" width={50} height={50}/>
          </a>
        </div>
        <div>
          <IoMenu size={32} className="mt-1 md:hidden block"/>
        </div>
        <div className="md:block hidden">
          <nav className="flex gap-6 font-semibold">
            <a className="cursor-pointer" href="/product">Produk</a>
            <a className="cursor-pointer" href="/news">News</a>
            <a className="cursor-pointer" href="/dukungan">Dukungan</a>
          </nav>
        </div>
        <div className="hidden md:block">
          <div className="flex">
            <input
              type="text"
              className="outline outline-slate-300 outline-1 rounded-md text-sm px-2 py-2 w-[1080px]"
              placeholder="Mau cari apa..."
              onChange={funcHandle} 
            />
            <CiSearch
              size={24}
              className="translate-x-[-36px] translate-y-[6px] text-slate-400"
            />
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center justify-center gap-4">
            <div>
              <button className="rounded-full w-10 h-10 flex items-center justify-center">
                <MdDarkMode size={28} />
              </button>
            </div>
            <div>
              <a className="rounded-full w-10 h-10 flex items-center justify-center" href="/cart">
                <FaShoppingCart size={24} />
              </a>
            </div>
            <div>
              <button className="rounded-full w-10 h-10 flex items-center justify-center">
                <FaUser size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

