import React from "react";

const Educations = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-16">
      <div className=" transform ease-in-out xxs:w-fit xs:pr-5 md:w-[80%] lg:w-[90%]   bg-white  " style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}>
      <div className="w-full h-26 flex flex-col justify-center pl-6 pt-6">
        <div className="  flex flex-wrap pb-2">
        <a href="https://uoc.ac.in/" target="_blank">
          <h1 className=" pl-1 pr-1 border-[#008073] text-2xl font-normal text-[#2d6560] transform ease-in-out  hover:border-b-custom opacity-80">
            UNIVERSITY OF CALICUT
          </h1>
          </a>
        </div>
        <p className="pl-1">Kerala, Calicut</p>
      </div>
      <div className="w-full h-20 pl-5 pt-4 ">
        <ul className="list-disc pl-8">
          <li className="font-aj text-sm">BSC in Computer Science</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Educations;
