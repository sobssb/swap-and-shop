import React from "react";
import { Link } from "react-router-dom";
import HomeCardBanner from "../component/HomeCardBanner";
import HomeCardSection from "../component/HomeCardSection";

const HomeCards = ({ data, fetchError, isLoading }) => {
  // This a the list of cards categories
  const homeCard = data
    ? data.filter((card) => card.hashTag === "homecard")
    : [];
  const homeCardSections = [
    { name: "first", item: homeCard.slice(0, 9) },
    { name: "second", item: homeCard.slice(9, 12) },
    { name: "third", item: homeCard.slice(12, 15) },
    { name: "forth", item: homeCard.slice(15) },
  ];

  const homeCardBanner = [
    {
      name: "first banner",
      item: data.find((card) => card.hashTag === "homeslide"),
    },
    {
      name: "second banner",
      item: data.find((card) => card.hashTag === "homeslide2"),
    },
    {
      name: "third banner",
      item: data.find((card) => card.hashTag === "homeslide3"),
    },
    {
      name: "fourth banner",
      item: data.find((card) => card.hashTag === "homeslide4"),
    },
    {
      name: "fifth banner",
      item: data.find((card) => card.hashTag === "homeslide5"),
    },
  ];

  return (
    <section className="bg-white lg:bg-gray-200 pt-5 lg:px-5 px-3">
      {isLoading && (
        <section className="grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-3. ">
          {/* Skeletion Loading */}
          <article className="h-100 w-full bg-gray-400 animate-pulse"></article>
          <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
          <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
          <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
          <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
          <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
          <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
          <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
          <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
        </section>
      )}

      {!isLoading && fetchError && (
        <p className="text-2xl mb-5">{fetchError}</p>
      )}

      <HomeCardSection
        homeCardSections={homeCardSections[0].item}
        isLoading={isLoading}
        fetchError={fetchError}
        homeCard={homeCard}
      />

      <HomeCardBanner items={homeCardBanner[0].item} />

      <HomeCardSection
        homeCardSections={homeCardSections[1].item}
        isLoading={isLoading}
        fetchError={fetchError}
        homeCard={homeCard}
      />

      <HomeCardBanner items={homeCardBanner[1].item} />

      <HomeCardBanner items={homeCardBanner[2].item} />

      <HomeCardSection
        homeCardSections={homeCardSections[2].item}
        isLoading={isLoading}
        fetchError={fetchError}
        homeCard={homeCard}
      />

      <HomeCardBanner items={homeCardBanner[3].item} />

      <HomeCardSection
        homeCardSections={homeCardSections[3].item}
        isLoading={isLoading}
        fetchError={fetchError}
        homeCard={homeCard}
      />

      <HomeCardBanner items={homeCardBanner[4].item} />
    </section>
  );
};

export default HomeCards;
