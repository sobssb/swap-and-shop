import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDown from "./ArrowDropDown";
import NavBarLinkListNames from "../data/NavBarLinkListNames";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
import SideMenuBarSlide from "./SideMenuBarSlide";
// icons
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import LinkCategories from "./LinkCategories";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
// ///////////////////////////

const Nav = () => {
  const { watchListLinks, myShopLinks, allCategories } = NavBarLinkListNames();
  const sideMenu = useDetectOutsideClick(() => setSideMenubar(false));
  const [searchResult, setSearchResult] = useState("");
  const [sideMenubar, setSideMenubar] = useState(false);

  return (
    // For large screens
    <div>
      {/* TODO: add nav links and styling 
      These contains the logo and the nav
      links and a search bar */}
      <nav className="hidden lg:flex justify-between flex-col">
        {/* This has three sections. First for the links. Second for the logo, location, search bar, some categories, currency and some icons. Third contains some categories navigation */}

        {/* First Section */}
        <section className="mt-5 flex justify-between items-center px-5 text-[#1A1D2F]">
          {/* First section has two group of links which are justified between them */}

          {/* first group */}
          <article className="flex gap-2 ">
            <div>
              <p>
                Hi
                <span className="text-[#021cff] underline">
                  <Link to="/profile"> Sign in </Link>
                </span>
                or
                <span className="text-[#021cff] underline">
                  <Link to="/profile/createAccount"> Create Account</Link>
                </span>
              </p>
            </div>

            <div className="flex space-x-4 ml-5">
              <Link to="/giftCards">Gift Cards</Link>
              <Link to="/brandOutlet">Brand Outlet</Link>
              <Link to="/deals">Deals</Link>
              <Link to="/customerService">Customer Service</Link>
              <Link to="/helpContact">Help & Contact</Link>
            </div>
          </article>

          {/* Second group */}
          <article className="flex space-x-4 ml-5">
            <Link to="/sell">Sell</Link>
            <ArrowDropDown title="Watch List" watchListLinks={watchListLinks} />
            <ArrowDropDown title="My shop" watchListLinks={myShopLinks} />
          </article>
        </section>

        {/* Second Section */}

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

        {/* Third Section */}
        <LinkCategories />
      </nav>
      {/* //////////////////////////////////////////// */}

      {/* For mobile view */}
      <nav
        className="lg:hidden flex justify-between flex-col relative"
        ref={sideMenu}
      >
        <div>
          <section className="mt-5 flex justify-between items-center px-3 text-[#1A1D2F]">
            {/* First section has two group of links which are justified between them */}
            <article className="flex gap-2 items-center">
              <button
                className="w-6 h-6 relative"
                onClick={() => setSideMenubar(!sideMenubar)}
              >
                <RxHamburgerMenu className="w-full h-full text-center" />
              </button>

              <button className="rounded-2xl border border-solid border-slate-200 px-4 py-1 w-35 h-9">
                <Link to={"/"}>My Logo</Link>
              </button>
            </article>

            {/* Second segment */}
            <article className="flex gap-2 items-center">
              <button className="w-6 h-6">
                <RiContactsLine className="w-full h-full" />
              </button>

              <button className="w-6 h-6 relative">
                <IoNotificationsSharp className="w-full h-full text-center" />
                <div className="w-5 h-5 bg-[#F0C808] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
                  1+
                </div>
              </button>

              <button className="w-6 h-6 relative">
                <BsCart4 className="w-full h-full text-center" />
                <div className="w-5 h-5 bg-[#F0C808] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
                  1+
                </div>
              </button>
            </article>
          </section>

          {/* search bar */}

          <div className="px-3 my-2 flex grow relative border-y-[.5px] border-slate-200 py-2">
            <form action="" className=" flex grow">
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
              />
            </div>
          </div>

          {/* Third Section */}
          <LinkCategories />
        </div>
        {/* ////////////////// */}

        {/* side menu bar */}
          {sideMenubar && (
            <section className="absolute bg-white h-screen shadow-2xl flex w-75 flex-col p-5">
              <article
                className="flex items-center justify-between mb-10"
                onClick={() => setSideMenubar(!sideMenubar)}
              >
                <button className="rounded-2xl border border-solid border-slate-200 px-4 py-1 w-35 h-9">
                  <Link to={"/"}>My Logo</Link>
                </button>

                <button
                  className="w-6 h-6 relative"
                  onClick={() => setSideMenubar(!sideMenubar)}
                >
                  <FaTimes className="w-full h-full text-center" />
                </button>
              </article>

              {/* first group */}
              <article
                className="flex flex-col "
                onClick={() => setSideMenubar(!sideMenubar)}
              >
                <div className="mb-2">
                  <p>
                    Hi
                    <span className="text-[#021cff] underline">
                      <Link to="/profile"> Sign in </Link>
                    </span>
                    or
                    <span className="text-[#021cff] underline">
                      <Link to="/profile/createAccount"> Create Account</Link>
                    </span>
                  </p>
                </div>

                <div className="flex gap-2 flex-col">
                  <Link to="/giftCards">Gift Cards</Link>
                  <Link to="/brandOutlet">Brand Outlet</Link>
                  <Link to="/deals">Deals</Link>
                  <Link to="/customerService">Customer Service</Link>
                  <Link to="/helpContact">Help & Contact</Link>
                </div>
              </article>

              {/* Second group */}
              <article className="flex gap-2 flex-col">
                <Link
                  onClick={() => setSideMenubar(!sideMenubar)}
                  to="/sell"
                  className="mt-2"
                >
                  Sell
                </Link>
                <SideMenuBarSlide
                  title={"Watch List"}
                  watchListLinks={watchListLinks}
                />
                <SideMenuBarSlide
                  title="My shop"
                  watchListLinks={myShopLinks}
                />
              </article>
            </section>
          )}
      </nav>
    </div>

    // Mobile view
  );
};

export default Nav;
