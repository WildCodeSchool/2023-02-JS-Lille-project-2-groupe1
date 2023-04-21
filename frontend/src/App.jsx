import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HousewareList from "./components/Houseware/HousewareList";
import Navbar from "./components/Navbar/Navbar";
// import SideBar from "./components/SideBar/SideBar";
import Filter from "./components/Filter/Filter";
import "./styles/App.css";

function App() {
  const [show, setShow] = useState(false);

  async function generateid(article) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(article);
      }, 500);
    });
  }

  const [articles, setArticles] = useState([]);

  const handleAddArticle = (article) => {
    const art = generateid(article);
    setArticles([...articles, art]);
  };

  return (
    <>
      <Navbar aticleQuatity={articles.length} setShow={setShow} show={show} />
      {/* Bouton du panier ICIIIIIIII */}

      <Filter />

      <Routes>
        <Route
          path="/Houseware"
          element={<HousewareList handleAddArticle={handleAddArticle} />}
        />
      </Routes>

      {/* <SideBar
        show={show}
        setShow={setShow}
        articles={articles}
        setArticles={setArticles}
      /> */}

      <Home />
    </>
  );
}

export default App;
