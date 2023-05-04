import { Rating } from "react-simple-star-rating";

function Stars({ note }) {
  return <Rating readonly size={15} initialValue={note} transition />;
}

export default Stars;
