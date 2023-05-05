import { useState } from "react";
import Cart from "@components/SideBar/Cart";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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
    <div>
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
          path="/Décorations"
          element={
            <DecorationList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Éducation"
          element={
            <EducationList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Fournitures"
          element={
            <FournitureList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Récréation"
          element={
            <RecreationList
              handleAddArticle={handleAddArticle}
              articlesInCart={articles}
            />
          }
        />
        <Route
          path="/Outils"
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
    </div>
  );
}

export default Home;
