import React from "react";

const Section = ({ children, className, id }) => {
  return (
    <div id={id} className={`px-5 pt-20 ${className}`}>
      {children}
    </div>
  );
};

export default Section;
