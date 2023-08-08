import React from "react";

const Divider = ({
  height = "4px",
  width = "100%",
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
}) => {
  return (
    <div
      className="bg-dark"
      style={{ height, width, maxHeight, maxWidth, minHeight, minWidth }}
    />
  );
};

export default Divider;
