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
      className={`${sideMenubar ? `flex` : `hidden`}  absolute bg-white h-screen shadow-2xl  w-75 flex-col p-5`}
    >
      {/* side menu bar */}
      {sideMenubar && (
        <section className="">
          <article
            className="flex items-center justify-between mb-10"
            onClick={() => setSideMenubar(!sideMenubar)}
          >
            <button className="rounded-2xl w-25">
              <Link to={"/"}>
                <img src={background} alt="logo" />
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
            <div>
              {isSignedIn &&
              getUserAfterSignIN &&
              Object.keys(getUserAfterSignIN).length > 0 ? (
                <p className="font-bold">
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
                  <span className="text-[#021cff] underline">
                    <Link to="/profile"> Sign in </Link>
                  </span>
                  or
                  <span className="text-[#021cff] underline">
                    <Link to="/profile/createAccount"> Create Account</Link>
                  </span>
                </p>
              )}
            </div>

            <div className="flex gap-2 flex-col">
              <Link to="/giftCards">Gift Cards</Link>
              <Link to="/brandOutlet">Brand Outlet</Link>
              <Link to="/deals">Deals</Link>
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
            <SideMenuBarSlide title="My shop" watchListLinks={myShopLinks} />
          </article>
        </section>
      )}
    </div>
  );
};

export default SideBar;
