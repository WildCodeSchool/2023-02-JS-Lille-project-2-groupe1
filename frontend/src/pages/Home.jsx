import { useState } from "react";
import Cart from "@components/SideBar/Cart";
import { Route, Routes } from "react-router-dom";

import Modal from "@components/Modal/Modal";
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
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const [articles, setArticles] = useState([]);
  const handleAddArticle = (article) => {
    const isInthecard = articles.find(
      (articleaAjouter) => articleaAjouter.id === article.id
    );
    if (isInthecard) {
      setOpenModal(true);
    } else {
      setArticles([...articles, article]);
    }
  };

  return (
    <SHome>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <Routes>
        <Route
          path="/Catalogue"
          element={<HousewareList handleAddArticle={handleAddArticle} />}
        />
        <Route
          path="/Décoration"
          element={<DecorationList handleAddArticle={handleAddArticle} />}
        />
        <Route
          path="/Education"
          element={<EducationList handleAddArticle={handleAddArticle} />}
        />
        <Route
          path="/Fourniture"
          element={<FournitureList handleAddArticle={handleAddArticle} />}
        />
        <Route
          path="/Recreation"
          element={<RecreationList handleAddArticle={handleAddArticle} />}
        />
        <Route
          path="/Outil"
          element={<OutilsList handleAddArticle={handleAddArticle} />}
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
