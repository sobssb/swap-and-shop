import React from "react";

const H2_Element = ({ text, className }) => {
  return <h2 className={`text-2xl font-bold mb-2 ${className}`}>{text}</h2>;
};

export default H2_Element;
