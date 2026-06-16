import React from "react";
import Nav from "../component/Nav";

const Header = ({
  addToCart,
  getUserAfterSignIN,
  isSignedIn,
  cartList,
  searchResult,
  setSearchResult,
  sideMenubar,
  setSideMenubar,
  handleSearchSubmit,
  getUserName,
  sideMenu
}) => {
  // this is the hearder of the site containing just the nav bar
  return (
    <header className="sticky top-0 bg-white z-20">
      <Nav
        addToCart={addToCart}
        isSignedIn={isSignedIn}
        getUserAfterSignIN={getUserAfterSignIN}
        cartList={cartList}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        sideMenubar={sideMenubar}
        setSideMenubar={setSideMenubar}
        handleSearchSubmit={handleSearchSubmit}
        getUserName={getUserName}
        sideMenu={sideMenu}
      />
    </header>
  );
};

export default Header;
