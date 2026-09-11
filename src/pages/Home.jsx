import React from "react";
import HeroSection from "../layout/HeroSection";
import HomeCards from "../layout/HomeCards";
import Nav from "../component/Nav";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Home = ({ data, fetchError, isLoading, handleSearchSubmit }) => {
  // This have all the sections in the homepage i.e the first page that will appear on opening of the site
  // It consist of these
  // Hero Section (Where the banner is located)
  // Home cards displaying different categories

  return (
    <main>
      <Header handleSearchSubmit={handleSearchSubmit} />
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
