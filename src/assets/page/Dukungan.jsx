import DukunganCard1 from "../components/DukunganCard1";
import DukunganCard2 from "../components/DukunganCard1";
import { Footer } from "../components/Footer";
import { Navigasibar } from "../components/Navigasibar";

const Dukungan = () => {
  return (
    <div>
      <Navigasibar />
      <div className="flex flex-col">
        <div className="flex md:px-80 w-full py-12 flex-col md:flex-row gap-6 md:gap-0 px-2">
          <div className="md:w-2/3 w-full h-full">
            <DukunganCard1
              id={1}
              title={"Customer Service Online"}
              image={"/img/Customer-Service-Online.png"}
              width={"md:w-[800px] w-[410px]"}
              height={"md:h-[560px] h-80"}
            />
          </div>
          <div className="md:w-1/3 h-1/2 flex md:flex-col flex-row w-full gap-6">
          <DukunganCard2
              id={2}
              title={"Service"}
              image={"/img/Service.png"}
              height={"h-[270px]"}
            />
            <DukunganCard2
              id={3}
              title={"Garansi"}
              image={"/img/Garansi.png"}
              height={"h-[270px]"}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dukungan;
