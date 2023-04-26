import React, { useEffect, useState } from "react";
import CardHouseware from "../components/CardHouseware/CardHouseware";
import { getHouseware } from "../services/api-calls";

function HousewareList({ handleAddArticle }) {
  const [housewares, setHousewares] = useState([]);

  useEffect(() => {
    getHouseware().then((HousewareData) => {
      setHousewares(
        HousewareData.map((houseware) => ({
          ...houseware,
          note: Math.floor(Math.random() * 2) + 3,
        })).slice(0, 25)
      );
    });
  }, []);

  return (
    <div className="cart-container">
      {housewares.map((houseware) => (
        <CardHouseware
          key={houseware.id}
          note={houseware.note}
          houseware={houseware[0]}
          houseware_2={houseware}
          handleAddArticle={handleAddArticle}
        />
      ))}
    </div>
  );
}

export default HousewareList;
