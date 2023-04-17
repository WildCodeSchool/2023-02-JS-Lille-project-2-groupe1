import SCard from "./CardStyle";
import cardImg from "../../assets/Card.svg";

export default function Card() {
  return (
    <SCard>
      <img src={cardImg} alt="" />
      <img src={cardImg} alt="" />
      <img src={cardImg} alt="" />
      <img src={cardImg} alt="" />
      <img src={cardImg} alt="" />
    </SCard>
  );
}
