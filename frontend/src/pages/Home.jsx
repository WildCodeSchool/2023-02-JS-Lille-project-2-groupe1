import { useState } from "react";
import Cart from "@components/SideBar/Cart";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import CardHouseware from "../components/CardHouseware/CardHouseware";
import Footer from "../components/Footer/Footer";
import SHome from "./HomeStyle";
import HousewareList from "./HousewareList";

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
      <Cart />
      <Footer />
    </SHome>
  );
}

export default Home;
