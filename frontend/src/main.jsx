import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Home /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
