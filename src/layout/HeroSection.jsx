import { useState, useEffect } from "react";
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
  const carousel = data ? data.filter((item) => item.hashTag === "carousel") : [];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carousel.length);
  };
  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carousel.length) % carousel.length);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section className="w-full">
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

      <div className="flex overflow-auto no-scrollbar">
        {!isLoading &&
          !fetchError &&
          (carousel.length ? (
            carousel.map((item, index) => (
              // This is the list of each items i.e banner
              <div
                key={index}
                className="h-150 lg:h-100 bg-cover w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-5 relative shrink-0 transition-transform duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${item.background})`,
                  transform: `translateX(-${carouselIndex * 100}%)`,
                }}
              >
                {/* The content of each banner */}
                <div className="lg:w-1/2 w-full">
                  <h2 className="lg:text-7xl text-5xl text-white font-bold">
                    {item.title}
                  </h2>
                  <p className="text-white text-2xl my-1">{item.subTitle}</p>
                  <Button
                    buttonTitle={item.buttonTitle}
                    className="bg-white text-black px-4 py-2"
                  />
                </div>

                {/* The image of each banner */}
                <div className="lg:w-1/2 w-full mx-5 lg:mx-0 text-center ml-20">
                  <img
                    className="lg:w-[80%] min-w-[75%] max-w-[75%] 
                     lg:ml-30"
                    src={item.img}
                    alt="item picture"
                  />
                </div>

                <div className="absolute bottom-2 right-[5%] gap-3">
                  <button onClick={prevSlide}>
                    <IoIosArrowBack className="cursor-pointer text-5xl" />
                  </button>
                  <button onClick={nextSlide}>
                    <IoIosArrowForward className="cursor-pointer text-5xl" />
                  </button>
                  <button>
                    {isAutoPlay ? (
                      <AiOutlinePause
                        className="cursor-pointer text-5xl"
                        onClick={() => setIsAutoPlay(false)}
                      />
                    ) : (
                      <IoIosPlay
                        className="cursor-pointer text-5xl"
                        onClick={() => setIsAutoPlay(true)}
                      />
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No carousel items found.</p>
          ))}
      </div>
    </section>
  );
};

export default HeroSection;
