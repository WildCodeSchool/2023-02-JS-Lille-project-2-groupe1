import { useEffect, useState } from "react";
import CardProduct from "@components/CartProduct/CartdProduct";
import { getItems } from "../services/api-calls";


function FournitureList({ handleAddArticle, articlesInCart }) {

  const [fourniture, setFourniture] = useState([]);
  useEffect(() => {
    getItems().then((itemsData) => {
      setFourniture(
        itemsData
          .map((item) => ({
            ...item,
            note: Math.floor(Math.random() * 2) + 3,
          }))
          .filter((item) => item.category === "furniture")
      );
    });
  }, []);
  return (
    <div className="cart-container">
      {fourniture.map((Fourniture) => (
        <CardProduct
          articlesInCart={articlesInCart}

          key={Fourniture.id}
          note={Fourniture.note}
          Product={Fourniture}
          handleAddArticle={handleAddArticle}
        />
      ))}
    </div>
  );
}
export default FournitureList;
