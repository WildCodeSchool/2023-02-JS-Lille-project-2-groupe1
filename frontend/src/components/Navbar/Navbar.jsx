import { useState } from "react";
import Cart from "@components/SideBar/Cart";
import SNavbar from "./NavbarStyle";

export default function Navbar() {
  const [shown, setShown] = useState(false);

  return (
    <SNavbar>
      <div className="header">
        <button
          type="button"
          className="cartBtn"
          onClick={() => {
            setShown(!shown);
          }}
        >
          PANIER
        </button>

        <Cart
          shown={shown}
          close={() => {
            setShown(false);
          }}
        />
      </div>
    </SNavbar>
  );
}
