import React from "react";

const UnderConstruction = ({ title }) => {
  return (
    <main className="undercont">
      <h1 className="text-5xl my-5 text-center px-5 font-bold text-black">
        {title}
      </h1>
      <h1 className="text-4xl font-bold text-white shadow-2xs bg-[#021cff] p-5 rounded-4xl text-center">
        Under Construction
      </h1>
    </main>
  );
};

export default UnderConstruction;
