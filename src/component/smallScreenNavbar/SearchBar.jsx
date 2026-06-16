import { useState } from "react";
import ArrowDropDown from "../ArrowDropDown";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
// icons
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
  return (
    <div className="px-3 my-1 flex grow relative border-y-[.5px] border-slate-200 py-2">
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
          className="overflow-y-scroll z-100"
        />
      </div>
    </div>
  );
};

export default SearchBar;
