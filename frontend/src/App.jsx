import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HousewareList from "./pages/HousewareList";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar/SideBar";
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

  async function handleAddArticle(article) {
    const art = await generateid(article);
    setArticles([...articles, art]);
  }

  return (
    <>
      <Navbar aticleQuatity={articles.length} setShow={setShow} show={show} />

      <div className="App">
        <Home />
      </div>

      <Filter />

      <Routes>
        <Route
          path="/Houseware"
          element={<HousewareList handleAddArticle={handleAddArticle} />}
        />
      </Routes>

      <SideBar
        show={show}
        setShow={setShow}
        articles={articles}
        setArticles={setArticles}
      />
    </>
  );
}

export default App;
