import { useState, useEffect } from "react";
import UnderConstruction from "../component/UnderConstruction";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "../component/Button";
import DealsArrayProducts from "../data/DealsArrayProducts";
import { Link, useParams } from "react-router-dom";
import Toast from "../component/Toast";
// import H2_Ele
// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Deals = ({
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
  setSideMenubar,
}) => {
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
  const [mobileFilter, setMobileFilter] = useState(false);

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

      {
        <Header
          addToCart={addToCart}
          isSignedIn={isSignedIn}
          getUserAfterSignIN={getUserAfterSignIN}
          cartList={cartList}
          getUserName={getUserName}
          sideMenubar={sideMenubar}
          setSideMenubar={setSideMenubar}
        />
      }

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
              <article className="bg-gray-300 rounded-t-lg mb-3 h-50 grid place-content-center overflow-hidden">
                <img className="h-45" src={item.image} alt="category image" />
              </article>

              {/* texts */}
              <article className="px-1">
                <div className="flex justify-start items-center gap-2 my-2">
                  <p className="bg-red-800 text-white py-[.1rem] px-[.2rem] text-[.9rem] rounded-lg">
                    {item.percentage}
                    {" off"}
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
        <article className="my-5 sm:flex gap-2.5 relative">
          {/* left hand side of the sorting showing the radio and checkbox */}

          {/* mobile view */}
          <div className="sm:hidden">
            <p
              className="text-blue-800"
              onClick={() => setMobileFilter((prev) => !prev)}
            >
              Filtered
            </p>

            {mobileFilter && (
              <div className="fixed bottom-0 h-100 w-full bg-white z-100 left-0 shadow-2xs lg:px-5 px-3 py-2 overflow-y-scroll">
                <p
                  className="text-blue-800"
                  onClick={() => setMobileFilter(!mobileFilter)}
                >
                  Filtered
                </p>
                <div className="min-w-[20%]">
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
                      <FaAngleDown />{" "}
                      <span className="text-blue-700">See more</span>
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
                      <FaAngleDown />{" "}
                      <span className="text-blue-700">See more</span>
                    </p>
                  </div>

                  <div>
                    <h2 className="font-bold">Customer Reviews</h2>
                    <form action="" className="text-[.9rem]">
                      <label
                        htmlFor="all"
                        className="flex items-center gap-1.5 accent-blue-700"
                      >
                        <input type="radio" name="other" id="all" />
                        All
                      </label>
                      <label
                        htmlFor="rating"
                        className="flex items-center gap-1.5 accent-blue-700"
                      >
                        <input type="radio" name="other" id="rating" />
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
              </div>
            )}
          </div>

          {/* largeScreen //////////// */}
          <div className="min-w-[20%] hidden sm:block">
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
                  <input type="radio" name="other" id="all" />
                  All
                </label>
                <label
                  htmlFor="rating"
                  className="flex items-center gap-1.5 accent-blue-700"
                >
                  <input type="radio" name="other" id="rating" />
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
          <div className="gap-2.5 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
            {sortedProduct.map((item) => (
              <section className="min-w-50  bg-white mb-3" key={item.id}>
                {/* featured deals */}
                <Link to={`/product/${item.id}`}>
                  <article className="bg-gray-200 rounded-lg mb-3 grid place-content-center h-60">
                    <img
                      className="h-55"
                      src={item.image}
                      alt="category image"
                    />
                  </article>
                </Link>

                {/* texts */}
                <article>
                  <div className="flex justify-start items-center gap-2 my-2">
                    <p className="bg-red-800 text-white py-[.1rem] px-[.2rem] text-[.9rem] rounded-lg">
                      {item.percentage}
                      {" off"}
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
                    <Link to={`/product/${item.id}`}>
                      <p className=" text-blue-800">{item.linkText}</p>
                    </Link>
                  </div>
                </article>
                <Button
                  buttonTitle="Add to cart"
                  className="bg-amber-300 w-full py-1.5 text-[1.3rem] mb-3 font-medium rounded-lg"
                  handleClick={() => handleAddCart(item.id)}
                />
              </section>
            ))}
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default Deals;
