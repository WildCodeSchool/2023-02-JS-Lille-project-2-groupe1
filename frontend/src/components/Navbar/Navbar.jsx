import { useState } from "react";
import Cart from "@components/SideBar/Cart";
import SNavbar from "./NavbarStyle";
import BulleCart from "../../assets/BulleCart.svg";
import navbarImg from "../../assets/newnavbar_1.svg";

export default function Navbar({ articles, setArticles }) {
  const [shown, setShown] = useState(false);

  return (
    <SNavbar>
      <div className="header">
        <img src={navbarImg} className="illustrationNavbar" alt="" />
        <button
          type="button"
          className="cartBtn"
          onClick={() => {
            setShown(!shown);
          }}
        >
          <img src={BulleCart} className="cartIcon" alt="Icône de bouton" />
        </button>

        <Cart
          articles={articles}
          setArticles={setArticles}
          shown={shown}
          close={() => {
            setShown(false);
          }}
        />
      </div>
    </SNavbar>
  );
}
