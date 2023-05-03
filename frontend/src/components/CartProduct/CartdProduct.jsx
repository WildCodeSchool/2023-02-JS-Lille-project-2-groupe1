import React from "react";
import Stars from "../Stars/Stars";


function CardProduct({ note, Product, handleAddArticle, articlesInCart }) {
  const alreadyInCart = articlesInCart.find(
    (articleInCart) => articleInCart.id === Product.id
  );


  return (
    <div className="carte">
      <h5>{Product.name}</h5>
      <h5>price : {Product.buy_price}</h5>

      <img src={Product.image} alt={Product.name} />

      <Stars note={note} />
      <button
        type="button"
        onClick={() => handleAddArticle(Product)}
        className={alreadyInCart ? "inCartBtn" : "notInCartBtn"}

      >
        Ajouter
      </button>
    </div>
  );
}

export default CardProduct;
