import React, { useState } from "react";
import TempStudentComponents from "./TempStudentComponents";
import neha from "../src/Images/neha.jpeg";
import naushad from "../src/Images/naushad.jpg";
import shagun from "../src/Images/shagun.jpeg";
import first from "../src/Images/1.jpg";
import second from "../src/Images/2.jpg";
import third from "../src/Images/3rd.png";

function Toppers() {
  const [toppers, setToppers] = useState([
    {
      id: "267",
      regNo: "12208511",
      name: "Shagun Paliwal",
      phone: "9711055334",
      email: "shagunpaliwal21032000@gmail.com",
      cgpa: "8.69",
      img: shagun,
      rank: first,
    },
    {
      id: "64",
      regNo: "12202777",
      name: "Md Naushad Ali",
      phone: "7979728550",
      email: "naushadali4741@gmail.com",
      cgpa: "8.61",
      img: naushad,
      rank: second,
    },
    {
      id: "266",
      regNo: "12208483",
      name: "Neha Kumari",
      phone: "7004291928",
      email: "nehakashyap1011@gmail.com",
      cgpa: "8.56",
      img: neha,
      rank: third,
    },
  ]);

  return (
    <div className="flex relative justify-around w-[75%] flex-wrap left-40">
      {toppers.map(({ regNo, name, phone, email, cgpa, img, rank }) => {
        return (
          <TempStudentComponents
            name={name}
            regNo={regNo}
            phone={phone}
            email={email}
            cgpa={cgpa}
            img={img}
            rank={rank}
          />
        );
      })}
    </div>
  );
}

export default Toppers;
