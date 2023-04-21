import Button from "react-bootstrap/Button";
import { Cart4 } from "react-bootstrap-icons";
import SNavbar from "./NavbarStyle";

export default function Navbar({ setShow }) {
  const handleShow = () => {
    setShow(true);
  };

  return (
    <SNavbar>
      <div className="header">
        <Button
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
          <Cart4 />

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
        </Button>
      </div>
    </SNavbar>
  );
}
