import React from "react";
import { FaGithub } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="flex px-16 pt-16 justify-start items-center">
      <div className="  text-[#009688]">
      <div className="flex items-center gap-5 pb-10 ">
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
            E-mail Mehroof
          </span>
          <a href="" target="_blank">
            <IoMdMail size={25} color="white" />
          </a>
        </div>
        <div className="">
        <a href="" target="_blank">
        <h1 className="opacity-80 border-[#009688] hover:border-b-custom">mehroof@gmail.com</h1>

          </a>
        </div>
      </div>
      <div className="flex items-center gap-5 pb-10 ">
        <div
          className=" flex justify-center items-center content-center  relative group"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#795548 ",
            borderRadius: "50px",
          }}
        >
          <span className=" flex opacity-0 bg-black text-white text-sm rounded-md py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-700 ">
            Github
          </span>
          <a href="" target="_blank">
            <FaGithub size={25} color="white" />
          </a>
        </div>
        <div className="">
        <a href="" target="_blank">
        <h1 className="opacity-80 border-[#009688] hover:border-b-custom">github.com/mehroof</h1>

          </a>
        </div>
      </div>
      <div className="flex items-center gap-5 pb-8 ">
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
            LInkedin
          </span>
          <a href="" target="_blank">
            <RiLinkedinFill size={25} color="white" />
          </a>
        </div>
        <div className="opacity-80 border-[#009688] hover:border-b-custom">
        <a href="" target="_blank">
        <h1>linkedin.com/in/mehroof</h1>
          </a>
             
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
