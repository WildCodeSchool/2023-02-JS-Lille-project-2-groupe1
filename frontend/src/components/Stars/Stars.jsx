import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Stars({ note }) {
  const [rating, setRating] = useState(); // initial rating value

  // Catch Rating value

  return <Rating readonly size={15} initialValue={note} transition />;
}

export default Stars;
