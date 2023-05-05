import SFooter from "./FooterStyle";
import footerImg from "../../assets/newfooterSOS.svg";
import emptyFooter from "../../assets/footermob.svg";


export default function Footer() {
  return (
    <SFooter>
      <div className="footer">
        <img src={footerImg} className="bgFooter" alt="" />
      
        
      </div>
      <div className="responsiveFooter">
        <img src={emptyFooter} className="responsiveBgFooter" alt="" />
      </div>
      
      
    </SFooter>
  );
}
