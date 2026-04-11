import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDown from "./ArrowDropDown";
import NavBarLinkListNames from "../data/NavBarLinkListNames";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

const Nav = () => {
  const { watchListLinks, myShopLinks, allCategories } = NavBarLinkListNames();
  const [searchResult, setSearchResult] = useState("");

  return (
    // TODO: add nav links and styling
    // This contains the logo and the nav links and a search bar
    <nav className="flex justify-between flex-col">
      {/* This has three sections. First for the links. Second for the logo, location, search bar, some categories, currency and some icons. Third contains some categories navigation */}

      {/* First Section */}
      <section className="mt-5 mb-1 flex justify-between items-center px-5 text-[#1A1D2F]">
        {/* First section has two group of links which are justigied between them */}

        {/* first group */}
        <article className="flex gap-2 ">
          <div>
            <p>
              Hi
              <span className="text-[#021cff] underline">
                <Link to="profile"> Sign in </Link>
              </span>
              or
              <span className="text-[#021cff] underline">
                <Link to="/profile/createAccount"> Create Account</Link>
              </span>
            </p>
          </div>

          <div className="flex space-x-4 ml-5">
            <Link to="giftCards">Gift Cards</Link>
            <Link to="brandOutlet">Brand Outlet</Link>
            <Link to="deals">Deals</Link>
            <Link to="customerService">Customer Service</Link>
            <Link to="helpContact">Help & Contact</Link>
          </div>
        </article>

        {/* Second group */}
        <article className="flex space-x-4 ml-5">
          <Link to="sell">Sell</Link>
          <ArrowDropDown title="Watch List" watchListLinks={watchListLinks} />
          <ArrowDropDown title="My shop" watchListLinks={myShopLinks} />
        </article>
      </section>

      {/* Second Section */}

      <section className="flex gap-3 items-center border-y-[.5px] border-slate-200 py-3.5 px-5">
        {/* this is the logo */}
        <button className="rounded-2xl border border-solid border-slate-200 px-4 py-1 w-35 h-13">
          My Logo
        </button>

        <button className="w-10 h-10">
          <MdFavoriteBorder className="w-full h-full" />
        </button>

        {/* search bar */}
        <div className="flex grow relative">
          <form action="" className=" flex grow">
            <input
              className="border border-slate-500 h-13 w-full pr-49 pl-13 rounded-4xl text-3xl focus:outline-none"
              type="text"
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
              placeholder="Search Anyting"
            />

            <button className="py-1 w-10 h-10 absolute left-3 top-[50%] -translate-y-[50%]" type="submit">
              <IoSearchSharp
                className="w-full h-full"
              />
            </button>
          </form>
          

          <div className="absolute right-3 top-[50%] -translate-y-[50%] text-2xl">
            <ArrowDropDown
              title="All Categories"
              watchListLinks={allCategories}
            />
          </div>
        </div>

        <button className="w-10 h-10">
          <MdFavoriteBorder className="w-full h-full" />
        </button>

        <button className="w-10 h-10 relative">
          <IoNotificationsSharp className="w-full h-full text-center" />
          <div className="w-6 h-6 bg-[#F0C808] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">1+</div>
        </button>

        <button className="w-10 h-10 relative">
          <BsCart4 className="w-full h-full text-center" />
          <div className="w-6 h-6 bg-[#F0C808] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">1+</div>
        </button>
      </section>

      {/* Third Section */}
      <section className="flex space-x-12 mb-5 mt-2 py-2 px-5 items-center justify-center bg-slate-200">
        <Link to="deals">Saved</Link>
        <Link to="brandOutlet">Electronics</Link>
        <Link to="giftCards">Motors</Link>
        <Link to="helpContact">Fashion</Link>
        <Link to="customerService">Collectables & Art</Link>
        <Link to="customerService">Sports</Link>
        <Link to="customerService">Health & Beauty</Link>
        <Link to="customerService">Industrial Equipment</Link>
        <Link to="customerService">Home & Garden</Link>
      </section>
    </nav>
  );
};

export default Nav;
