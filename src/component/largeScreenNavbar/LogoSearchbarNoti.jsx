import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDown from "../ArrowDropDown";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
import background from "../../assets/logo.png";
// icons
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
// ///////////////////////////

const LogoSearchbarNoti = ({
  addToCart,
  cartList,
  searchResult,
  setSearchResult,
  handleSearchSubmit,
}) => {
  const { allCategories } = NavBarLinkListNames();
  return (
    <section className="flex gap-3 items-center border-y-[.5px] border-slate-200 py-3.5 px-5 my-1">
      {/* this is the logo */}
      <button className="rounded-2xl w-25">
        <Link to={"/"}>
          <img src={background} alt="logo" />
        </Link>
      </button>

      <button className="w-9 h-9">
        <CiLocationOn className="w-full h-full" />
      </button>

      {/* search bar */}
      <div className="flex grow relative">
        <form action="" className=" flex grow" onSubmit={handleSearchSubmit}>
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
        <div className="w-6 h-6 bg-[#F0C808] text-[0.8rem] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
          1+
        </div>
      </button>

      <button className="w-9 h-9 relative">
        <Link to="/cart">
          <BsCart4 className="w-full h-full text-center" />
        </Link>
        <div className="w-6 h-6 bg-[#F0C808] text-[0.8rem] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
          {addToCart}
          {cartList?.length > 9 && "+"}
        </div>
      </button>
    </section>
  );
};

export default LogoSearchbarNoti;
