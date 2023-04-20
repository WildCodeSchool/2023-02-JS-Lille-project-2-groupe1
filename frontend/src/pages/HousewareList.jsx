import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Houseware from "../components/Houseware/Houseware";
import { getHouseware } from "../services/api-calls";
import "bootstrap/dist/css/bootstrap.min.css";

function HousewareList({ handleAddArticle }) {
  const [housewares, setHousewares] = useState([]);

  useEffect(() => {
    getHouseware().then((HousewareData) => {
      setHousewares(
        HousewareData.map((houseware) => ({
          ...houseware,
          note: Math.floor(Math.random() * 2) + 3,
          price: Math.floor(Math.random() * 100) + 200,
          id: uuidv4(),
        })).slice(0, 25)
      );
    });
  }, []);

  return (
    <div className="cart-container">
      {housewares.map((houseware) => (
        <Houseware
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
