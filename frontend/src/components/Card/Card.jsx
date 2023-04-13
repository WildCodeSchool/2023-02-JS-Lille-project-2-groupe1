import SCard from "./CardStyle";
import Cardimg from "../../assets/Card.svg";

export default function Card() {
  return (
    <SCard>
      <img src={Cardimg} alt="" />
      <img src={Cardimg} alt="" />
      <img src={Cardimg} alt="" />
      <img src={Cardimg} alt="" />
      <img src={Cardimg} alt="" />
    </SCard>
  );
}
