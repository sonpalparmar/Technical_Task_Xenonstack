import React from "react";
import { app } from "./firebase";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import boy from "./Images/dboy1.jpg";
import { MdEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import leaf from "./Images/leaf2.png";

function SignIn() {
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const auth = getAuth(app);

  function handleInput(event) {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  }

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        navigate("/app");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className="flex bg-[#F07F1A] h-[100vh] text-center border-2 border-black justify-center items-center">
      <div className="flex border-4 p-8 rounded-[25px] shadox-xl hover:shadow-2xl bg-white border-none duration-500 z-10">
        <div className="w-96 overflow-y-hidden	">
          <img
            className="absolute z-20 w-[330px] left-[290px] top-[310px] -rotate-[470deg]"
            src={leaf}
            alt="leaf"
          />
          <img src={boy} alt="delivery-boy" className="relative" />
        </div>

        <div className="p-5">
          <form>
            <h1 className="font-bold mr-11 text-2xl">
              Sign <span className="text-[#F07F1A]">In</span>
            </h1>
            <MdEmail className="left-[840px] top-[314px] text-[#F07F1A] absolute top-7  text-xl" />

            <input
              className="block border-b-2 text-[#F07F1A] border-[#F07F1A] focus:outline-none text-md align-middle p-2 m-2"
              type="text"
              id="email"
              name="email"
              required
              placeholder="email"
              onChange={(event) => {
                handleInput(event);
              }}
            />
            <BiSolidLock className="left-[840px] top-[361px] text-[#F07F1A] absolute top-7 text-2xl" />
            <input
              className="block border-b-2 text-[#F07F1A] border-[#F07F1A] focus:outline-none text-md p-2 m-2"
              type="password"
              id="password"
              name="password"
              required
              placeholder="password"
              onChange={(event) => {
                handleInput(event);
              }}
            />
            <button
              className="w-full text-white font-bold mt-4 bg-[#F07F1A] p-1 rounded-2xl shadow-2xl "
              type="submit"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </form>
          <img
            className="absolute z-20 w-[330px] left-[950px]  top-[110px] -rotate-[290deg]"
            src={leaf}
            alt="leaf"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
