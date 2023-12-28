import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/Images/logo.png";

function Header() {
  return (
    <div className="detail bg-slate-400 flex justify-between min-[1000px]:px-4 justify-center p-2">
      <img className="h-12 min-[1000px]:w-[160px] " src={logo} alt="logo" />
      <h1 className="font-bold text-3xl">
        Sonpal <span className="text-[#F07F1A]">Parmar</span>
      </h1>
    </div>
  );
}

export default Header;
