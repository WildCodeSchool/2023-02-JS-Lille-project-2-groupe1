import React from "react";
import { v4 as uuidv4 } from "uuid";
import Stars from "../Stars/Stars";


function Houseware({ note, houseware, handleAddArticle }) {
  houseware.id = uuidv4();
  
  return (
    <div className="carte">
      <h5>{houseware.name["name-EUfr"]}</h5>

      <h6> price: {houseware["sell-price"]},00$</h6>

      <img src={houseware.image_uri} alt="houseware illustration" />

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

export default Houseware;
