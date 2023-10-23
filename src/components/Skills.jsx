import React from "react";
import { skills } from "../data";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section className="bg-slate-50" id="skills">
      <div className="align-element pt-20 pb-28">
        <SectionTitle title="tech stack" />
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, title, icon, text }) => {
            return (
              <article key={id} className="flex flex-col items-start gap-y-3">
                <div className="mb-3">{icon}</div>
                <h3 className="capitalize font-bold text-md">{title}</h3>
                <p className="text-gray-500 text-justify">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
