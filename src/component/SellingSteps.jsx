import React from "react";
import H2_Element from "./H2_Element";

const SellingSteps = ({ firstList, secondList, title, className }) => {
  return (
    <div className={`${className} p-3 min-w-60 min-h-65 rounded-lg`}>
      <H2_Element text={title} className={"font-bold text-[1rem] mt-2"} />

      <ul className="list-disc list-outside text-[.8rem] mt-5 px-4">
        <li className="mb-4">{firstList}</li>

        <li>{secondList}</li>
      </ul>
    </div>
  );
};

export default SellingSteps;
