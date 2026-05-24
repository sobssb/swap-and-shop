import React from "react";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
import ArrowDropDown from "../ArrowDropDown";
import { Link } from "react-router-dom";

const SignLogNavCat = () => {
  const { watchListLinks, myShopLinks } = NavBarLinkListNames();
  return (
    <section className="mt-5 flex justify-between items-center px-5 text-[#1A1D2F]">
      {/* First Section */}

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
  );
};

export default SignLogNavCat;
