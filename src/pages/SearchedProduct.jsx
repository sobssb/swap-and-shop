import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import AllProducts from "../data/AllProducts";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "../component/Button";
import DealsArrayProducts from "../data/DealsArrayProducts";
import { useHandleCart } from "../hooks/useHandleCart";
import { useStoreState, useStoreActions } from "easy-peasy";

// icons
import { FaAngleDown } from "react-icons/fa";

const SearchedProduct = () => {
  const {handleAddCart} =useHandleCart()
  const collectSearchResult = useStoreState(
    (state) => state.collectSearchResult,
  );
  const setCollectSearchResult = useStoreActions(
    (actions) => actions.setCollectSearchResult,
  );
  const { todayDeals } = AllProducts();

  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

  useEffect(() => {
    if (query.length > 0) {
      setCollectSearchResult(query);
    }
  }, [query]);

  const getSearchedProducts = todayDeals.filter(
    (product) =>
      product.name?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query) ||
      product.mainCategory?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query) ||
      product.brandType?.toLowerCase().includes(query),
  );

  const { initialBrandNames, initialDepartmentRadioType } =
    DealsArrayProducts();
  const [seeMoreCheckbox, setSeeMoreCheckbox] = useState(false);
  const [seeMoreRadio, setSeeMoreRadio] = useState(false);
  const [departmentRadioType, setDepartmentRadioType] = useState(
    initialDepartmentRadioType,
  );
  const [brandNames, setBrandNames] = useState(initialBrandNames);
  const [sortedProduct, setSortedProduct] = useState(todayDeals);
  const [mobileFilter, setMobileFilter] = useState(false);
  const [mobileFilterOptionDrop, setMobileFilterOptionDrop] = useState({
    container1: false,
    container2: false,
    container3: false,
    container4: false,
  });

  const handleFilterCategory = (containerId) => {
    setMobileFilterOptionDrop((prev) => ({
      ...prev,
      [containerId]: !mobileFilterOptionDrop[containerId],
    }));
  };

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
  }, [brandNames]);

  return (
    <main className="relative">
      {mobileFilter && (
        <div
          className="bg-black min-h-screen w-full opacity-60 fixed top-0 z-90"
          onClick={() => setMobileFilter(false)}
        ></div>
      )}

      {<Header />}

      {/* showing deals from different category */}
      <section className="lg:px-5 px-3 pt-7 ">
        <h2 className="text-2xl font-bold">Searched Product</h2>
      </section>

      {/* list of deals and sorting of deals */}
      <section className="lg:px-5 px-3 pb-7 mt-4">
        {/* sorting type radio and checkbox */}

        {/* type radio */}
        <article className="my-5 sm:flex gap-2.5 relative">
          {/* left hand side of the sorting showing the radio and checkbox */}

          {/* mobile view */}
          <div className="sm:hidden">
            <button
              className="text-[1.2rem] mb-3 bg-blue-800 w-fit px-2 py-1 rounded-lg text-white"
              onClick={() => setMobileFilter((prev) => !prev)}
            >
              All Filters
            </button>

            {mobileFilter && (
              <div className="fixed bottom-0 h-[95vh] w-[94%] bg-white z-100 left-1/2 top-1/2 -translate-1/2 shadow-2xs px-4  py-2 overflow-y-scroll rounded-3xl">
                <p
                  className="font-semibold text-[1.5rem] flex justify-between items-center mt-2 border-b-[.5px] border-slate-300 pb-2 gap-2"
                  onClick={() => setMobileFilter(!mobileFilter)}
                >
                  All Filters
                  <span className="text-2xl">
                    <FaTimes />
                  </span>
                </p>
                <div className="min-w-[20%] ">
                  <div className="border-b-[.5px] border-slate-300">
                    <h2
                      className="font-bold text-[1rem] flex gap-2 items-center justify-between my-2"
                      onClick={() => handleFilterCategory("container1")}
                    >
                      Department
                      <span>
                        <FaAngleDown />
                      </span>
                    </h2>

                    {mobileFilterOptionDrop.container1 && (
                      <div>
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
                    )}
                  </div>

                  {/* type checkbox */}
                  <div className="border-b-[.5px] border-slate-300">
                    <h2
                      className="font-bold text-[1rem] flex gap-2 items-center justify-between my-2"
                      onClick={() => handleFilterCategory("container2")}
                    >
                      Brands
                      <span>
                        <FaAngleDown />
                      </span>
                    </h2>

                    {mobileFilterOptionDrop.container2 && (
                      <div>
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
                    )}
                  </div>

                  <div className="border-b-[.5px] border-slate-300">
                    <h2
                      className="font-bold text-[1rem] flex gap-2 items-center justify-between my-2"
                      onClick={() => handleFilterCategory("container3")}
                    >
                      Customer Reviews
                      <span>
                        <FaAngleDown />
                      </span>
                    </h2>

                    {mobileFilterOptionDrop.container3 && (
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
                    )}
                  </div>

                  <div className="border-b-[.5px] border-slate-300">
                    <h2
                      className="font-bold text-[1rem] flex gap-2 items-center justify-between my-2"
                      onClick={() => handleFilterCategory("container4")}
                    >
                      Discount
                      <span>
                        <FaAngleDown />
                      </span>
                    </h2>

                    {mobileFilterOptionDrop.container4 && (
                      <div className="mb-3">
                        <p>10% - 100%</p>

                        {/* range */}
                        <div></div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="sticky -bottom-1 z-100 w-full ">
                  <Button
                    buttonTitle="Apply"
                    className="bg-blue-700 text-white w-full py-1.5 text-[1.3rem] font-medium rounded-lg"
                    handleClick={() => setMobileFilter(!mobileFilter)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* largeScreen //////////// */}
          <div className="min-w-[20%] hidden sm:block sticky top-37 h">
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
          <div className="gap-3.5 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            {getSearchedProducts.length > 0 ? (
              getSearchedProducts?.slice(0, 12).map((item) => (
                <section
                  className="min-w-50 bg-white mb-3 h-full flex flex-col"
                  key={item.id}
                >
                  {/* featured deals */}
                  <Link to={`/product/${item.id}`}>
                    <article className="bg-gray-200 rounded-lg mb-3 grid place-content-center h-60">
                      <img
                        className="h-55"
                        loading="lazy"
                        src={item.image}
                        alt="category image"
                      />
                    </article>
                  </Link>

                  {/* texts */}
                  <article className="flex flex-col flex-1">
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
                        {item.price.toLocaleString()}
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

                    <div className="my-2 text-[.8rem] flex-1">
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
                    className="bg-amber-300 w-full py-1.5 text-[1.3rem] mb-3 font-medium rounded-lg mt-auto"
                    handleClick={() => handleAddCart(item)}
                  />
                </section>
              ))
            ) : (
              <h2 className="text-center col-span-full mt-[10%] md:ml-[15%]">
                Can't find any product with the name{" "}
                <span className="text-black font-bold">
                  "{collectSearchResult.toUpperCase()}"
                </span>{" "}
                in our store
              </h2>
            )}
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default SearchedProduct;
