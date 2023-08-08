import React from "react";

const SectionHeading = ({ text, children, sub }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="sm:text-3xl text-2xl font-bold tracking-wide">
        {text || children}
      </div>
      <div className="text-sm">{sub}</div>
    </div>
  );
};

export default SectionHeading;
