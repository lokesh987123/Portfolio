import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white pt-20 pb-28" id="about">
      <article className="align-element grid gap-16 md:grid-cols-2 md:items-center ">
        <img className="h-64 block mx-auto" src={aboutSvg} alt="" />
        <article>
          <SectionTitle title="Code And Coffee"></SectionTitle>

          <p className="text-justify text-gray-500 leading-8 md:max-w-[33rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </article>
    </section>
  );
};

export default About;
