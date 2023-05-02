import { useEffect, useState } from "react";
import CardProduct from "@components/CartProduct/CartdProduct";
import { getItems } from "../services/api-calls";

function OutilsList({ handleAddArticle }) {
  const [outils, setOutils] = useState([]);
  useEffect(() => {
    getItems().then((itemsData) => {
      setOutils(
        itemsData
          .map((item) => ({
            ...item,
            note: Math.floor(Math.random() * 2) + 3,
          }))
          .filter((item) => item.category === "tools")
      );
    });
  }, []);
  return (
    <div className="cart-container">
      {outils.map((Outils) => (
        <CardProduct
          key={Outils.id}
          note={Outils.note}
          Product={Outils}
          handleAddArticle={handleAddArticle}
        />
      ))}
    </div>
  );
}
export default OutilsList;
