import { useState } from "react";
import NavBarLinkListNames from "../data/NavBarLinkListNames";
import { Link } from "react-router-dom";

const LinkCategories = () => {
  const { navCategories } = NavBarLinkListNames();
  const [showCategory, setShowCategory] = useState(null);
  const [showCategoryHidden, setShowCategoryHidden] = useState(true);

  const handleMouseEnter = (linkName) => {
    setShowCategory(linkName);
    setShowCategoryHidden(true);
  };

  return (
    <div>
      <section
        className="hidden lg:flex space-x-8 mb-5 mt-2 py-2 px-5 items-center justify-center bg-slate-200 relative w-full"
        onMouseLeave={() => setShowCategory(null)}
      >
        <Link to="/deals" onMouseEnter={() => setShowCategory(null)}>
          Saved
        </Link>
        {navCategories.map((linkName, index) => (
          <Link
            className="mr-6"
            onMouseEnter={() => handleMouseEnter(linkName)}
            to={linkName.url}
            key={index}
          >
            {linkName.name}
          </Link>
        ))}

        {showCategory && showCategoryHidden && (
          <div
            onMouseLeave={() => setShowCategory(null)}
            className="absolute bg-white shadow-2xl w-[90%] p-5 flex flex-row gap-3 items-start  rounded-3xl top-9 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col w-[25%]">
              <h2 className="mb-2 text-2xl">The Most Popular</h2>
              {showCategory.popular.map((category, index) => (
                <Link
                  to={"/"}
                  key={index}
                  className="hover:bg-[#021cff] hover:text-white p-1"
                  onClick={() => setShowCategoryHidden(false)}
                >
                  {category}
                </Link>
              ))}
            </div>

            <div className="flex flex-col w-[25%]">
              <h2 className="mb-2 text-2xl">More Categories</h2>
              {showCategory.categories.map((category, index) => (
                <Link
                  to={"/"}
                  key={index}
                  className="hover:bg-[#021cff] hover:text-white p-1"
                  onClick={() => setShowCategoryHidden(false)}
                >
                  {category}
                </Link>
              ))}
            </div>

            <div className="w-[50%] h-fit border border-solid-2 border-blue-300"></div>
          </div>
        )}
      </section>

      {/* mobile */}
      <section className="lg:hidden flex gap-4 mb-5 mt-2 py-2 px-5 items-center bg-slate-200 relative w-full overflow-x-auto flex-nowrap no-srollbar justify-between">
        <Link to="/deals">Saved</Link>
        {navCategories.map((linkName, index) => (
          <Link className="whitespace-nowrap" to={linkName.url} key={index}>
            {linkName.name}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default LinkCategories;
