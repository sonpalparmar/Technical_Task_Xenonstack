import React from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";

// #F07F1A

function StudentComponent({ regNo, name, phone, email, cgpa,newCpga }) {
  return (
    <div className="text-center rounded-sm p-1 detail font-semibold min-[1000px]:font-semibold m-[1px] h-[220px] min-[1000px]:w-[380px] w-[300px]  text-slate-800 text-lg mt-5 relative -top-4 max-[600px]:-left-1 max-[600px]:text-[14px]">
      <h1 className="border-b-[1px] min-[1000px]:p-1 min-[1000px]:text-base min-[1000px]:font-semibold py-[3px] font-bold border-b-emerald-600  flex justify-center items-center ">
        Registration no{" "}
        <BiSolidRightArrowAlt className="inline ml-1 text-slate-800 min-[1000px]:mt-1 text-xl" />
        <span className="text-[#4a044e] font-bold">{regNo}</span>
      </h1>
      <h1 className="min-[1000px]:p-1 border-b-[1px] min-[1000px]:text-base min-[1000px]:font-semibold  py-[3px] font-bold border-b-emerald-600  flex justify-center items-center ">
        Name{" "}
        <BiSolidRightArrowAlt className="inline ml-1 text-slate-800 min-[1000px]:mt-1 text-xl" />
        <span className="text-[#4a044e] font-bold">{name}</span>
      </h1>
      <h1 className="min-[1000px]:p-1 border-b-[1px] min-[1000px]:text-base min-[1000px]:font-semibold  py-[3px] min-[1000px]:mt-1 font-bold border-b-emerald-600  flex justify-center items-center ">
        Overall Cgpa{" "}
        <BiSolidRightArrowAlt className="inline ml-1 min-[1000px]:mt-1 text-slate-800 text-xl" />
        <span className="text-[#4a044e] font-bold">{cgpa}</span>
      </h1>
      <h1 className="min-[1000px]:p-1  border-b-[1px] min-[1000px]:text-base  min-[1000px]:font-semibold min-[1000px]:text-base py-[3px] font-bold border-b-emerald-600  flex justify-center items-center ">
        3rd Sem Cgpa{" "}
        <BiSolidRightArrowAlt className="inline ml-1 min-[1000px]:mt-1 text-slate-800 text-xl" />
        <span className="text-[#4a044e] font-bold">Coming soon...</span>
      </h1>

      <h1 className="min-[1000px]:p-1 border-b-[1px] min-[1000px]:text-base min-[1000px]:font-semibold  py-[3px] font-bold border-b-emerald-600  flex justify-center items-center ">
        Contact no{" "}
        <BiSolidRightArrowAlt className="inline ml-1 min-[1000px]:mt-1 text-slate-800 text-xl" />
        <span className="text-[#4a044e] font-bold">{phone}</span>
      </h1>
      <h1 className="min-[1000px]:p-1 font-bold min-[1000px]:text-base flex min-[1000px]:font-semibold justify-center items-center ">
        Gmail
        <BiSolidRightArrowAlt className="inline ml-1 min-[1000px]:mt-1 text-slate-800 text-xl" />
        <span className="text-[#4a044e] font-bold">{email}</span>
      </h1>
    </div>
  );
}

export default StudentComponent;
