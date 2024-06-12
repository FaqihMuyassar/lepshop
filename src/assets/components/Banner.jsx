import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image alt="image" width={10} height={10}
            src="/lepshop/img/banner1.png"
            className="w-full h-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image alt="image" width={10} height={10}
            src="/lepshop/img/banner2.png"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 relative bottom-12">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </>
  );
};
