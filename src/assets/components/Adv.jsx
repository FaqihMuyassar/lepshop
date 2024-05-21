import data from "../../Data/adv.json"
import MyPopup from "./MyPopup"
export const Adv = ( {id, title, date, image, height, width} ) => {
    return (
        <div onClick={MyPopup} className={`shadow-xl ${width} ${height} flex flex-col pb-3 md:rounded-xl rounded-none overflow-hidden `}id={id}>
        <div className="bg-slate-200 w-full flex justify-center items-center h-3/4">
          <img src={image} className="w-full h-full" />
        </div>
        <div className="px-4 h-1/4 pt-2">
        <p className="text-slate-400 text-xs">{date}</p>
          <p className="md:text-lg text-sm font-bold ">
            {title}
          </p>
        </div>
      </div>
    )
}