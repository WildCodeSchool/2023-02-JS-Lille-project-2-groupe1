import React from "react";
import Stars from "../Stars/Stars";

/* eslint-disable no-param-reassign */
function CardHouseware({ note, houseware, handleAddArticle }) {
  return (
    <div className="carte">
      <h5>name</h5>
      <h6> price: </h6>
      <p>image</p>
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
