import data from "../../Data/dukungan.json"

const DukunganCard1 = ( {id, image, title, height, width} ) => {
    return (
      <div className={`shadow-xl ${width} ${height} flex flex-col pb-3 md:rounded-xl rounded-none overflow-hidden`}id={id}>
      <div className="bg-slate-200 w-full flex justify-center items-center h-5/6">
        <img src={image} className="w-full h-full" />
      </div>
      <div className="px-4 h-1/6 pt-2 flex items-center">
        <p className="md:text-3xl text-lg font-bold">
          {title}
        </p>
      </div>
      </div>
    )
}

export default DukunganCard1