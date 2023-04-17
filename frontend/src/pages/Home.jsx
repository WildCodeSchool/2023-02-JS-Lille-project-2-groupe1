import Category from "@components/CategoryButton/CategoryButton";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import SHome from "./HomeStyle";

export default function Home() {
  return (
    <SHome>
      <Navbar />
      <Category />
      <Card />
      <Footer />
    </SHome>
  );
}
