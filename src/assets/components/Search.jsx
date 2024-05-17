import React from "react";
import data from "../../Data/data.json";
import { useRouter } from "next/router";
import { useState } from "react"; 
import { Navigasibar } from "./Navigasibar";
import { Card } from "./Card";

const Dynamic = () => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState();

  const search = (e) => {
    if (e.key === "Enter") {
      const filterResult = data.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredData(filterResult);
      router.push(`/search?query=${e.target.value}`);
      console.log(filterResult);
    }
  };

  return (
    <>
      <Navigasibar funcHandle={(e) => search(e)} />
      <section>
        {/* {filteredData.map((index, items) => {
          (<Card key={index} id={items}/>)
        })} */}
      </section>
    </>
  );
};

export default Dynamic;
