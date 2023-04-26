import React from "react";

const CartItem = ({ articles, setArticles }) => {
    

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
                    <div className="leftColumn">
                        <h6>
                            {article["sell-price"] ? article["sell-price"] : article.price}
                            ,00Clochettes
                        </h6>

                        <h6>{article.name["name-USen"] ? article.name["name-USen"] : article}</h6>
                    </div>

                    <div className="centerColumn">
                        <img src={article.image_uri} alt="" />
                        <img src={article.image_url} alt="" />
                    </div>

                    <div className="rightColumn">
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
};

export default CartItem;
