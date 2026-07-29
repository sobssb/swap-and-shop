import React from "react";

const Button = ({ className, buttonTitle, handleClick, icon }) => {
  // this is just for the buttons on the website
  return (
    <button
      className={`text-3xl font-bold rounded-2xl flex gap-1.5 flex-row justify-center items-center ${className}`}
      onClick={handleClick}
    >
      {icon && icon}
      {buttonTitle}
    </button>
  );
};

export default Button;
