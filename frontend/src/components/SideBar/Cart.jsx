import React from "react";

function Cart({ children, shown, close }) {
  return shown ? (
    <div
      role="presentation"
      className="modal-backdrop"
      onKeyDown={() => close()}
      onClick={(e) => {
        e.preventDefault();
        close();
      }}
    >
      <div
        role="presentation"
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <h1>Je suis un objet dans le panier</h1>

        <button className="cartCloseBtn" type="button" onClick={() => close()}>
          Fermer le panier
        </button>
      </div>

      {children}
    </div>
  ) : null;
}

export default Cart;
