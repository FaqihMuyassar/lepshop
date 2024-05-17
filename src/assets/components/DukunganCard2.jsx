import data from "../../Data/dukungan.json"

const DukunganCard2 = ( {id,image,title,height, width} ) => {
    return (
        <div className={`shadow-xl ${width} ${height} flex flex-col pb-3 md:rounded-xl rounded-none overflow-hidden`}id={id}>
            <div className="bg-slate-200 w-full flex justify-center items-center h-3/4" id={id}>
          <img src={image} className="w-full h-full" />
        </div>
        <div className="px-4 h-1/4">
          <p className="md:text-lg text-sm font-bold">
            {title}
          </p>
        </div>
        </div>
    )
}

export default DukunganCard2