import SHome from "./HomeStyle";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Category from "@components/CategoryButton/CategoryButton";

export default function Home() {
  return (
    <SHome>
      <Navbar />
      <h1 />
      <Category />
      <Card />
      <Footer />
    </SHome>
  );
}