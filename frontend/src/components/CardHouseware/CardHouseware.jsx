import React from "react";
import Stars from "../Stars/Stars";

/* eslint-disable no-param-reassign */
function CardHouseware({ note, houseware, handleAddArticle }) {
  return (
    <div className="carte">
      <h5>{houseware.name}</h5>
      <h5>price : {houseware.buy_price}</h5>
      <img src={houseware.image} alt={houseware.name} />
      <Stars note={note} />
      <button
        type="button"
        onClick={() => handleAddArticle(houseware)}
        className="addToCartBtn"
      >
        Ajouter
      </button>
    </div>
  );
}
/* eslint-enable no-param-reassign */
export default CardHouseware;
