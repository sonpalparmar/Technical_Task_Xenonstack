import React from "react";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="detail min-[1000px]:text-lg flex justify-center items-center bg-slate-400 absolute w-full p-2 bottom-0 ">
      <div className="flex justify-center items-center font-bold h-10">
        <Link to="">
          <FaGithubSquare className="m-1 text-2xl" />
        </Link>
        <FaLinkedin className="m-1 text-2xl text-[#126BC4]" />
        <FaInstagramSquare className="m-1 text-2xl text-[#FF0986]" />
        <FaGripLinesVertical className="m-1" />
        <h3 className="m-1 text-md">
          Developed by ❤️ Sonpal <span className="text-[#F07F1A]">Parmar</span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
