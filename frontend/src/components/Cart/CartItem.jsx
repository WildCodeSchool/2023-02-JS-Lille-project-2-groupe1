import SCartItem from "./CartItemStyle";

function CartItem() {
  return (
    <SCartItem>
      <div>
        {/* Image */}
        <img src="https://placekitten.com/100/100" />

        {/* Titre */}
        <p>Petit chat mignon</p>

        {/* Prix */}
        <p>52 $$$$</p>

        {/* Quantité */}
        <label htmlFor="chatons">Quantité</label>
        <input id="chatons" type="number" name="chatons" defaultValue="1" />

        <button type="button"> X </button>
      </div>
    </SCartItem>
  );
}

export default CartItem;
