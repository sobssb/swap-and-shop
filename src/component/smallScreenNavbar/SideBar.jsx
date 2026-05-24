import React from "react";
import SideMenuBarSlide from "../SideMenuBarSlide";

const SideBar = ({ sideMenubar, setSideMenubar }) => {
  return (
    <>
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
            <SideMenuBarSlide title="My shop" watchListLinks={myShopLinks} />
          </article>
        </section>
      )}
    </>
  );
};

export default SideBar;
