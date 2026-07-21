import { useState, useEffect } from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import Footer from "../layout/Footer";
import H2_Element from "../component/H2_Element";
import noCartimg from "../assets/pngwing.com (2) (5).png";
// icons
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn, CiSaveDown2 } from "react-icons/ci";
import { IoNotificationsSharp } from "react-icons/io5";

const Saved = ({
  addToCart,
  getUserAfterSignIN,
  saved,
  setToast,
  setSaved,
  isSignedIn,
  setAddToCart,
  cartList,
  setCartList,
  getUserName,
  sideMenubar,
  setSideMenubar,
  handleAddCart,
  createAccount,
  setCreateAccount,
  setGetUserAfterSignIN,
  sideMenu
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [deleteSaved, setDeleteSaved] = useState(false);
  const [successfullCart, setSuccessfullCart] = useState(false);
  const [savedExist, setSavedExist] = useState(false);

  // /////////////////////////
  // update the lastest saved list to localStorage after deleted saved product and moved to the cartlist
  const handleDeleteSavedAndMoveToCartList = (
    nextCart,
    nextCartList,
    deleteSaved,
  ) => {
    if (!getUserAfterSignIN) return;

    const updateAccount = createAccount.map((user) => {
      if (
        user.email.trim().toLowerCase() ===
        getUserAfterSignIN.email.trim().toLowerCase()
      ) {
        return {
          ...user,
          cart: nextCart,
          cartList: nextCartList,
          saved: deleteSaved,
        };
      }

      return user;
    });

    // Saved the latest account details  to localStorage
    localStorage.setItem("currentUser", JSON.stringify(updateAccount));
    setCreateAccount(updateAccount);

    // current user signed in
    const updateUser = {
      ...getUserAfterSignIN,
      cart: nextCart,
      cartList: nextCartList,
      saved: deleteSaved,
    };

    localStorage.setItem("user", JSON.stringify(updateUser));
    setGetUserAfterSignIN(updateUser);
  };

  // remove the selected product back to the cartlist
  const handleDeleteSavedAddToCartList = (product) => {
    if (!product) return;

    const productExist = cartList.find((cart) => cart.id === product.id);

    let nextCart = addToCart;
    if (!productExist && addToCart < 9) {
      nextCart = nextCart + 1;
      setAddToCart(nextCart);
    }

    if (!productExist) {
      const updateCartList = [product, ...cartList];
      const deleteSaved = saved.filter((save) => save.id !== product.id);
      setCartList(updateCartList);
      setSaved(deleteSaved);
      handleDeleteSavedAndMoveToCartList(nextCart, updateCartList, deleteSaved);
      setDeleteSaved(false);
      setSuccessfullCart(true);
      setSavedExist(false);
      setToast({
        countDown: 3,
        header: "Added to cart successfully!",
        message: "Click OK to continue exploring.",
        title1: "OK",
      });
    } else {
      setDeleteSaved(false);
      setSuccessfullCart(false);
      setSavedExist(true);
      setToast({
        countDown: 3,
        header: "Product has been added before!",
        message: "Click OK to continue exploring.",
        title1: "OK",
      });
    }
  };
  // /////////////////////////

  // /////////////////////////
  // update the lastest saved list to localStorage after deleted saved product
  const handleDeleteSavedUpdate = (deleteSaved) => {
    if (!getUserAfterSignIN) return;

    const updateAccount = createAccount.map((user) => {
      if (
        user.email.trim().toLowerCase() ===
        getUserAfterSignIN.email.trim().toLowerCase()
      ) {
        return {
          ...user,
          saved: deleteSaved,
        };
      }

      return user;
    });

    // Saved the latest account details  to localStorage
    localStorage.setItem("currentUser", JSON.stringify(updateAccount));
    setCreateAccount(updateAccount);

    // current user signed in
    const updateUser = {
      ...getUserAfterSignIN,
      saved: deleteSaved,
    };

    localStorage.setItem("user", JSON.stringify(updateUser));
    setGetUserAfterSignIN(updateUser);
  };

  // remove the selected saved product from the saved list
  const handleDeleteSaved = (product) => {
    if (!product) return;

    const updateSaved = saved.filter((save) => save.id !== product.id);
    setSaved(updateSaved);
    setDeleteSaved(true);
    setSuccessfullCart(false);
    setSavedExist(false);
    setToast({
      countDown: 3,
      header: "Product deleted from saved!",
      message: "Click OK to continue exploring.",
      title1: "OK",
    });
    handleDeleteSavedUpdate(updateSaved);
  };
  // /////////////////////////

  useEffect(() => {
    const handletotal = (() => {
      return saved.reduce((acc, item) => {
        const wholePrice = Number(item.price);
        const priseRise = Number(item.priceRise) / 100;

        const total = wholePrice + priseRise;
        const subTotal = acc + total;
        setTotalPrice(subTotal.toLocaleString());
        return subTotal;
      }, 0);
    })();
  }, [saved]);

  return (
    <main>
      <Header
        isSignedIn={isSignedIn}
        getUserAfterSignIN={getUserAfterSignIN}
        addToCart={addToCart}
        cartList={cartList}
        getUserName={getUserName}
        sideMenubar={sideMenubar}
        setSideMenubar={setSideMenubar}
        sideMenu={sideMenu}
      />

      {
        // subTotal of all carts amount
        <section className="lg:px-5 px-3 my-2">
          <article className="border-b-[.5px] border-slate-200">
            <div className="flex gap-x-3 ">
              <H2_Element text={"Subtotal"} className={"font-medium"} />
              <H2_Element text={saved.length < 1 ? 0 : totalPrice} />
            </div>
            <Button
              buttonTitle={`Proceed to checkout (${saved.length || 0} ${saved.length > 1 ? "items" : "item"} )`}
              className="bg-amber-300 lg:w-100 w-full py-1.5 text-[1.3rem] mb-4 font-medium rounded-lg "
            />
          </article>
        </section>
      }

      {saved.length > 0 ? (
        saved.map((product) => (
          <section
            className="bg-gray-100 mb-3 flex gap-3 lg:px-5 px-3 py-1"
            key={product.id}
          >
            {/* product image */}
            <article className="rounded-lg mb-3 grid place-content-center w-[40%] md:w-[20%]">
              <img
                className="w-full h-full"
                src={product.image}
                alt="category image"
              />
            </article>

            {/* texts */}
            <article className="w-[60%] flex flex-col">
              <div className="grow">
                <p>
                  {product.shortDetails.length > 60
                    ? `${product.shortDetails.slice(0, 60)}...`
                    : product.shortDetails}
                </p>

                <div className="flex items-center gap-3.5 text-[1.7rem]">
                  <p className="flex font-bold">
                    <span className="text-[.6rem]">{product.currency}</span>
                    {product.price.toLocaleString()}
                    <span className="text-[.6rem]">{product.priceRise}</span>
                  </p>
                </div>
                <p className="text-green-900 font-semibold">In Stock</p>
                <p>
                  <span className="font-semibold">Stock: </span>{product.max}
                </p>
                <p>
                  <span className="font-semibold">Color: </span>white
                </p>
                <p className="text-blue-700 underline">
                  More details coming soon
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  buttonTitle="Delete"
                  className="border py-1.5 px-2.5 text-[1rem] mb-3 font-medium"
                  handleClick={() => handleDeleteSaved(product)}
                />

                <Button
                  buttonTitle="Move to cart"
                  className="border  py-1.5 px-2.5 text-[1rem] mb-3 font-medium whitespace-nowrap"
                  handleClick={() => {
                    handleDeleteSavedAddToCartList(product);
                  }}
                />
              </div>
            </article>
          </section>
        ))
      ) : (
        <section className="grid place-content-center  lg:px-5 px-3">
          {/* the image */}
          <div>
            <article>
              <img className="" src={noCartimg} alt="no cart list" />
            </article>
            {/* text/details */}
            <article className="text-center">
              <H2_Element text="You have no product Saved yet" />
              <Link to={"/deals"} className="text-blue-800 text-[1.2rem]">
                Shop today's deals
              </Link>
              {!getUserAfterSignIN && (
                <div>
                  <Button
                    buttonTitle="Sign in to your account"
                    className="bg-amber-300 w-full py-1.5 text-[1.3rem] mb-3 font-medium rounded-lg"
                    // handleClick={() => navigate("/profile")}
                  />

                  <Button
                    buttonTitle="Create account now"
                    className="border w-full py-1.5 text-[1.3rem] mb-3 font-medium rounded-lg"
                    // handleClick={() => navigate("/profile/createAccount")}
                  />
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default Saved;
