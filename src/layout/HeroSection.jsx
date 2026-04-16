import React from "react";
import UnderConstruction from "../component/UnderConstruction";

const HeroSection = ({ data, fetchError, isLoading }) => {
  const carousel = data.filter((item) => item.hashTag === "carousel");

  return (
    <section>
      {isLoading && <p>Loading... wait a minutes</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}

      {!isLoading &&
        !fetchError &&
        (carousel.length ? (
          carousel.map((item, index) => (
            <div key={index} className="my-3">
              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
              <button>{item.buttonTitle}</button>
            </div>
          ))
        ) : (
          <p>No carousel items found.</p>
        ))}
    </section>
  );
};

export default HeroSection;
