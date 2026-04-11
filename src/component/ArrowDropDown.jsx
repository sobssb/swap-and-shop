import { Link } from "react-router-dom";
import {useState } from "react";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
import { FaAngleDown } from "react-icons/fa";

// Created this reuseable component for the purpose of the watch list and my shop which has some multiple values. 

const ArrowDropDown = ({ title, watchListLinks }) => {
  const [showSelect, setShowSelect] = useState(false);
  const dropdownRef = useDetectOutsideClick(() => setShowSelect(false));

  return (
    <div className="relative flex w-fit z-10" ref={dropdownRef}>
      <button className="flex items-center justify-center cursor-pointer" onClick={() => setShowSelect(!showSelect)}>{title} <FaAngleDown /></button>

          {showSelect && (
            <div className="absolute top-7.5 -left-10 bg-white -m-1 flex flex-col w-fit py-2 items-center justify-center z-5 rounded-1xl shadow-2xl">
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
