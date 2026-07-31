import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDown from "../ArrowDropDown";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
import background from "../../assets/logo.png";
import AllProducts from "../../data/AllProducts";
// icons
import { GoArrowUpLeft } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
// ///////////////////////////

const LogoSearchbarNoti = ({
  addToCart,
  cartList,
  searchResult,
  setSearchResult,
  handleSearchSubmit,
}) => {
  const { allCategories } = NavBarLinkListNames();
  const { todayDeals } = AllProducts();

  const matchedBrand = todayDeals?.map((product) => product.brand);

  const uniqueBrand = [...new Set(matchedBrand)];

  const filterResult = uniqueBrand?.filter((product) =>
    product?.toLowerCase().includes(searchResult?.toLowerCase()),
  );

  return (
    <section className="flex gap-3 items-center border-y-[.5px] border-slate-200 py-3.5 px-5 my-1">
      {/* this is the logo */}
      <button className="rounded-2xl w-25">
        <Link to={"/"}>
          <img src={background} alt="logo" loading="lazy" />
        </Link>
      </button>

      <button className="w-9 h-9">
        <CiLocationOn className="w-full h-full" />
      </button>

      {/* search bar */}
      <div className="flex grow relative z-100">
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
            className="overflow-y-scroll [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-thumb]:bg-gray-400  z-1000 -left-15 min-w-50"
          />
        </div>

        {searchResult?.length > 0 && (
          <div className="max-h-100 h-fit bg-gray-100 absolute top-13 w-full p-4 rounded-2xl text-gray-900 break-all">
            <ul>
              <li className="flex items-center gap-2.5 justify-start py-2 text-red-950 font-bold">
                Only brand for now, Search bar still under development.
              </li>
              <li className="flex items-center gap-4 justify-start py-2">
                <IoSearchSharp className="text-2xl" />

                {searchResult?.length < 100
                  ? `${searchResult}`
                  : `${searchResult?.slice(0, 500)}...`}
              </li>

              {filterResult?.length > 0 &&
                filterResult?.map((product, index) => (
                  <li
                    className="flex items-center gap-2.5 justify-between py-2 -mx-4 px-4 border-t border-slate-300"
                    key={index}
                  >
                    <div className="flex gap-4 items-center justify-between">
                      <IoSearchSharp className="text-2xl" />
                      {product}
                    </div>

                    <GoArrowUpLeft className="text-2xl" />
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      <button className="w-9 h-9">
        <CiMoneyCheck1 className="w-full h-full" />
      </button>

      <button className="w-9 h-9 relative">
        <IoNotificationsSharp className="w-full h-full text-center" />
        <div className="w-6 h-6 bg-[#F0C808] text-[0.8rem] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
          0
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
