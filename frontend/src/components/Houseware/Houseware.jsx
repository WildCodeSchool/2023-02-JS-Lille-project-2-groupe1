import React from "react";
import { v4 as uuidv4 } from "uuid";
import Stars from "../Stars/Stars";

/* eslint-disable no-param-reassign */
function Houseware({ note, houseware_2, houseware, handleAddArticle }) {
  houseware.id = uuidv4();

  // console.log(houseware_2);

  return (
    <div className="carte">
      <h5>{houseware.name["name-EUfr"]}</h5>

      <h6> price: {houseware["sell-price"]},00$</h6>

      <img src={houseware.image_uri} alt="houseware illustration" />

      <Stars note={note} />
      <button
        
        onClick={() => handleAddArticle(houseware)}
        className="addToCartBtn"
      >
        Ajouter
      </button>
      
    </div>
    
  );
}
/* eslint-enable no-param-reassign */
export default Houseware;
