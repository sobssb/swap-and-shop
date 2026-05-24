import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDown from "../ArrowDropDown";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
import SideMenuBarSlide from "../SideMenuBarSlide";
import LinkCategories from "../LinkCategories"; // icons
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
// ///////////////////////////

const LogoNotification = ({ sideMenubar, setSideMenubar }) => {
  return (
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
  );
};

export default LogoNotification;
