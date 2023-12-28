import React, { useState } from "react";
import { studentDetail } from "./StudentInfo";
import { BsSearch } from "react-icons/bs";
import StudentComponent from "./StudentComponent";
import { FaSkullCrossbones } from "react-icons/fa6";

function Body() {
  const [inputText, setInputText] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [show, setShow] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);
  const studentInfo = studentDetail;

  function searchData(studentData, searchText) {
    const filteredData = studentData.filter((obj) => {
      return (
        obj.name.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.regNo.includes(searchText)
      );
    });

    if(filteredData.length==0){
      setFinalData([]);
    }

     if(filteredData.length!=0){
      setFailureMessage(false);
     }

    return filteredData;
  }

  return (
    <div className="flex justify-center items-center  w-[95vw] flex-col">
      <div className="flex detail fixed top-20 max-[600px]:top-32">
        <input
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Enter name or registration no..."
          className="p-[8px] w-[250px] rounded-l-sm  focus:outline-none  focus:border-[#155e75]"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const data = searchData(studentInfo, inputText);
              console.log(data.length);
              if (data.length == 0) {
                setFailureMessage(true);
              } else {
                setFinalData(data);
                setShow(true);
              }
            }
          }}
        />
        <button
          onClick={() => {
            const data = searchData(studentInfo, inputText);

            console.log(data.length);
            if (data.length == 0) {
              setFailureMessage(true);
            } else {
              setFinalData(data);
              console.log(finalData);
              setShow(true);
            }
          }}
          className="w-12 rounded-r-sm bg-[#F07F1A]"
        >
          <BsSearch className="text-2xl relative text-white left-3" />
        </button>
      </div>

      {finalData.length != 0 && (
        <div className=" m-[1px] rounded-sm fixed h-[480px] w-[900px] flex flex-wrap text-center ml-12 min-[1000px]:ml-2  justify-center min-[1000px]:justify-around top-[130px] overflow-auto max-[600px]:w-[370px] max-[600px]:-left-[40px] max-[600px]:top-[150px] mt-8">
          {finalData.map(({ regNo, name, phone, email, cgpa }) => {
            return (
              <StudentComponent
                name={name}
                regNo={regNo}
                phone={phone}
                email={email}
                cgpa={cgpa}
              />
            );
          })}
        </div>
      )}

      <div>
        {failureMessage && (
          <h1 className="relative min-[1000px]:top-[60px] top-[120px] flex justify-center items-center font-bold text-lg m-2 p-[2px]">
            Oops ! Something went wrong
            <span className="relative tom-2 p-[2px]">
              <FaSkullCrossbones className="inline text-[red] text-xl ml-1 -mt-[2px]" />
            </span>
          </h1>
        )}
      </div>
    </div>
  );
}

export default Body;
