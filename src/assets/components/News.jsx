import { Footer } from "./Footer";
import { Navigasibar } from "./Navigasibar";
import { Adv } from "./Adv";
import { Adv2 } from "./Adv2";
import { useState } from "react";

const News = () => {
  const [tampilkan, setTampilkan] = useState(false);
  const [content, setContent] = useState(true);
  const [isTiga, setIsTiga] = useState(false);
  const hendle = tampilkan;
  const cntn = document.getElementById("cntn2");
  const btn1 = document.getElementById("btn1");
  function see() {
    setTampilkan(true);
    setIsTiga(!isTiga);
    console.log(isTiga);
    setContent(!content);
  }
  return (
    <div>
      <Navigasibar />
      <div className="flex flex-col py-24">
        {!isTiga ? (
          <div className="flex md:px-80 w-full py-12 flex-col md:flex-row gap-6 md:gap-0 px-2">
            <div className="md:w-2/3 w-full h-full">
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
        ) : (
          <div>
            <div className="flex md:px-80 w-full py-12 flex-col md:flex-row gap-6 md:gap-0 px-2">
              <div className="md:w-2/3 w-full h-full">
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
            <div id="cntn2" className="">
              <div className="flex md:px-80 w-full flex-col md:flex-row gap-6 md:gap-0 px-2">
                <div className="md:w-1/3 h-1/2 flex md:flex-col flex-row w-full gap-6">
                  <Adv
                    id={2}
                    title={
                      "Asus Luncurkan dua leptop gaming layar OLED terbaru"
                    }
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
                <div className="md:w-2/3 w-full h-full">
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
              </div>
            </div>
          </div>
        )}
        <div className="mx-auto mb-12">
          <button
            id="btn1"
            onClick={see}
            className="outline outline-1 dark:border-white rounded-md py-2 md:mt-8 w-64 text-lg font-semibold dark:text-white"
          >
            Tampilkan {content ? "Semua" : "Lebih Sedikit"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
