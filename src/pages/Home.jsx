import React from "react";
import HeroSection from "../layout/HeroSection";
import HomeCards from "../layout/HomeCards";
import Nav from "../component/Nav";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Home = ({
  data,
  fetchError,
  isLoading,
  getUserAfterSignIN,
  isSignedIn,
  addToCart,
  cartList,
  searchResult,
  setSearchResult,
  sideMenubar,
  setSideMenubar,
  handleSearchSubmit,
  getUserName,
  sideMenu
}) => {
  // This have all the sections in the homepage i.e the first page that will appear on opening of the site
  // It consist of these
  // Hero Section (Where the banner is located)
  // Home cards displaying different categories

  return (
    <main>
      <Header
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
      {/* This is for the carousels */}

      <HeroSection data={data} fetchError={fetchError} isLoading={isLoading} />

      {/* For the cards categories */}
      <HomeCards data={data} fetchError={fetchError} isLoading={isLoading} />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
