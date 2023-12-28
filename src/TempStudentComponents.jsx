import React from "react";
import {FaMedal} from 'react-icons/fa';

function TempStudentComponents({ regNo, name, phone, email, cgpa, img,rank }) {
  return (
    <div className="detail border-2 flex m-2">
      <img className="w-60 h-full" src={img} alt="student image" />
      <div>
      <img className="h-20 w-20 ml-32" src={rank} alt="test"/>
        <h1 className="border-b-[1px] border-b-emerald-600 m-2 p-[2px] ">
          Registration no :
          <span className="text-[#4a044e] font-bold m-2 p-[2px]">{regNo}</span>
        </h1>
        <h1 className="border-b-[1px] border-b-emerald-600 m-2 p-[2px]">
          Name :
          <span className="text-[#2e1065] font-bold m-2 p-[2px]">{name}</span>
        </h1>
        <h1 className="border-b-[1px] border-b-emerald-600 m-2 p-[2px] ">
          Cgpa :
          <span className="text-[#3b0764] font-bold m-2 p-[2px]">{cgpa}</span>
        </h1>
        <h1 className="border-b-[1px] border-b-emerald-600 m-2 p-[2px]">
          Phone :
          <span className="text-[#2e1065] font-bold m-2 p-[2px]">{phone}</span>
        </h1>
        <h1 className="border-b-[1px] border-b-emerald-600 m-2 p-[2px]">
          Gmail :
          <span className="text-[#4a044e] font-bold m-2 p-[2px]">{email}</span>
        </h1>
      
      </div>
    </div>
  );
}

export default TempStudentComponents;
