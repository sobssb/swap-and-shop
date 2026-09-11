import { useNavigate } from "react-router-dom";
import LinkCategories from "./LinkCategories";
import LogoNotification from "./smallScreenNavbar/LogoNotification";
import SideBar from "./smallScreenNavbar/SideBar";
import SearchBar from "./smallScreenNavbar/SearchBar";
import LogoSearchbarNoti from "./largeScreenNavbar/LogoSearchbarNoti";
import SignLogNavCat from "./largeScreenNavbar/SignLogNavCat";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
import { useStoreActions, useStoreState } from "easy-peasy";

const Nav = ({ handleSearchSubmit }) => {
  const navigate = useNavigate();
  const setSideMenubar = useStoreActions(
    (actions) => actions.setSideMenubar,
  );
  const sideMenu = useDetectOutsideClick(() => setSideMenubar(false));

  const getUserAfterSignIN = useStoreState((state) => state.getUserAfterSignIN);
  const getUserName = getUserAfterSignIN?.userName?.trim()?.toUpperCase() || "";

  const sideMenubar = useStoreState((state) => state.sideMenubar);

  const addToCart = useStoreState((state) => state.addToCart);

  const isSignedIn = useStoreState((state) => state.isSignedIn);

  const cartList = useStoreState((state) => state.cartList);

  return (
    // For large screens
    <div>
      {sideMenubar && (
        <div className=" bg-black min-h-screen w-full opacity-60 fixed top-0 z-90"></div>
      )}
      {/* TODO: add nav links and styling 
      These contains the logo and the nav
      links and a search bar */}
      <nav className="hidden lg:flex justify-between flex-col">
        {/* This has three sections. First for the links. Second for the logo, location, search bar, some categories, currency and some icons. Third contains some categories navigation */}

        {/* First Section */}
        <SignLogNavCat />

        {/* Second Section */}
        <LogoSearchbarNoti handleSearchSubmit={handleSearchSubmit} />

        {/* Third Section */}
        <LinkCategories />
      </nav>
      {/* //////////////////////////////////////////// */}

      {/* For mobile view */}
      <nav
        className="lg:hidden flex justify-between flex-col relative"
        ref={sideMenu}
      >
        <section>
          <LogoNotification />

          {/* search bar */}
          <SearchBar handleSearchSubmit={handleSearchSubmit} />

          {/* Third Section */}
          <LinkCategories />
        </section>
        {/* ////////////////// */}

        {/* side menu bar */}
        <SideBar />
      </nav>
    </div>
  );
};

export default Nav;
