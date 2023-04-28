import React, { useEffect, useState } from "react";
import CardHouseware from "../components/CardHouseware/CardHouseware";
import { getItems } from "../services/api-calls";

function HousewareList({ handleAddArticle }) {
  const [housewares, setHousewares] = useState([]);

  useEffect(() => {
    getItems().then((HousewareData) => {
      setHousewares(
        HousewareData.map((houseware) => ({
          ...houseware,
          note: Math.floor(Math.random() * 2) + 3,
        })).slice(12, 17)
      );
    });
  }, []);

  return (
    <div className="cart-container">
      {housewares.map((houseware) => (
        <CardHouseware
          key={houseware.id}
          note={houseware.note}
          houseware={houseware}
          handleAddArticle={handleAddArticle}
        />
      ))}
    </div>
  );
}

export default HousewareList;
