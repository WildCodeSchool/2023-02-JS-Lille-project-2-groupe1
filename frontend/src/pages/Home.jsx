import { useState } from "react";
import Cart from "@components/SideBar/Cart";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SHome from "./HomeStyle";
import HousewareList from "./HousewareList";
import EducationList from "./EducationList";
import DecorationList from "./DecorationList";
import FournitureList from "./FournitureList";
import RecreationList from "./RecreationList";
import OutilsList from "./OutilsList";

function Home() {
  const [show, setShow] = useState(false);
  const [articles, setArticles] = useState([]);
  const handleAddArticle = (article) => {
    setArticles([...articles, article]);
  };

  return (
    <SHome>
      <Routes>
        <Route
          path="/Catalogue"
          element={
            <HousewareList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Décoration"
          element={
            <DecorationList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Education"
          element={
            <EducationList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Fourniture"
          element={
            <FournitureList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Recreation"
          element={
            <RecreationList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Outil"
          element={
            <OutilsList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
      </Routes>
      <Navbar
        setShow={setShow}
        show={show}
        articles={articles}
        setArticles={setArticles}
      />
      <Cart />
      <Footer />
    </SHome>
  );
}

export default Home;
