import React from "react";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import heroSvg from "../assets/hero.svg";

const Hero = () => {
  return (
    <header className=" bg-emerald-100 pt-24 pb-36">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <div className="capitalize flex flex-col ">
          <h1 className="text-7xl font-bold mb-4">i'm lokesh</h1>
          <p className="text-3xl text-gray-600 mb-2 ">front-end developer</p>
          <p className="text-xl text-gray-600 ">
            Turning Ideas Into Interactive Reality
          </p>
          <div className="flex gap-x-4 text-[2rem] mt-4 text-slate-500">
            <a
              className=" hover:text-slate-800"
              href="https://github.com/lokesh987123"
            >
              <FaGithubSquare />
            </a>
            <a
              className=" hover:text-slate-800"
              href="https://www.linkedin.com/in/lokeshroyoc/"
            >
              <FaLinkedin />
            </a>
            <a
              className=" hover:text-slate-800"
              href="https://twitter.com/lokeshroy_"
            >
              <FaTwitterSquare />
            </a>
          </div>
        </div>
        <img src={heroSvg} className="hidden md:block h-80 lg:h-96" alt="" />
      </div>
    </header>
  );
};

export default Hero;
