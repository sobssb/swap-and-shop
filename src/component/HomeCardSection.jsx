import React from "react";
import { Link } from "react-router-dom";

const HomeCardSection = ({
  homeCardSections,
  fetchError,
  isLoading,
  homeCard,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {!isLoading &&
        !fetchError &&
        (homeCard.length ? (
          homeCardSections.map((card) => (
            <article
              className="flex flex-col lg:bg-white w-full lg:p-5 mt-5 lg:mt-0"
              key={card.id}
            >
              <h2 className="text-3xl font-bold mb-5">{card.title}</h2>
              <div className="flex grow">
                <div className="grid grid-cols-2 gap-2 ">
                  {card.img.map((image, index) => (
                    <div key={index} className="w-full ">
                      <div
                        className={`w-full ${card.background} grid place-content-center p-5`}
                      >
                        <img
                          className="w-full"
                          src={image.img}
                          alt="item picture"
                        />
                      </div>
                      <p>{image.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Link className="mt-5 text-blue-600" to={"/"}>
                {card.subTitle}
              </Link>
            </article>
          ))
        ) : (
          <p>No Home Cards Found</p>
        ))}
    </div>
  );
};

export default HomeCardSection;
