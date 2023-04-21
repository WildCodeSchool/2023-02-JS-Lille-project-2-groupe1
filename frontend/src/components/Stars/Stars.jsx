import { Rating } from "react-simple-star-rating";

function Stars({ note }) {
  // Catch Rating value

  return <Rating readonly size={15} initialValue={note} transition />;
}

export default Stars;
