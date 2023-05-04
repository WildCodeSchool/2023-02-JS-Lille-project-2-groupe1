import { useState } from "react";
import Swal from 'sweetalert2'


function CartItem({ articles }) {
  const [totalValue, setTotalValue] = useState(
    articles.reduce(
      (accumulator, currentItem) => accumulator + currentItem.buy_price,
      0
    )
  );

  const handleClick = () => {

    Swal.fire({
      icon: 'error',
      title: 'Hep là !',
      text: 'Personne ne quitte Tom Nook sans payer !',
      width: 600,
      background: '#E7DCAF',
    })
  }

  const validateClick = () => {
    Swal.fire({
      icon: 'success',
      text: 'Tom Nook te remercie pour ton achat.',
      width: 600,
      background: '#FFFBE7',
    })
  }

  return (
    <div className="containerCart">
      <h2 className="total-title">Total du panier : {totalValue} Clochettes</h2>

      <div className="container-delete-refuse">
        <button type="button" className="delete-button" onClick={handleClick}>
          Vider le panier
        </button>
        <button type="button" className="validate-button" onClick={validateClick}>
          Valider le panier
        </button>
      </div>

      {articles?.map((article) => {
        const [totalPriceMultipleItems, setTotalPriceMultipleItems] =
          useState(article.buy_price);

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
              <p id="prixUnitaire">Prix unitaire :</p>

              {article.buy_price}
              ,00 Clochettes
              <br />

              <p id="prixTotal"> Prix total :</p>

              {totalPriceMultipleItems}
              ,00 Clochettes
            </div>

            <div className="cartQuantityAndButton">
              <button
                type="button"
                className="addQuantityBtn"
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
