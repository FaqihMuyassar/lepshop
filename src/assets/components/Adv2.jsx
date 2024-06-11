import data from "../../Data/adv.json"
export const Adv2 = ( {id, title, date, image, height, width} ) => {
    return (
        <div className={`shadow-xl ${width} ${height} flex flex-col pb-3 md:rounded-xl rounded-none overflow-hidden`}id={id}>
        <div className="bg-slate-200 w-full flex justify-center items-center h-4/6">
          <img src={image} className="w-full h-full" />
        </div>
        <div className="px-4 h-2/6 pt-2">
        <p className="text-slate-400 md:text-lg text-xs dark:text-white">{date}</p>
          <p className="md:text-3xl text-lg font-bold md:py-4  dark:text-white">
            {title}
          </p>
          <p className="md:text-lg text-xs text-slate-400 dark:text-white">
          Lenovo meluncurkan lini Laptop untuk bisnis terbarunya dengan seri ThinkPad L dan X13. Perangkat ini merupakan bukti komitmen perusahaan terhadap inovasi dan keberlanjutan....
          </p>
        </div>
      </div>
    )
}