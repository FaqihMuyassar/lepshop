import data from "../../Data/dukungan.json";

const DukunganCard1 = ({ id, image, title, height, width }) => {
  return (
    <div
      className={`shadow-xl ${width} ${height} flex flex-col pb-3 md:rounded-xl rounded-none overflow-hidden`}
      id={id}
    >
      <div className="bg-slate-200 w-full flex justify-center items-center h-5/6">
        <img src={image} className="w-full h-full" />
      </div>
      <div className="px-4 h-1/6 pt-2 flex items-center justify-between">
        <p className="md:text-2xl text-lg font-bold py-4">{title}</p>
        <button
          className="btn my-4"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          More
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque. 
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
            
    </div>
  );
};

export default DukunganCard1;
