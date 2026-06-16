import React from "react";
import H2_Element from "./H2_Element";
import { FaAngleDown } from "react-icons/fa";

const HelpSuggestion = ({ text, phrase }) => {
  return (
    <div className="mb-2.5 relative">
      <H2_Element text={text} className="font-bold text-[1rem] underline" />
      <p className="-mt-2">{phrase}</p>
      <FaAngleDown className="absolute top-[40%] right-0 " />
    </div>
  );
};

export default HelpSuggestion;
