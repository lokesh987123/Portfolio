import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h2 className="tracking-wider capitalize font-semibold text-3xl">
        {title}
      </h2>
      <hr className="mt-6 mb-10" />
    </div>
  );
};

export default SectionTitle;
