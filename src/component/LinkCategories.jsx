import { useState } from "react";
import NavBarLinkListNames from "../data/NavBarLinkListNames";
import { Link } from "react-router-dom";

const LinkCategories = () => {
  const { navCategories } = NavBarLinkListNames();
  const [showCategory, setShowCategory] = useState(null);

  return (
    <section
      className="flex space-x-8 mb-5 mt-2 py-2 px-5 items-center justify-center bg-slate-200 relative z-1"
      onMouseLeave={() => setShowCategory(null)}
    >
      <Link to="/deals">Saved</Link>

      {navCategories.map((linkName, index) => (
        <Link
          onMouseEnter={() => setShowCategory(linkName)}
          to={linkName.url}
          key={index}
        >
          {linkName.name}
        </Link>
      ))}

      {showCategory && (
        <div
          onMouseLeave={() => setShowCategory(null)}
          className="absolute bg-white shadow-2xl z-2 min-w-[90%] p-3 flex flex-row gap-3 items-start justify-between rounded-3xl mt-[16rem]"
        >
          <div className="flex flex-col w-[25%]">
            <h2 className="mb-2 text-2xl">The Most Popular</h2>
            {showCategory.popular.map((category, index) => (
              <Link to={"/"} key={index}>
                {category}
              </Link>
            ))}
          </div>

          <div className="flex flex-col w-[25%]">
            <h2 className="mb-2 text-2xl">More Categories</h2>
            {showCategory.categories.map((category, index) => (
              <Link to={"/"} key={index}>
                {category}
              </Link>
            ))}
          </div>

          <div className="w-[50%] h-full border border-blue-300"></div>
        </div>
      )}
    </section>
  );
};

export default LinkCategories;
