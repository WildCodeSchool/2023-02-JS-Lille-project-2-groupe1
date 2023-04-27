import React from "react";

function CartItem({ articles, setArticles }) {
  const handleDelete = (articleToDelete) => {
    const articleCopy = articles.filter(
      (article) => article.id !== articleToDelete.id
    );

    setArticles(articleCopy);
  };

  return (
    <div className="containerCart">
      {articles?.map((article) => (
        <div className="itemInCart">
          <div className="cartImage">
            <img src={article.image_uri} alt="" />
            <img src={article.image_url} alt="" />
          </div>

          <h3 className="cartName">
            {article.name["name-USen"] ? article.name["name-USen"] : article}
          </h3>

          <div className="cartPrice">
            {article["sell-price"] ? article["sell-price"] : article.price}
            ,00 Clochettes
          </div>

          <div className="cartQuantityAndButton">
            <label htmlFor="quantity">Quantité</label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              defaultValue="1"
              min="1"
            />
            <button
              type="button"
              key={article.cle}
              onClick={() => handleDelete(article)}
              className="btnDeleteCart"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
