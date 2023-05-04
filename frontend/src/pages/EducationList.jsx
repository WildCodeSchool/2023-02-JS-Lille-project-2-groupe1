import { useEffect, useState } from "react";
import CardProduct from "@components/CartProduct/CartdProduct";
import { getItems } from "../services/api-calls";

function EducationList({ handleAddArticle, articlesInCart }) {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    getItems().then((itemsData) => {
      setEducation(
        itemsData
          .map((item) => ({
            ...item,
            note: Math.floor(Math.random() * 2) + 3,
          }))
          .filter((item) => item.category === "education")
      );
    });
  }, []);
  return (
    <div className="cart-container">
      {education.map((Education) => (
        <CardProduct
          articlesInCart={articlesInCart}
          key={Education.id}
          note={Education.note}
          Product={Education}
          handleAddArticle={handleAddArticle}
        />
      ))}
    </div>
  );
}
export default EducationList;
