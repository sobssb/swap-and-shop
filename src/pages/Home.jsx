import React from "react";
import HeroSection from "../layout/HeroSection";
import HomeCards from "../layout/HomeCards";

const Home = ({ data, fetchError, isLoading }) => {
  // This have all the sections in the homepage i.e the first page that will appear on opening of the site
  // It consist of these
  // Hero Section (Where the banner is located)
  // Home cards displaying different categories

  return (
    <main>
      {/* This is for the carousels */}
      <HeroSection data={data} fetchError={fetchError} isLoading={isLoading} />

      {/* For the cards categories */}
      <HomeCards data={data} fetchError={fetchError} isLoading={isLoading} />
    </main>
  );
};

export default Home;
