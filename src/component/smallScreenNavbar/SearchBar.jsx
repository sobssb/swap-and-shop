import { useState } from "react";
import ArrowDropDown from "../ArrowDropDown";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
import AllProducts from "../../data/AllProducts";
// icons
import { GoArrowUpLeft } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

// ///////////////////////////

const SearchBar = ({ searchResult, setSearchResult, handleSearchSubmit }) => {
  const { allCategories } = NavBarLinkListNames();
  const { todayDeals } = AllProducts();

  const matchedBrand = todayDeals?.map((product) => product.brand);

  const uniqueBrand = [...new Set(matchedBrand)];

  const filterResult = uniqueBrand?.filter((product) =>
    product?.toLowerCase().includes(searchResult?.toLowerCase()),
  );
  return (
    <div className="px-3 my-1 flex grow relative border-y-[.5px] border-slate-200 py-2 z-50 w-full">
      <form action="" className=" flex grow" onSubmit={handleSearchSubmit}>
        <input
          className="border border-slate-500 h-10 w-full pr-35 pl-13 rounded-2xl focus:outline-none"
          type="text"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
          placeholder="Search Anything"
        />

        <button
          className="py-1 w-9 h-8 absolute left-6 top-[50%] -translate-y-[50%]"
          type="submit"
        >
          <IoSearchSharp className="w-full h-full" />
        </button>
      </form>

      <div className="absolute right-7 top-[50%] -translate-y-[50%]">
        <ArrowDropDown
          title="All Categories"
          watchListLinks={allCategories}
          className="overflow-y-scroll [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-thumb]:bg-gray-400  z-1000 -left-15 min-w-50"
        />
      </div>

      {searchResult?.length > 0 && (
        <div className="max-h-100 h-fit bg-gray-100 absolute top-14 p-4 w-[calc(100%-24px)] rounded-2xl text-gray-900 break-all left-[50%] right-[50%] -translate-x-[50%]">
          <ul>
            <li className="flex items-center gap-2.5 justify-start py-2 text-red-950 font-bold">
              Only brand for now, Search bar still under development.
            </li>
            <li className="flex items-center gap-4 justify-start py-2">
              <IoSearchSharp className="text-2xl" />

              {searchResult?.length < 100
                ? `${searchResult}`
                : `${searchResult?.slice(0, 500)}...`}
            </li>

            {filterResult?.length > 0 &&
              filterResult?.map((product, index) => (
                <li
                  className="flex items-center gap-2.5 justify-between py-2 -mx-4 px-4 border-t border-slate-300"
                  key={index}
                >
                  <div className="flex gap-4 items-center justify-between">
                    <IoSearchSharp className="text-2xl" />
                    {product}
                  </div>

                  <GoArrowUpLeft className="text-2xl" />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
