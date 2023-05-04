import React from "react";
import CartItem from "./CartItem";

function Cart({ children, shown, close, articles, setArticles }) {
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
        <CartItem articles={articles} setArticles={setArticles} />
      </div>

      {children}
    </div>
  ) : null;
}

export default Cart;
