import React from "react";
import Header from "../layout/Header";
import { useParams, Link } from "react-router-dom";
import Footer from "../layout/Footer";
import background from "../assets/logo.png";

const Product = ({ isSignedIn, getUserAfterSignIN, todayDeals }) => {
  const { id } = useParams();
  const findProduct = todayDeals.find((item) => item.id === Number(id));

  return (
    <main>
      <Header isSignedIn={isSignedIn} getUserAfterSignIN={getUserAfterSignIN} />

      <section className="md:hidden px-3">
        {/* name of business(username) and ratings */}
        <div className="flex items-center justify-between">
          <Link to={"/"} className="whitespace-nowrap text-[.9rem]">
            <div>
              <p className="font-bold">Logo name</p>
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
            quas consequatur exercitationem adipisci ipsum unde numquam. Nihil,
            est non explicabo voluptates aut repudiandae, a omnis nemo
            recusandae cum reiciendis optio.
          </p>
          <p className="bg-black text-white py-1 px-2 rounded-lg mt-1 mb-3 flex w-fit">
            Swap & Shop Choice
          </p>
        </div>
      </section>

      <section
        className="bg-white mb-3 flex items-start gap-3 md:flex-row flex-col lg:px-5 px-3"
        key={findProduct.id}
      >
        {/* featured deals */}
        <article className="bg-gray-100 md:w-[40%] w-full rounded-lg mb-3">
          <img src={findProduct.image} alt="category image" />
        </article>

        {/* texts */}
        <article className="md:w-[60%]">
          <div className="">
            <p className="font-semibold bg-red-800 text-white py-1 px-2 text-[.9rem] rounded-lg w-fit">
              {findProduct.text}
            </p>
            <p className="text-[.9rem] mt-1">{findProduct.percentage}</p>
          </div>

          <div className="my-11 text-[.8rem]">
            <p className="flex">
              <span className="text-[.6rem]">{findProduct.currency}</span>
              {findProduct.price}
              <span className="text-[.6rem]">{findProduct.priceRise}</span>
            </p>

            <p>
              <span>{findProduct.type}: </span>
              <span className="line-through">
                <span>{findProduct.currency}</span>
                {findProduct.oldPrice}
              </span>
            </p>
          </div>

          <div className="my-2 text-[.8rem]">
            <p className="flex">{findProduct.shortDetails}</p>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default Product;
