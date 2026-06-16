import { useNavigate } from "react-router-dom";
import LinkCategories from "./LinkCategories";
import LogoNotification from "./smallScreenNavbar/LogoNotification";
import SideBar from "./smallScreenNavbar/SideBar";
import SearchBar from "./smallScreenNavbar/SearchBar";
import LogoSearchbarNoti from "./largeScreenNavbar/LogoSearchbarNoti";
import SignLogNavCat from "./largeScreenNavbar/SignLogNavCat";

const Nav = ({
  addToCart,
  getUserAfterSignIN,
  isSignedIn,
  cartList,
  searchResult,
  setSearchResult,
  sideMenubar,
  setSideMenubar,
  getUserName,
  handleSearchSubmit,
  sideMenu,
}) => {
  const navigate = useNavigate();

  return (
    // For large screens
    <div>
      {/* TODO: add nav links and styling 
      These contains the logo and the nav
      links and a search bar */}
      <nav className="hidden lg:flex justify-between flex-col">
        {/* This has three sections. First for the links. Second for the logo, location, search bar, some categories, currency and some icons. Third contains some categories navigation */}

        {/* First Section */}
        <SignLogNavCat
          getUserName={getUserName}
          isSignedIn={isSignedIn}
          getUserAfterSignIN={getUserAfterSignIN}
        />

        {/* Second Section */}
        <LogoSearchbarNoti
          addToCart={addToCart}
          cartList={cartList}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          handleSearchSubmit={handleSearchSubmit}
        />

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
          <LogoNotification
            addToCart={addToCart}
            cartList={cartList}
            sideMenubar={sideMenubar}
            setSideMenubar={setSideMenubar}
          />

          {/* search bar */}
          <SearchBar
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            handleSearchSubmit={handleSearchSubmit}
          />

          {/* Third Section */}
          <LinkCategories />
        </section>
        {/* ////////////////// */}

        {/* side menu bar */}
        <SideBar
          sideMenubar={sideMenubar}
          setSideMenubar={setSideMenubar}
          isSignedIn={isSignedIn}
          getUserAfterSignIN={getUserAfterSignIN}
          getUserName={getUserName}
        />
      </nav>
    </div>
  );
};

export default Nav;
