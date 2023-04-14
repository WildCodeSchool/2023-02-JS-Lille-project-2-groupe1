import CartItem from "./CartItem";
import SCart from "./CartStyle";

// Initialiser le bouton de fermeture à false, le faire passer à true au click.
// Dans App, si false, le panier s'affiche, si true, le panier se ferme.

function Cart() {
  //   const [closeCartBtn, setCloseCartBtn] = useState();

  return (
    <SCart>
      <div>
        <h1>Panier de l'utilisateur Machin</h1>
        <button type="button" id="closeBtn">
          X
        </button>
        <div className="basket">
          <CartItem />
          <CartItem />
          <CartItem />

          {/* Calcul du total */}
          <button type="button">Valider la commande</button>
        </div>
      </div>
    </SCart>
  );
}

export default Cart;
