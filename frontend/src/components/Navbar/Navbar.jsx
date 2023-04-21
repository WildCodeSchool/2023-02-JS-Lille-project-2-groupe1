import { useState } from "react";
import Cart from "@components/SideBar/Cart";
// import Button from "react-bootstrap/Button";
// import { Cart4 } from "react-bootstrap-icons";
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

        {/* <Button
          size="sm"
          variant="primary"
          style={{ width: "5rem", height: "3.5rem", position: "relative" }}
          onClick={() => handleShow()}
          label="Messages"
          icon="pi pi-users"
          outlined
          badge="2"
          badgeClassName="p-badge-danger"
        >
          

          <div
            className="rounded-circle d-flex justify-content-center align-items-center notifBtn"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
            }}
          >
            {" "}
            3
          </div>
        </Button> */}
      </div>
    </SNavbar>
  );
}
