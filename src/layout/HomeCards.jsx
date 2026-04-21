import React from "react";

const HomeCards = ({ data, fetchError, isLoading }) => {
  // This a the list of cards categories
  return (
    <section className="bg-gray-100 py-5 -mt-5">
      {isLoading && (
        <section>
          {/* for large screens */}
          <div className="hidden lg:grid grid-cols-3 gap-3 px-5">
            <article className="h-100 w-full bg-gray-400 animate-pulse"></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
          </div>

          {/* For mobile or small screen */}
          <div className="lg:hidden grid grid-cols-2 gap-3 px-3">
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse "></article>
            <article className="h-100 w-full bg-gray-400 animate-pulse"></article>
          </div>
        </section>
      )}

      {!isLoading && fetchError && (
        <p className="text-2xl lg:px-5 px-3 mb-5">{fetchError}</p>
      )}
      {/* For large screens */}
      <div className="hidden lg:grid grid-cols-3 gap-3 px-5">
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
      </div>

      {/* for mobiles or small screens */}
      <div className="lg:hidden grid grid-cols-2 gap-3 px-3">
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article className="h-100 w-full bg-white"></article>
      </div>
    </section>
  );
};

export default HomeCards;
