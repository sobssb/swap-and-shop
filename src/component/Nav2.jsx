import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDown from "./ArrowDropDown";
import NavBarLinkListNames from "../data/NavBarLinkListNames";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
import SideMenuBarSlide from "./SideMenuBarSlide";
import LinkCategories from "./LinkCategories";

import SignLogNavCat from "./largeScreenNavbar/SignLogNavCat";
import LogoSearchbarNoti from "./largeScreenNavbar/LogoSearchbarNoti";

import LogoNotification from "./smallScreenNavbar/LogoNotification";
import SearchBar from "./smallScreenNavbar/SearchBar";
import SideBar from "./smallScreenNavbar/SideBar";

// icons
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
// ///////////////////////////

const Nav2 = () => {
  const sideMenu = useDetectOutsideClick(() => setSideMenubar(false));
  const [sideMenubar, setSideMenubar] = useState(false);

  return (
    // For large screens
    <div>
      {/* TODO: add nav links and styling 
      These contains the logo and the nav
      links and a search bar */}
      <nav className="hidden lg:flex justify-between flex-col">
        <SignLogNavCat />
        <LogoSearchbarNoti
          sideMenubar={sideMenubar}
          setSideMenubar={setSideMenubar}
        />
        <LinkCategories />
      </nav>

      {/* Mobile view */}
      <nav
        className="lg:hidden flex justify-between flex-col relative"
        ref={sideMenu}
      >
        <div>
          <LogoNotification
            sideMenubar={sideMenubar}
            setSideMenubar={setSideMenubar}
          />
          <SearchBar />
          <LinkCategories />
        </div>
        <SideBar
          sideMenu={sideMenu}
          sideMenubar={sideMenubar}
          setSideMenubar={setSideMenubar}
        />
      </nav>
    </div>
  );
};

export default Nav2;
