import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = ({ title }) => {
  return (
    <main className="fixed top-[50%] left-[50%] -translate-[50%] text-center whitespace-nowrap">
      <h1 className="text-5xl my-5 px-5 font-bold text-black">{title}</h1>
      <h1 className="text-2xl font-bold text-white shadow-2xs bg-[#021cff] p-5 rounded-4xl mb-3">
        Under Construction
      </h1>
      <Link to="/" className="text-blue-600 underline">
        Back to home
      </Link>
    </main>
  );
};

export default UnderConstruction;
