import { useEffect, useState } from "react";
import CardProduct from "@components/CartProduct/CartdProduct";
import { getItems } from "../services/api-calls";


function RecreationList({ handleAddArticle, articlesInCart }) {

  const [recreation, setRecreation] = useState([]);
  useEffect(() => {
    getItems().then((itemsData) => {
      setRecreation(
        itemsData
          .map((item) => ({
            ...item,
            note: Math.floor(Math.random() * 2) + 3,
          }))
          .filter((item) => item.category === "recreation")
      );
    });
  }, []);
  return (
    <div className="cart-container">
      {recreation.map((Recreation) => (
        <CardProduct

          articlesInCart={articlesInCart}

          key={Recreation.id}
          note={Recreation.note}
          Product={Recreation}
          handleAddArticle={handleAddArticle}
        />
      ))}
    </div>
  );
}
export default RecreationList;
