import { useState } from "react";
import { Link } from "react-router-dom";
// icons
import { FaAngleDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// ///////////

const SideMenuBarSlide = ({ title, watchListLinks }) => {
  const [slideMenuBar, setSlideMenuBar] = useState(false);

  return (
    <div className="flex justify-between">
      <button
        className="flex grow items-center justify-between cursor-pointer relative"
        onClick={() => setSlideMenuBar(!slideMenuBar)}
      >
        {title}
        <FaAngleDown className="absolute -right-1" />
      </button>

      {slideMenuBar && (
        <div className={`bg-white h-screen shadow-2xl w-75 absolute left-0 z-50 top-0 p-5`}>
          <FaTimes
            className="absolute cursor-pointer"
            onClick={() => setSlideMenuBar(!slideMenuBar)}
          />

          <div className="flex flex-col mt-10 ">
            {watchListLinks.map((link, index) => (
              <Link
                className="hover:bg-[#021cff] hover:text-white px-3"
                to={link.url}
                key={index}
                onClick={() => setSlideMenuBar(!slideMenuBar)}
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
