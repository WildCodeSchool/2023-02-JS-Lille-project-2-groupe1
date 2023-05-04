import { useEffect, useState } from "react";
import CardProduct from "@components/CartProduct/CartdProduct";
import { getItems } from "../services/api-calls";


function DecorationList({ handleAddArticle, articlesInCart }) {

  const [decoration, setDecoration] = useState([]);
  useEffect(() => {
    getItems().then((itemsData) => {
      setDecoration(
        itemsData
          .map((item) => ({
            ...item,
            note: Math.floor(Math.random() * 2) + 3,
          }))
          .filter((item) => item.category === "decoration")
      );
    });
  }, []);
  return (
    <div className="cart-container">
      {decoration.map((Decoration) => (
        <CardProduct
          articlesInCart={articlesInCart}

          key={Decoration.id}
          note={Decoration.note}
          Product={Decoration}
          handleAddArticle={handleAddArticle}
        />
      ))}
    </div>
  );
}
export default DecorationList;
