import { useState, useEffect } from "react";
import ShipListItem from "./ShipListItem";

export default function ShipList() {
  const [ships, setShips] = useState(["shippy"]);

  useEffect(() => {
    let getShips = async () => {
      const response = await fetch("https://swapi.dev/api/starships/");
      const jsonData = await response.json();
      console.log("jsonData", { jsonData });
      // to prove this is how you get name
      // console.log(jsonData.results[0].name);

      setShips(jsonData.results);
      console.log("Ships", ships);
    };
    getShips();
  }, [setShips]);

  return (
    <>
      <h1>Ships to Shop</h1>
      <ul
        style={{
          display: "flex",
          flex: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {ships?.map((ship, index) => {
          return <ShipListItem data={ship} key={index} />;
        })}
      </ul>
    </>
  );
}
