import React, { useState } from "react";
import Header from "../layout/Header";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import H2_Element from "../component/H2_Element";
import Footer from "../layout/Footer";
import Toast from "../component/Toast";
import background from "../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Product = ({
  addToCart,
  isSignedIn,
  cartList,
  getUserAfterSignIN,
  todayDeals,
  handleAddCart,
  countDown,
  toast,
  setToast,
  addCartExist,
  addCartSuccessfully,
  getUserName,
  sideMenubar,
              setSideMenubar
}) => {
  const { id } = useParams();
  const findProduct = todayDeals.find((item) => item.id === id);
  const navigate = useNavigate();

  // Closes "Toast" after the "OK" button was clicked
  const handleClosesToast = () => {
    setToast(false);
  };

  return (
    <main className="relative">
      {addCartSuccessfully && toast && (
        <Toast
          countDown={countDown}
          header={"Added to cart successfully!"}
          phrase={`Click "OK" to continue exploring`}
          title1={"Ok"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          handleFirstClick={handleClosesToast}
        />
      )}

      {addCartExist && toast && (
        <Toast
          countDown={countDown}
          header={"Product has been added before!"}
          phrase={`Click "OK" to continue exploring`}
          title1={"Ok"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          handleFirstClick={handleClosesToast}
        />
      )}

        <Header
          addToCart={addToCart}
          isSignedIn={isSignedIn}
          getUserAfterSignIN={getUserAfterSignIN}
          cartList={cartList}
          getUserName={getUserName}
          sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
        />

        <section className="md:hidden px-3 mt-2">
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
        </section>

        <section
          className="bg-white mb-3 flex items-start gap-3 md:flex-row flex-col lg:px-5 px-3 md:mt-2"
          key={findProduct.id}
        >
          {/* product image */}
          <article className="bg-gray-100 md:w-[40%] w-full rounded-lg mb-3 grid place-content-center">
            <img src={findProduct.image} alt="category image" />
          </article>

          {/* texts */}
          <article className="md:w-[60%] w-full">
            <div className="">
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
              <p>
                <span>{findProduct.type}: </span>
                <span className="line-through">
                  <span>{findProduct.currency}</span>
                  {findProduct.oldPrice}
                </span>
              </p>
            </div>

            <div className="my-2 text-[1rem]">
              <p>{findProduct.shortDetails}</p>
            </div>

            <div>
              <Button
                buttonTitle="Add to cart"
                className="bg-amber-300 w-full py-2.5 text-[1.3rem] mb-3 font-medium"
                handleClick={() => handleAddCart(findProduct.id)}
              />
              <Button
                buttonTitle="Buy Now"
                className="bg-amber-600 w-full py-2.5 text-[1.3rem] font-medium"
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

            <div>
              <H2_Element text="Product details" />
            </div>
          </article>
        </section>

        <Footer />
    </main>
  );
};

export default Product;
