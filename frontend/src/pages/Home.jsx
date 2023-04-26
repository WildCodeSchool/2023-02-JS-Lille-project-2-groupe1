import Filter from "@components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import CardHouseware from "../components/CardHouseware/CardHouseware";
import Footer from "../components/Footer/Footer";
import SHome from "./HomeStyle";
import HousewareList from "./HousewareList";

function Home() {
  return (
    <SHome>
      <Navbar />
      <Filter />
      <CardHouseware />
      <Footer />
      <HousewareList />
    </SHome>
  );
}

export default Home;
