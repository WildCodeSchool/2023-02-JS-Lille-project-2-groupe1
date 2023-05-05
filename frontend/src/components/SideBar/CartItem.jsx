import { useState } from "react";

function CartItem({ articles }) {
  const [totalValue, setTotalValue] = useState(
    articles.reduce(
      (accumulator, currentItem) => accumulator + currentItem.buy_price,
      0
    )
  );

  return (
    <div className="containerCart">
      <h2 className="total-title">Total du panier : {totalValue} 🔔</h2>

      <div className="container-delete-refuse">
        <button type="button" className="delete-button">
          Vider le panier
        </button>

        <div className="delete-refuse">
          TOM NOOK IL A DIT FAIT PETER LES CLOCHETTES MAZAFAKA
        </div>
      </div>

      {articles?.map((article) => {
        const [totalPriceMultipleItems, setTotalPriceMultipleItems] =
          useState(0);
        const handleMultipleArticle = (price) => {
          setTotalValue(totalValue + price);
          setTotalPriceMultipleItems(totalPriceMultipleItems + price);
        };

        return (
          <div className="itemInCart" key={`art-in-cart-${article.id}`}>
            <div className="cartImage">
              <img src={article.image} alt="" />
            </div>

            <h3 className="cartName">{article.name}</h3>

            <div className="cartPrice">
              {article.buy_price}
              ,00 🔔
              <br />
              {totalPriceMultipleItems}
              ,00 🔔
            </div>

            <div className="cartQuantityAndButton">
              <button
                type="button"
                onClick={() => handleMultipleArticle(article.buy_price)}
              >
                Ajouter
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartItem;
