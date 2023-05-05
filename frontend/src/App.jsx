import React from "react";
import Home from "./pages/Home";
import Filter from "./components/Filter/Filter";
import "./styles/App.css";
import "./font/FinkHeavy.ttf";


function App() {
  return (
    <>
      <Filter />
      <Home />
    </>
  );
}

export default App;
