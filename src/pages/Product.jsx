import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import H2_Element from "../component/H2_Element";
import Footer from "../layout/Footer";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
import background from "../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Product = ({
  addToCart,
  isSignedIn,
  cartList,
  getUserAfterSignIN,
  todayDeals,
  handleAddCart,
  setToast,
  addCartExist,
  addCartSuccessfully,
  getUserName,
  sideMenubar,
  setSideMenubar,
  sideMenu,
}) => {
  const show = useDetectOutsideClick(() => setIsQuantityClick(false));
  const { id } = useParams();
  const findProduct = todayDeals.find((item) => item.id === id);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [number, setNumber] = useState([]);
  const [isQuantityClick, setIsQuantityClick] = useState(false);
  const [productOption, setProductOption] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
  });

  const handleProductOptions = (optionId) => {
    setProductOption((prev) => ({
      ...prev,
      [optionId]: !productOption[optionId],
    }));
  };

  useEffect(() => {
    const handleGetListOfStockNumber = (() => {
      const numberOfStock = findProduct.max;
      const totalArray = [];
      for (let i = 1; i <= numberOfStock; i++) {
        totalArray.push(i);
      }

      setNumber(totalArray);
    })();
  }, [findProduct, setNumber]);

  return (
    <main className={`relative `}>
      {isQuantityClick && (
        <div className="bg-black min-h-screen w-full opacity-60 fixed top-0 z-90"></div>
      )}

      <Header
        addToCart={addToCart}
        isSignedIn={isSignedIn}
        getUserAfterSignIN={getUserAfterSignIN}
        cartList={cartList}
        getUserName={getUserName}
        sideMenubar={sideMenubar}
        setSideMenubar={setSideMenubar}
        sideMenu={sideMenu}
      />

      <section
        className="bg-white mb-3 flex items-start gap-3 md:flex-row flex-col lg:px-5 px-3 md:mt-2"
        key={findProduct.id}
      >
        {/* product image */}
        <article className="bg-gray-100 md:w-[50%] w-full rounded-lg mb-3 grid place-content-center">
          <img src={findProduct.image} alt="category image" loading="lazy" />
        </article>

        <section className="order-first md:order-0 mt-2 ">
          {/* name of business(username) and ratings */}
          <div className="flex items-center justify-between">
            <Link to={"/"} className="whitespace-nowrap text-[.9rem]">
              <div>
                <p className="font-bold">Username</p>
                <p className="text-[.8rem] text-blue-800">Visit the store</p>
              </div>
            </Link>
            <p>
              <span>rating</span>{" "}
              <span className="text-blue-800 cursor-pointer">(85,858)</span>
            </p>
          </div>

          {/* Details of the product */}
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              quas consequatur exercitationem adipisci ipsum unde numquam.
              Nihil, est non explicabo voluptates aut repudiandae, a omnis nemo
              recusandae cum reiciendis optio.
            </p>
            <p className="bg-black text-white py-1 px-2 rounded-lg mt-1 mb-3 flex w-fit">
              Swap & Shop Choice
            </p>
          </div>

          <div className="hidden md:block">
            <p className="font-semibold bg-red-800 text-white py-1 px-2 text-[.9rem] rounded-lg w-fit">
              {findProduct.text}
            </p>

            <div className="flex items-center gap-3.5 text-[1.7rem]">
              <p className=" mt-1 text-red-800">
                {"-"}
                {findProduct.percentage}
              </p>
              <p className="flex">
                <span className="text-[.6rem]">{findProduct.currency}</span>
                {findProduct.price}
                <span className="text-[.6rem]">{findProduct.priceRise}</span>
              </p>
            </div>
            <p>
              <span>{findProduct.type}: </span>
              <span className="line-through">
                <span>{findProduct.currency}</span>
                {findProduct.oldPrice}
              </span>
            </p>
          </div>

          <div className="mt-2 hidden md:block">
            <div className="flex items-center gap-9 mb-2">
              <p className="w-50 text-[1rem] font-semibold">Sold by</p>
              <p>TORRAS</p>
            </div>

            <div className="flex items-center gap-9  mb-2">
              <p className="w-50 text-[1rem] font-semibold">
                Compatible Phone models
              </p>
              <p>for iphone 17 Pro max 6.9 inch</p>
            </div>

            <div className="flex items-center gap-9 mb-2">
              <p className="w-50 text-[1rem] font-semibold">Color</p>
              <p>2-Blue</p>
            </div>

            <div className="flex items-center gap-9 mb-2">
              <p className="w-50 text-[1rem] font-semibold">
                Compatible Devices
              </p>
              <p>2-for iphone 17 Pro max 6.9 inch</p>
            </div>

            <div className="flex items-center gap-9 mb-2">
              <p className="w-50 text-[1rem] font-semibold">Material</p>
              <p>Polycarbonate</p>
            </div>
          </div>
        </section>

        {/* texts */}
        <article className="md:w-[60%] w-full">
          <div className="block md:hidden">
            <p className="font-semibold bg-red-800 text-white py-1 px-2 text-[.9rem] rounded-lg w-fit">
              {findProduct.text}
            </p>

            <div className="flex items-center gap-3.5 text-[1.7rem]">
              <p className=" mt-1 text-red-800">
                {"-"}
                {findProduct.percentage}
              </p>
              <p className="flex">
                <span className="text-[.6rem]">{findProduct.currency}</span>
                {findProduct.price}
                <span className="text-[.6rem]">{findProduct.priceRise}</span>
              </p>
            </div>
          </div>

          <div className=" text-[.9rem]">
            <p className="block md:hidden">
              <span>{findProduct.type}: </span>
              <span className="line-through">
                <span>{findProduct.currency}</span>
                {findProduct.oldPrice}
              </span>
            </p>
            <p className="text-green-900 font-semibold">In Stock</p>

            <div ref={show}>
              <form action="" className="w-full relative">
                <input
                  className={
                    "border-2 rounded-lg px-2 py-1 text-2xl w-full focus:outline-none border-gray-500"
                  }
                  type="text"
                  name="quantity"
                  id="quantity"
                  value={`Quantity: ${quantity}`}
                  onChange={(e) => setQuantity(e.target.value)}
                  disabled
                />
                <FaAngleDown
                  className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                  onClick={() => setIsQuantityClick((prev) => !prev)}
                />
              </form>

              {isQuantityClick && (
                <div className="w-60 shadow-2xl bg-white rounded-lg fixed z-100 top-1/2 left-1/2 -translate-1/2 overflow-hidden">
                  <div className="flex flex-row justify-between px-5 py-2 items-center bg-gray-100 rounded-t-lg">
                    <H2_Element className={"text-[1rem]"} text="Quantity:" />
                    <FaTimes
                      className="-mt-2 cursor-pointer"
                      onClick={() => setIsQuantityClick((prev) => !prev)}
                    />
                  </div>
                  <div
                    className="overflow-y-scroll [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-thumb]:bg-gray-400 max-h-110"
                    onClick={() => setIsQuantityClick((prev) => !prev)}
                  >
                    {number.length > 0 &&
                      number.map((items, index) => (
                        <div
                          className=" border-t-[.5px] border-slate-200 
                        cursor-context-menu py-2 pl-5 hover:bg-gray-200 
                        active:bg-gray-300 
                        last:rounded-bl-lg first:border-t-0 text-left"
                          key={index}
                          onClick={() => setQuantity(items)}
                        >
                          {items}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="my-2 text-[1rem]">
            <p>{findProduct.shortDetails}</p>
          </div>

          <div>
            <Button
              buttonTitle="Add to cart"
              className="bg-amber-300 w-full py-1.5 text-[1.3rem] mb-3 font-medium rounded-lg"
              handleClick={() => handleAddCart(findProduct)}
            />
            <Button
              buttonTitle="Buy Now"
              className="bg-amber-600 w-full py-1.5 text-[1.3rem] font-medium rounded-lg"
            />
          </div>

          <div className="mt-2">
            <div className="flex items-center gap-9">
              <p className="w-15">Sold by</p>
              <p>Username</p>
            </div>
            <div className="flex items-center gap-9">
              <p className="w-15">Returns</p>
              <p>30-day refund / replacement</p>
            </div>
          </div>

          <div className="md:hidden block">
            <H2_Element
              text="Product details"
              className={
                "border-t-2 border-b mt-4 border-t-slate-500 border-b-slate-400 py-2"
              }
            />

            <div onClick={() => handleProductOptions("option1")}>
              <h3 className="text-[1.3rem] font-semibold flex items-center justify-between">
                Top highlights
                <span>
                  {productOption.option1 ? <FaTimes /> : <FaAngleDown />}
                </span>
              </h3>

              {productOption.option1 && (
                <div className="mt-2">
                  <div className="flex items-center gap-9 mb-2">
                    <p className="w-50 text-[1rem] font-semibold">Sold by</p>
                    <p>TORRAS</p>
                  </div>

                  <div className="flex items-center gap-9  mb-2">
                    <p className="w-50 text-[1rem] font-semibold">
                      Compatible Phone models
                    </p>
                    <p>for iphone 17 Pro max 6.9 inch</p>
                  </div>

                  <div className="flex items-center gap-9 mb-2">
                    <p className="w-50 text-[1rem] font-semibold">Color</p>
                    <p>2-Blue</p>
                  </div>

                  <div className="flex items-center gap-9 mb-2">
                    <p className="w-50 text-[1rem] font-semibold">
                      Compatible Devices
                    </p>
                    <p>2-for iphone 17 Pro max 6.9 inch</p>
                  </div>

                  <div className="flex items-center gap-9 mb-2">
                    <p className="w-50 text-[1rem] font-semibold">Material</p>
                    <p>Polycarbonate</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default Product;
