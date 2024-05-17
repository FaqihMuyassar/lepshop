import data from "../../Data/data.json";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Link from "next/link";



export const Card = ({
  id,
  title,
  Specification,
  price,
  image,
  location,
  rating,
  sold,
}) => {
  return (
    <Link href={`/detail/${id}`}>
      <div
        className="shadow-xl md:w-56 w-48 md:h-full h-80 pb-3 rounded-xl overflow-hidden"
        id={id}
      >
        <div className="bg-slate-200 flex justify-center items-center py-2 h-1/2">
          <img src={image} className="md:w-44 w-32" />
        </div>
        <div className="h-1/2 flex flex-col justify-between md:pl-4 px-3 md:pt-4 pt-2">
          <div className="">
            <div>
              <h2 className="text-lg font-bold">{title}</h2>
            </div>
            <div>
              <p className="text-xs text-slate-400 md:pt-2 pt-1 ">{Specification.All}</p>
            </div>
          </div>
          <div className="md:pt-8 pt-2 ">
            <h3 className="md:text-xl text-lg font-bold md:pb-2 pb-0 ">{price}</h3>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-1">
            <FaLocationDot size={12}/>
              <p className="text-sm text-slate-400">{location}</p>
            </div>
            <div className="flex">

            <div className="flex items-center gap-1">
            <FaStar size={12} color="#FFC700"/>
              <p className="text-sm text-slate-400">{rating} | {sold}</p>
            </div>
          </div>
            </div>
        </div>
      </div>
    </Link>
  );
};
