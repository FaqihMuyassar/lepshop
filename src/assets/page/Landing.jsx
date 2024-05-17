import React from "react";
import { Navigasibar } from "../components/Navigasibar";
import { Banner } from "../components/Banner";
import { BrandCard } from "../components/BrandCard";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Adv } from "../components/Adv";
import data from "../../Data/data.json";
import adv from "../../Data/adv.json";
import brand from "../../Data/brand.json";
import { Adv2 } from "../components/Adv2";
import Link from "next/link";
import {useRouter} from "next/router"

const Landing = () => {
  const router = useRouter();
  const filterData = (input) => {
    if (input.target.value === data.title) {
      data.map((index, id) => {
        <Card key={index} id={id}/>
      })
    }
  }
  const search = (e) => {
    const filter = data.filter((item) => item.keyOfSearch == e.target.value);
    if (filter.length > 0) {
      router.push('/search');
    }
  }
  return (
    <>
      <div className="min-h-screen">
        <Navigasibar funcHandle={search}/>
        <Banner />
        <div className="pb-4 flex flex-col gap-5 pt-12">
          <div className="mx-auto flex justify-center items-center md:gap-[1040px] gap-48">
            <h2 className="text-2xl py-6 font-bold">For You</h2>
            <Link href='/product' className="text-base">Tampilkan Semua</Link>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 md:gap-8 gap-4 mx-auto">
            {data.slice(0,10).map((items, index) => {
              return <Card key={index} {...items} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-12">
        <div className="mx-auto flex justify-center items-center md:gap-[1050px] gap-56">
            <h2 className="text-2xl py-6 font-bold">News</h2>
            <Link href='/news' className="text-base ">Tampilkan Semua</Link>
          </div>
          <div className="flex md:flex-row flex-col h-full md:gap-12 gap-6 mx-auto">
            <div className="md:w-2/3 w-full h-full ">
              <Adv2
                id={1}
                title={
                  "Lenovo Hadirkan Laptop Untuk Kelas Bisnis Terbaru Yaitu ThinkPad L dan X13"
                }
                image={"/img/adv1.png"}
                date={"14/02/24"}
                width={"md:w-[800px] w-[410px]"}
                height={"md:h-[560px] h-80"}
              />
            </div>
            <div className="md:w-1/3 h-1/2 flex md:flex-col flex-row w-full gap-6">
              <Adv
                id={2}
                title={"Asus Luncurkan dua leptop gaming layar OLED terbaru"}
                image={"/img/adv2.png"}
                date={"14/02/24"}
                width={"md:w-96 w-48"}
                height={"md:h-full h-36"}
              />
              <Adv
                id={3}
                title={
                  "Xiaomi Redmi G Pro dibanderol dibawah 20 juta, ini spesifikasinya"
                }
                image={"/img/adv3.png"}
                date={"14/02/24"}
                width={"md:w-96 w-48"}
                height={"md:h-full h-36"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-12 pb-24">
          <h2 className="py-6 font-bold text-2xl">Our Brand Partner</h2>
          <div className="grid md:grid-cols-7 grid-cols-4 md:gap-6 gap-2 pb-12 ">
            {brand.map((items, index) => {
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
