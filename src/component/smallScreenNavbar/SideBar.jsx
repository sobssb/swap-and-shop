import React from "react";
import { Link } from "react-router-dom";
import SideMenuBarSlide from "../SideMenuBarSlide";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
import background from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
// icons
import { FaTimes } from "react-icons/fa";

const SideBar = ({
  sideMenubar,
  setSideMenubar,
  isSignedIn,
  getUserAfterSignIN,
  getUserName,
}) => {
  const { watchListLinks, myShopLinks } = NavBarLinkListNames();
  const navigate = useNavigate();

  return (
    <div
      className={`${sideMenubar ? `translate-x-0` : `-translate-x-full`}  absolute transition-all duration-300 ease-in-out bg-white h-screen shadow-2xl  w-75 flex-col p-5 z-100`}
    >
      {/* side menu bar */}
      {sideMenubar && (
        <section className="">
          <article
            className="flex items-center justify-between mb-5"
            onClick={() => setSideMenubar(!sideMenubar)}
          >
            <button className="rounded-2xl w-25">
              <Link to={"/"}>
                <img src={background} alt="logo" loading="lazy" />
              </Link>
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
            <div className="mb-5 ">
              {isSignedIn &&
              getUserAfterSignIN &&
              Object.keys(getUserAfterSignIN).length > 0 ? (
                <p className="font-bold bg-blue-800 text-white -mx-5 py-2 pl-5">
                  Hi,{" "}
                  <span
                    onClick={() => {
                      navigate("/profile");
                    }}
                    className="cursor-pointer"
                  >
                    {getUserName}
                    {"!"}
                  </span>
                </p>
              ) : (
                <p>
                  Hi
                  <span className="text-[#021cff]  underline">
                    <Link to="/profile"> Sign in </Link>
                  </span>
                  or
                  <span className="text-[#021cff] underline">
                    <Link to="/profile/createAccount"> Create Account</Link>
                  </span>
                </p>
              )}
            </div>

            <div className="flex gap-2 flex-col border-b-2 border-slate-600 -mx-5 pl-5 mb-5 text-[1.3rem]">
              <Link to="/giftCards">Gift Cards</Link>
              <Link to="/brandOutlet">Brand Outlet</Link>
              <Link to="/deals">Deals</Link>
              <Link to="/helpContact">Help & Contact</Link>
              <Link to="/swap">Swap</Link>
              <Link to="/sell">Sell</Link>
            </div>
          </article>

          {/* Second group */}
          <article className="flex gap-2 flex-col border-b-2 border-slate-600 -mx-5 px-5 pb-2 text-[1.3rem]">
            <SideMenuBarSlide
              title={"Watch List"}
              watchListLinks={watchListLinks}
            />
            <SideMenuBarSlide title="My shop" watchListLinks={myShopLinks} />
          </article>
        </section>
      )}
    </div>
  );
};

export default SideBar;
