import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";


import "../../styles.css";

const Project = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  return (
    <div className="relative md:w-custom-2 border box-content  overflow-hidden bg-white" style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}>
      <div
        className={`h-custom  transition-transform duration-1000 ease-in-out ${
          showOverlay ? " transform -translate-y-full t" : ""
        }`}
      >
        {" "}
        <img
          src={props.logo}
          alt=".."
          className="w-full h-60 "
          onClick={() => {
            setFadeIn((prev) => !prev);
            setShowOverlay((prev)=>!prev);
          }}
        />
        <div className=" py-4 px-6">
          <div
            className="flex justify-between items-center pb-2"
            onClick={() => {
              setFadeIn((prev) => !prev);
            setShowOverlay((prev)=>!prev);
            }}
          >
            <h1 className="text-green-800 font-sans font-thin text-3xl">
              {props.details.title}
            </h1>
            <div>
              <IoMdMore size={25} color="green" />
            </div>
          </div>
          <p className="font-sans font-normal">{props.details.description}</p>
        </div>
      </div>
      {showOverlay && (
        <div
        className={`absolute bottom-0 left-0 w-full bg-white  duration-1000 ease-in-out ${
          fadeIn ? ' transform opacity-100 delay-1000 ease-in-out' : 'opacity-0'
        }`}
        style={{transformOrigin:'top',}}
        >
          <div
            onClick={() => {
              setFadeIn((prev) => !prev);
            setShowOverlay((prev)=>!prev);
            }}
          >
            <div className="head text-rose-900 flex justify-between items-center py-8 pl-7 pb-6 pr-5">
              <h2 className="text-2xl font-thin">Accomplishments</h2>
              <RxCross2 size={25} />
            </div>
          </div>
          <div className="pl-7 border-b pb-28 border-slate-200">
            <ul className="list-disc pl-6 " style={{ fontFamily: "inherit" }}>
              <li className="pb-2  items-center ">
              <div className="flex">{props.details.li1}</div>
              </li>
              <li className="pb-2">
              <div className="flex">{props.details.li2}</div>
              </li>
              <li className="pb-2">
        
                <div className="flex">{props.details.li3}</div>
              </li>
              <li>
              <div className="flex">{props.details.li4}</div>
              </li>
            </ul>
          </div>
          <div className="flex pl-5 py-4 ">
            <div className="flex pr-6">
              <div
                className=" flex justify-center items-center content-center relative group "
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#795548 ",
                  borderRadius: "50px",
                }}
              >
                <span className="  opacity-0 bg-black text-white text-sm rounded-md py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-700">
                  View
                </span>
                <a href={props.Clink} target="_blank">
                  <FaExternalLinkAlt size={25} color="white" />
                </a>
              </div>
            </div>
            <div>
              <div
                className=" flex justify-center items-center content-center  relative group"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#795548 ",
                  borderRadius: "50px",
                }}
              >
                <span className="  opacity-0 bg-black text-white text-sm rounded-md py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-700 ">
                  Source
                </span>
                <a href={props.GitLink} target="_blank">
                  <FaGithub size={25} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
