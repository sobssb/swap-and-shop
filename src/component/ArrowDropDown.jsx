import { Link } from "react-router-dom";
import { useState } from "react";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
import { FaAngleDown } from "react-icons/fa";

// Created this reuseable component for the purpose of the watch list and my shop which has some multiple values.
// it also used in the all categories aspect

const ArrowDropDown = ({ title, watchListLinks, className }) => {
  const [showSelect, setShowSelect] = useState(false);
  const dropdownRef = useDetectOutsideClick(() => setShowSelect(false));

  return (
    <div className="relative flex w-fit z-900" ref={dropdownRef}>
      <button
        className="flex items-center justify-center cursor-pointer"
        onClick={() => setShowSelect(!showSelect)}
      >
        {title} <FaAngleDown />
      </button>
      {showSelect && (
        <div
          className={`absolute z-1000 top-7.5 bg-white -m-1 flex flex-col w-fit py-2 items-center justify-center rounded-1xl shadow-2xl  overflow-y-scroll [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-thumb]:bg-gray-400 -left-15  min-w-50 ${className}`}
        >
          {watchListLinks.map((links, index) => (
            <Link
              className="block hover:bg-[#021cff] hover:text-white w-full px-3"
              to={links.url}
              key={index}
              onClick={() => setShowSelect(false)}
            >
              {links.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArrowDropDown;
