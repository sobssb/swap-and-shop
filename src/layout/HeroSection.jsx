import React from "react";
import Button from "../component/Button";
// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePause } from "react-icons/ai";
import { IoIosPlay } from "react-icons/io";
// /////////

const HeroSection = ({ data, fetchError, isLoading }) => {
  // This is where the carousel is i.e banner
  // This file only contains the banner
  // Data is the product fetched from the api
  const carousel = data.filter((item) => item.hashTag === "carousel");

  return (
    <section className="w-full my-5">
      {/* <div className="h-100 w-full px-5 bg-gray-300 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-white to-gray-300 animate-background bg-size-[50%_100%]"></div>
      </div> */}
      {isLoading && (
        <div className="h-100 w-full px-5 bg-gray-300 overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-white to-gray-300 animate-background bg-size-[50%_100%]"></div>
        </div>
      )}
      {!isLoading && fetchError && (
        <div className="w-full h-100 bg-gray-200 text-center pt-[12.5%] text-3xl text-red-600">
          {fetchError}
        </div>
      )}

      {!isLoading &&
        !fetchError &&
        (carousel.length ? (
          carousel.map((item, index) => (
            // This is the list of each items i.e banner
            <div
              key={index}
              className="my-3 h-100 bg-cover w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-5 relative -z-1"
              style={{ backgroundImage: `url(${item.background})` }}
            >
              {/* The content of each banner */}
              <div className="w-1/2">
                <h2 className="text-7xl text-white font-bold">{item.title}</h2>
                <p className="text-white text-2xl my-1">{item.subTitle}</p>
                <Button
                  buttonTitle={item.buttonTitle}
                  className="bg-red-700 text-white"
                />
              </div>

              {/* The image of each banner */}
              <div className="w-1/2">
                <img
                  className="w-[80%] ml-30"
                  src={item.img}
                  alt="item picture"
                />
              </div>

              <div className="absolute bottom-2 right-[20%]">
                <IoIosArrowBack />
                <IoIosArrowForward />
                <AiOutlinePause />
                <IoIosPlay />
              </div>
            </div>
          ))
        ) : (
          <p>No carousel items found.</p>
        ))}
    </section>
  );
};

export default HeroSection;
