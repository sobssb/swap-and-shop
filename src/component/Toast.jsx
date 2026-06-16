import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Toast = ({
  countDown,
  header,
  phrase,
  title1,
  title2,
  icon,
  buttonIcon,
  handleFirstClick,
  handleSecondClick,
  className,
}) => {
  return (
    // Toast component for different confirmation
    <main
      className={`fixed w-73 h-fit bg-white shadow-2xl top-1/2 left-1/2 -translate-1/2 text-black p-2 z-10 grid place-content-center rounded-lg ${className}`}
    >
      {/* Count down */}
      <div className="justify-self-end mt-2 -mb-5 bg-red-800  w-6 h-6 text-center text-white  rounded-[50%]">
        {countDown}
      </div>
      <button className="mx-auto w-7 mt-3">{icon}</button>
      <h2 className="text-[1rem] font-bold text-center">{header}</h2>

      <p className="mx-auto">{phrase}</p>

      <section
        className={`flex justify-between items-center  rounded-lg w-full f mb-3 mt-4 mx-auto ${title2 ? "gap-3" : null}`}
      >
        <button
          className={`bg-gray-200 text-black p-1 rounded-lg ${title2 ? `grow` : `w-full`}`}
          onClick={handleFirstClick}
        >
          {title1}
        </button>
        <div className="bg-red-800 rounded-lg grow text-white">
          {title2 && (
            <button
              className="flex justify-between items-center gap-1  rounded-lg  p-1 m-auto"
              onClick={handleSecondClick}
            >
              {buttonIcon}
              {title2}
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Toast;
``;
