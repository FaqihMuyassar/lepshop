import React from "react";
import data from "../../Data/data.json";
import { useRouter } from "next/router";
import { Navigasibar } from "../../assets/components/Navigasibar";
import { Footer } from "../../assets/components/Footer";

const Dynamic = ({addToCart}) => {
    const { query } = useRouter();
    console.log(query.slug);
    const filterData = data.filter((item) => item.id == query.id); 
    console.log(filterData); 
    return (
        <main>
            {filterData.map((item, index) => (
        <div key={index}>
          <Navigasibar />
          <div className="flex gap-24 h-full px-56 py-12">
            <div className="w-1/2 flex justify-center items-center">
              <img src={item.image} className="bg-cover" />
            </div>
            <div className="w-1/2 ml-24">
              <h1 className="text-4xl font-semibold pb-2">{item.title}</h1>
              <p className="text-slate-500 text-lg w-3/4">
                Bring ideas to life at a blistering pace with our most powerful
                13″ laptop—featuring 12th Gen Intel® Core™ processors and
                innovative, modern design.
              </p>
              <div className="flex gap-4 pt-16">
                <button className="border border-black rounded text-center w-56 py-3 text-lg">
                  16 GB / 512 GB
                </button>
                <button className="border border-black rounded text-center w-56 py-3 text-lg">
                  16 GB / 1 TB
                </button>
              </div>
              <h1 className="text-4xl font-semibold py-8">{item.price}</h1>
              <div className="flex gap-4">
                <button className="bg-black rounded text-white text-center w-56 py-3 text-lg" onClick={() => addToCart(id)}>
                  Add to Cart
                </button>
                <button className="bg-black rounded text-white text-center w-56 py-3 text-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="pb-24 pt-12 px-56">
            <h1 className="font-semibold text-4xl">Specification</h1>
            <div className="flex gap-24 pt-8">
              <div className="w-1/2">
                <div>
                  <h2 className="font-semibold text-xl">Processor</h2>
                  <p className="text-slate-500 text-lg">{item.Specification.processor}</p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl">Operating System</h2>
                  <p className="text-slate-500 text-lg">
                    {item.Specification.operatingSystem}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl">Video Card</h2>
                  <p className="text-slate-500 text-lg">
                    {item.Specification.videoGrapich}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl">Display</h2>
                  <p className="text-slate-500 text-lg">
                    {item.Specification.display}
                  </p>
                </div>
              </div>
              <div className="w-1/2 ml-24">
                <div>
                  <div>
                    <h2 className="font-semibold text-xl">Memory</h2>
                    <p className="text-slate-500 text-lg">
                      {item.Specification.memory}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">Storage</h2>
                    <p className="text-slate-500 text-lg w-96">
                      {item.Specification.storage}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">Color</h2>
                    <p className="text-slate-500 text-lg">{item.Specification.color}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ))}
        </main>
    )
}

export default Dynamic