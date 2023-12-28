import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import Toppers from "./Toppers";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
