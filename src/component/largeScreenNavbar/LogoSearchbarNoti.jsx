import {useState} from "react";
import { Link } from "react-router-dom";
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

const LogoSearchbarNoti = () => {
  const {allCategories } = NavBarLinkListNames();
  const [searchResult, setSearchResult] = useState("");
  return (
    <section className="flex gap-3 items-center border-y-[.5px] border-slate-200 py-3.5 px-5 my-2">
      {/* this is the logo */}
      <button className="rounded-2xl border border-solid border-slate-200 px-4 py-1 w-35 h-13">
        <Link to={"/"}>My Logo</Link>
      </button>

      <button className="w-9 h-9">
        <CiLocationOn className="w-full h-full" />
      </button>

      {/* search bar */}
      <div className="flex grow relative">
        <form action="" className=" flex grow">
          <input
            className="border border-slate-500 w-full pr-49 pl-13 text-2xl focus:outline-none h-10  rounded-2xl"
            type="text"
            value={searchResult}
            onChange={(e) => setSearchResult(e.target.value)}
            placeholder="Search Anything"
          />

          <button
            className="py-1 w-10 h-10 absolute left-3 top-[50%] -translate-y-[50%]"
            type="submit"
          >
            <IoSearchSharp className="w-full h-full" />
          </button>
        </form>

        <div className="absolute right-3 top-[50%] -translate-y-[50%]">
          <ArrowDropDown
            title="All Categories"
            watchListLinks={allCategories}
          />
        </div>
      </div>

      <button className="w-9 h-9">
        <CiMoneyCheck1 className="w-full h-full" />
      </button>

      <button className="w-9 h-9 relative">
        <IoNotificationsSharp className="w-full h-full text-center" />
        <div className="w-6 h-6 bg-[#F0C808] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
          1+
        </div>
      </button>

      <button className="w-9 h-9 relative">
        <BsCart4 className="w-full h-full text-center" />
        <div className="w-6 h-6 bg-[#F0C808] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
          1+
        </div>
      </button>
    </section>
  );
};

export default LogoSearchbarNoti;
