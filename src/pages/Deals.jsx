import { useState, useEffect } from "react";
import UnderConstruction from "../component/UnderConstruction";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import DealsArrayProducts from "../data/DealsArrayProducts";
import { Link, useParams } from "react-router-dom";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const Deals = ({ isSignedIn, getUserAfterSignIN, todayDeals }) => {
  const {
    imgArray,
    namesOfCat,
    initialBrandNames,
    initialDepartmentRadioType,
  } = DealsArrayProducts();
  const [seeMoreCheckbox, setSeeMoreCheckbox] = useState(false);
  const [seeMoreRadio, setSeeMoreRadio] = useState(false);
  const [departmentRadioType, setDepartmentRadioType] = useState(
    initialDepartmentRadioType,
  );
  const [brandNames, setBrandNames] = useState(initialBrandNames);
  const [sortedProduct, setSortedProduct] = useState(todayDeals);

  const handleSortingByRadioAndCheckbox = (
    id,
    arrayName,
    setArrayName,
    isRadio = false,
  ) => {
    const findClicked = arrayName.map((item) => {
      if (item.id !== id) {
        return isRadio ? { ...item, checked: false } : item;
      }
      return {
        ...item,
        checked: isRadio ? true : !item.checked,
      };
    });

    setArrayName(findClicked);
  };

  /* const findClicked = arrayName.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setArrayName(findClicked);
  };

  const findClicked = arrayName.map((item) => {
      if (item.id !== id) {
        return isRadio ? { ...item, checked: false } : item;
      }
      return {
        ...item,
        checked: isRadio ? true : !item.checked,
      };
    });

    setArrayName(findClicked); */

  useEffect(() => {
    // find the clicked sorting type
    const activeBrand = brandNames
      .filter((brand) => brand.checked === true)
      .map((brand) => brand.id);

    // filter products based on the sorting type
    const listProducts =
      activeBrand.length === 0
        ? todayDeals
        : todayDeals.filter((product) => activeBrand.includes(product.brand));

    setSortedProduct(listProducts);
  }, [brandNames, todayDeals]);

  return (
    <main>
      <Header
        className=""
        isSignedIn={isSignedIn}
        getUserAfterSignIN={getUserAfterSignIN}
      />

      {/* showing deals from different category */}
      <section className="lg:px-5 px-3 py-7 ">
        <h2 className="text-2xl font-bold mb-2">Shop deals by category</h2>

        {/* List of categories */}
        <article className="flex gap-3 w-full overflow-x-scroll">
          {imgArray.map((img, index) => (
            <div key={index} className="min-w-30 lg:min-w-40">
              <div className="bg-blue-300 w-full rounded-lg ">
                <img src={img.image} alt="category image" />
              </div>
              <p className="text-center whitespace-nowrap text-[.9rem]">
                {img.text}
              </p>
            </div>
          ))}
        </article>
      </section>

      {/* recent deals i.e today's deals */}
      <section className="lg:px-5 px-3 py-7 bg-blue-300">
        <h2 className="text-2xl font-bold mb-2">Today's featured deals</h2>

        {/* List of categories */}
        <article className="flex gap-3 w-full overflow-x-scroll ">
          {todayDeals.map((item, index) => (
            <section key={index} className="min-w-50 bg-white rounded-lg mb-3">
              {/* featured deals */}
              <article className="bg-gray-300 w-full rounded-t-lg mb-3">
                <img src={item.image} alt="category image" />
              </article>

              {/* texts */}
              <article className="px-1">
                <div className="flex justify-start items-center gap-2 my-2">
                  <p className="bg-red-800 text-white py-[.1rem] px-[.2rem] text-[.9rem] rounded-lg">
                    {item.percentage}
                  </p>
                  <p className="text-[.9rem] font-semibold text-red-800">
                    {item.text}
                  </p>
                </div>

                <div className="flex justify-start items-center gap-2  my-2 text-[.8rem]">
                  <p className="flex">
                    <span className="text-[.6rem]">{item.currency}</span>
                    {item.price}
                    <span className="text-[.6rem]">{item.priceRise}</span>
                  </p>
                  <p className="line-through">
                    <span>{item.currency}</span>
                    {item.oldPrice}
                  </p>
                </div>
              </article>
            </section>
          ))}
        </article>
      </section>

      {/* list of deals and sorting of deals */}
      <section className="lg:px-5 px-3 py-7 mt-4">
        {/* sort by category */}
        <article className="flex">
          {/* direction (to the left) */}
          <button className="w-8 h-8 border rounded-lg grid place-content-center mr-3">
            <IoIosArrowBack className="w-8 h-8" />
          </button>

          {/* list of categories names */}
          <div className="grow overflow-x-scroll flex">
            {namesOfCat.map((cat, index) => (
              <button
                key={index}
                className="h-8 border rounded-lg grid place-content-center mr-3 whitespace-nowrap p-3"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* direction (to the right) */}
          <button className="w-8 h-8 border rounded-lg grid place-content-center">
            <IoIosArrowForward className="w-8 h-8" />
          </button>
        </article>

        {/* sorting type radio and checkbox */}

        {/* type radio */}
        <article className="my-5 flex gap-2.5">
          {/* left hand side of the sorting showing the radio and checkbox */}
          <div>
            <div>
              <h2 className="font-bold">Department</h2>
              <form action="" className="text-[.9rem]">
                {!seeMoreRadio
                  ? departmentRadioType.slice(0, 6).map((list) => (
                      <label
                        key={list.id}
                        htmlFor={list.id}
                        className="flex items-center gap-1.5 accent-blue-700"
                      >
                        <input
                          type="radio"
                          name="department"
                          id={list.id}
                          checked={list.checked}
                          onChange={() =>
                            handleSortingByRadioAndCheckbox(
                              list.id,
                              departmentRadioType,
                              setDepartmentRadioType,
                              true,
                            )
                          }
                        />
                        {list.text}
                      </label>
                    ))
                  : departmentRadioType.map((list) => (
                      <label
                        key={list.id}
                        htmlFor={list.id}
                        className="flex items-center gap-1.5 accent-blue-700"
                      >
                        <input
                          checked={list.checked}
                          type="radio"
                          name="department"
                          id={list.id}
                          onChange={() =>
                            handleSortingByRadioAndCheckbox(
                              list.id,
                              departmentRadioType,
                              setDepartmentRadioType,
                              true,
                            )
                          }
                        />
                        {list.text}
                      </label>
                    ))}
              </form>
              <p
                className="flex items-center gap-1.5 cursor-pointer my-2"
                onClick={() => setSeeMoreRadio(!seeMoreRadio)}
              >
                <FaAngleDown /> <span className="text-blue-700">See more</span>
              </p>
            </div>

            {/* type checkbox */}
            <div>
              <h2 className="font-bold">Brands</h2>
              <form action="" className="text-[.9rem]">
                {!seeMoreCheckbox
                  ? brandNames.slice(0, 6).map((list) => (
                      <label
                        key={list.id}
                        htmlFor={list.id}
                        className="flex items-center gap-1.5 accent-blue-700"
                      >
                        <input
                          checked={list.checked}
                          onChange={() =>
                            handleSortingByRadioAndCheckbox(
                              list.id,
                              brandNames,
                              setBrandNames,
                            )
                          }
                          type="checkbox"
                          name={list.id}
                          id={list.id}
                        />
                        {list.text}
                      </label>
                    ))
                  : brandNames.map((list) => (
                      <label
                        key={list.id}
                        htmlFor={list.id}
                        className="flex items-center gap-1.5 accent-blue-700"
                      >
                        <input
                          checked={list.checked}
                          type="checkbox"
                          name={list.id}
                          id={list.id}
                          onChange={() =>
                            handleSortingByRadioAndCheckbox(
                              list.id,
                              brandNames,
                              setBrandNames,
                            )
                          }
                        />
                        {list.text}
                      </label>
                    ))}
              </form>
              <p
                className="flex items-center gap-1.5 cursor-pointer my-2"
                onClick={() => setSeeMoreCheckbox(!seeMoreCheckbox)}
              >
                <FaAngleDown /> <span className="text-blue-700">See more</span>
              </p>
            </div>

            <div>
              <h2 className="font-bold">Customer Reviews</h2>
              <form action="" className="text-[.9rem]">
                <label
                  htmlFor="all"
                  className="flex items-center gap-1.5 accent-blue-700"
                >
                  <input type="radio" name="all" id="all" />
                  All
                </label>
                <label
                  htmlFor="rating"
                  className="flex items-center gap-1.5 accent-blue-700"
                >
                  <input type="radio" name="rating" id="rating" />
                  All & up (later work)
                </label>
              </form>
            </div>

            <div>
              <h2 className="font-bold mt-2">Discount</h2>
              <p>10% - 100%</p>

              {/* range */}
              <div></div>
            </div>
          </div>

          {/* right side showing the items cards sorted i.e products */}
          <div className="grow gap-2.5 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            {sortedProduct.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <section className="min-w-50 bg-white mb-3">
                  {/* featured deals */}
                  <article className="bg-gray-100 w-full rounded-lg mb-3">
                    <img src={item.image} alt="category image" />
                  </article>

                  {/* texts */}
                  <article>
                    <div className="flex justify-start items-center gap-2 my-2">
                      <p className="bg-red-800 text-white py-[.1rem] px-[.2rem] text-[.9rem] rounded-lg">
                        {item.percentage}
                      </p>
                      <p className="text-[.9rem] font-semibold text-red-800">
                        {item.text}
                      </p>
                    </div>

                    <div className="my-2 text-[.8rem]">
                      <p className="flex">
                        <span className="text-[.6rem]">{item.currency}</span>
                        {item.price}
                        <span className="text-[.6rem]">{item.priceRise}</span>
                      </p>

                      <p>
                        <span>{item.type}: </span>
                        <span className="line-through">
                          <span>{item.currency}</span>
                          {item.oldPrice}
                        </span>
                      </p>
                    </div>

                    <div className="my-2 text-[.8rem]">
                      <p className="flex">
                        {item.shortDetails.length > 40
                          ? `${item.shortDetails.slice(0, 40)}...`
                          : item.shortDetails}
                      </p>
                      <p className=" text-blue-800">{item.linkText}</p>
                    </div>
                  </article>
                </section>
              </Link>
            ))}
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default Deals;
