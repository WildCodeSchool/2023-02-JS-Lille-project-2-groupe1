import React, { useEffect, useState } from "react";


function CartItem({ articles, setArticles }) {

  const totalValue = articles.reduce((accumulator, currentItem) => accumulator + currentItem.buy_price, 0);

  const handleDelete = (articleToDelete) => {
    const articleCopy = articles.filter(
      (article) => article.id !== articleToDelete.id
    );

    setArticles(articleCopy);
  };


  return (
    <div className="containerCart">

      <h2>Total du panier : {totalValue}</h2>
      <button onClick={() => setArticles([])}>Vider le panier</button>
      {articles?.map((article) => (
        <div className="itemInCart">

          <div className="cartImage">
            <img src={article.image} alt="" />
          </div>

          <h3 className="cartName">{article.name}</h3>

          <div className="cartPrice">
            {article.buy_price}
            ,00 Clochettes
          </div>

          <div className="cartQuantityAndButton">

            <button onClick={() => setArticles(articles.push(article))}>Ajouter</button>



            <button
              type="button"
              key={article.cle}
              onClick={() => handleDelete(article)}
              className="btnDeleteCart"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
