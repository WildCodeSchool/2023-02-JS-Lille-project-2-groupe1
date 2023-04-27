import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HousewareList from "./components/CardHouseware/HousewareList";
import Navbar from "./components/Navbar/Navbar";
// import SideBar from "./components/SideBar/SideBar";
import Filter from "./components/Filter/Filter";
import "./styles/App.css";

function App() {
  const [show, setShow] = useState(false);

  // async function generateid(article) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(article);
  //     }, 500);
  //   });
  // }

  const [articles, setArticles] = useState([]);

  const handleAddArticle = (article) => {
    setArticles([...articles, article]);
  };

  return (
    <>
      {/* Bouton du panier ICIIIIIIII */}

      <Routes>
        <Route
          path="/Houseware"
          element={<HousewareList handleAddArticle={handleAddArticle} />}
        />
      </Routes>

      <Navbar
        setShow={setShow}
        show={show}
        articles={articles}
        setArticles={setArticles}
      />

      <Filter />

      <Home />
    </>
  );
}

export default App;
