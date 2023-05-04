import React from "react";
import Stars from "../Stars/Stars";

function CardHouseware({ note, houseware, handleAddArticle, articlesInCart }) {
  const alreadyInCart = articlesInCart.find(
    (articleInCart) => articleInCart.id === houseware.id
  );

  return (
    <div className="carte">
      <h5>{houseware.name}</h5>
      <h5>price : {houseware.buy_price}</h5>

    

      <img src={houseware.image} alt={houseware.name} />


      <Stars note={note} />
      <button
        type="button"
        onClick={() => handleAddArticle(houseware)}
        className={alreadyInCart ? "inCartBtn" : "notInCartBtn"}
      >
        Ajouter
      </button>
    </div>
  );
}
export default CardHouseware;
