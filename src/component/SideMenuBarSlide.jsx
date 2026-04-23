import { useState } from "react";
import NavBarLinkListNames from "../data/NavBarLinkListNames";
import { Link } from "react-router-dom";
// icons
import { FaAngleDown } from "react-icons/fa";
// ///////////

const SideMenuBarSlide = ({ title, watchListLinks }) => {
  const [slideMenuBar, setSlideMenubar] = useState(false);

  return (
    <div className="flex justify-between">
      <button
        className="flex grow items-center justify-between cursor-pointer relative"
        onClick={() => setSlideMenubar(!slideMenuBar)}
      >
        {title}
        <FaAngleDown className="absolute -right-1" />
      </button>

      {slideMenuBar && (
        <div className="bg-white h-screen shadow-2xl w-75 absolute left-0 z-50 top-0 p-5">
          <FaAngleDown
            className="absolute cursor-pointer"
            onClick={() => setSlideMenubar(!slideMenuBar)}
          />

          <div className="flex flex-col mt-10 ">
            {watchListLinks.map((link, index) => (
              <Link
                className="hover:bg-[#021cff] hover:text-white px-3"
                to={link.url}
                key={index}
                onClick={() => setSlideMenubar(!slideMenuBar)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenuBarSlide;
