import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({ id, img, url, github, title, text }) => {
  return (
    // single project card
    <article>
      <img
        className="block rounded-t-md w-full max-h-1/2"
        src={img}
        alt="project image"
      />

      {/* info center */}
      <div className="p-8 bg-white shadow-xl rounded-b-md ">
        {/* info like name and des */}
        <h4 className="text-xl capitalize font-semibold tracking-wide mb-4 ">
          {title}
        </h4>
        <p className="text-slate-700 leading-7 mb-4 text-justify">{text}</p>

        {/* links container for github and web url maybe netlify */}
        <div className="flex gap-4 text-3xl text-slate-500">
          <a className=" hover:text-slate-800" href={github}>
            <FaGithubSquare />
          </a>
          <a className=" hover:text-slate-800" href={url}>
            <TbWorldWww />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
