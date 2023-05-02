import SFooter from "./FooterStyle";
import footerImg from "../../assets/Footerimg.svg";

export default function Footer() {
  return (
    <SFooter>
      <div className="footer">
        <img src={footerImg} alt="" />
      </div>
    </SFooter>
  );
}
