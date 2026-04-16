import React from "react";
import HeroSection from "../layout/HeroSection";

const Home = ({ data, fetchError, isLoading }) => {
  return (
    <main>
      <HeroSection data={data} fetchError={fetchError} isLoading={isLoading} />
    </main>
  );
};

export default Home;
 