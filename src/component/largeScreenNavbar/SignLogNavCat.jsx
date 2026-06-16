import React from "react";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
import ArrowDropDown from "../ArrowDropDown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignLogNavCat = ({ isSignedIn, getUserAfterSignIN, getUserName }) => {

  const { watchListLinks, myShopLinks } = NavBarLinkListNames();

  const navigate = useNavigate();
  
  return (
    <section className="mt-2 flex justify-between items-center px-5 text-[#1A1D2F]">
      {/* First section has two group of links which are justified between them */}

      {/* first group */}
      <article className="flex gap-6 ">
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

        <div className="flex space-x-4 ml-5">
          <Link to="/giftCards">Gift Cards</Link>
          <Link to="/brandOutlet">Brand Outlet</Link>
          <Link to="/deals">Deals</Link>
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
