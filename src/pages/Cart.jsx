import Header from "../layout/Header";
import img from "../assets/pngwing.com (23).png";
import { useState, useEffect } from "react";
import Button from "../component/Button";
import H2_Element from "../component/H2_Element";
import noCartimg from "../assets/pngwing.com (2) (5).png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import Toast from "../component/Toast";
import Saved from "./Saved";
// icons
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoNotificationsSharp } from "react-icons/io5";

const Cart = ({
  addToCart,
  setAddToCart,
  isSignedIn,
  getUserAfterSignIN,
  cartList,
  setCartList,
  createAccount,
  setCreateAccount,
  setGetUserAfterSignIN,
  countDown,
  toast,
  setToast,
  todayDeals,
  saved,
  setSaved,
  getUserName,
  sideMenubar,
  setSideMenubar,
}) => {
  const navigate = useNavigate();

  const [deleteCart, setDeleteCart] = useState(false);
  const [stockById, setStockById] = useState({});
  const [successfullSaved, setSuccessfullSaved] = useState(false);
  const [savedExist, setSavedExist] = useState(false);
  const [totalPrice, setTotalPrice] = useState(
    getUserAfterSignIN ? getUserAfterSignIN.totalPrice : 0,
  );
  const max = 10;

  useEffect(() => {
    const initialStock = Object.fromEntries(
      cartList.map((product) => [product.id, product.stock ?? 1]),
    );
    setStockById(initialStock);
  }, [cartList]);

  const handleStockUpdate = (stock, productId) => {
    if (!getUserAfterSignIN) return;

    const newList = createAccount.map((user) => {
      if (
        user.email.trim().toLowerCase() ===
        getUserAfterSignIN.email.trim().toLowerCase()
      ) {
        const updateUser = user.cartList.map((cart) => {
          if (cart.id === productId) {
            return {
              ...cart,
              stock: stock,
            };
          }
          return cart;
        });
        return {
          ...user,
          cartList: updateUser,
        };
      }
      return user;
    });

    // Saved the latest account details  to localStorage
    localStorage.setItem("currentUser", JSON.stringify(newList));
    setCreateAccount(newList);

    // current user singed in
    const updateCurrentUser = getUserAfterSignIN.cartList.map((currentUser) => {
      if (currentUser.id === productId) {
        return {
          ...currentUser,
          stock: stock,
        };
      }

      return currentUser;
    });

    const userUpdate = {
      ...getUserAfterSignIN,
      cartList: updateCurrentUser,
    };
    localStorage.setItem("user", JSON.stringify(userUpdate));
    setGetUserAfterSignIN(userUpdate);
  };

  const handleIncreaseStock = (id) => {
    if (!id) return;

    const currentStock = stockById[id] ?? 1;
    if (currentStock > max - 1) return;

    const nextStock = stockById[id] + 1;
    setStockById((prev) => ({
      ...prev,
      [id]: nextStock,
    }));

    handleStockUpdate(nextStock, id);
  };
  // //////////

  const handleDecreaseStock = (id) => {
    if (!id) return;

    const currentStock = stockById[id] ?? 1;
    if (currentStock < 2) return;

    const minusStock = stockById[id] - 1;
    setStockById((prev) => ({
      ...prev,
      [id]: minusStock,
    }));

    handleStockUpdate(minusStock, id);
  };

  // this is for deleting of cartlist and number of cart
  const handleCartUpdate = (minusCart, minusCartList) => {
    if (!getUserAfterSignIN) return;

    const newList = createAccount.map((user) => {
      if (
        user.email.trim().toLowerCase() ===
        getUserAfterSignIN.email.trim().toLowerCase()
      ) {
        return {
          ...user,
          cart: minusCart,
          cartList: minusCartList,
        };
      }

      return user;
    });

    // Saved the latest account details  to localStorage
    localStorage.setItem("currentUser", JSON.stringify(newList));
    setCreateAccount(newList);

    // current user singed in
    const updateCurrentUser = {
      ...getUserAfterSignIN,
      cart: minusCart,
      cartList: minusCartList,
    };
    localStorage.setItem("user", JSON.stringify(updateCurrentUser));
    setGetUserAfterSignIN(updateCurrentUser);
  };

  const handleDeleteCart = (id) => {
    if (!id) return;

    let minusCart = addToCart;
    if (addToCart > 0 && cartList.length <= 9) {
      minusCart = minusCart - 1;
      setAddToCart(minusCart);
    }

    const deleteProduct = cartList.filter((product) => product.id !== id);
    setCartList(deleteProduct);

    handleCartUpdate(minusCart, deleteProduct);
    setToast(true);
    setDeleteCart(true);
  };

  // Closes "Toast" after the "OK" button was clicked
  const handleClosesToast = () => {
    setToast(false);
  };

  // saved product
  const handleUpdateSaved = (nextProduct) => {
    if (!getUserAfterSignIN) return;

    const userUpdate = createAccount.map((user) => {
      if (
        user.email.trim().toLowerCase() ===
        getUserAfterSignIN.email.trim().toLowerCase()
      ) {
        return {
          ...user,
          saved: nextProduct,
        };
      }
      return user;
    });

    // Saved the latest account details  to localStorage
    localStorage.setItem("currentUser", JSON.stringify(userUpdate));
    setCreateAccount(userUpdate);

    const updateCurrent = {
      ...getUserAfterSignIN,
      saved: nextProduct,
    };

    localStorage.setItem("user", JSON.stringify(updateCurrent));
    setGetUserAfterSignIN(updateCurrent);
  };

  const handleSaved = (id) => {
    if (!id) return;

    // find the selected product
    const findProduct = todayDeals.find((product) => product.id === id);

    // if selected product already exist
    const productExist = saved.find((product) => product.id === findProduct.id);

    if (findProduct) {
      const newSaved = [findProduct, ...saved];
      setSaved(newSaved);
      setSuccessfullSaved(true);
      setToast(true);
      setSavedExist(false);
      handleUpdateSaved(newSaved);
    } else {
      setSuccessfullSaved(false);
      setToast(true);
      setSavedExist(true);
    }
  };

  useEffect(() => {
    const handleTotalCost = (() => {
      return cartList.reduce((acc, item) => {
        const wholePrice = Number(item.price.replace(/,/g, ""));
        const priceRise = Number(item.priceRise) / 100;
        const numberOfStock = Number(item.stock) || 1;

        const totalPrice = (wholePrice + priceRise) * numberOfStock;

        const total = acc + totalPrice;

        setTotalPrice(total.toLocaleString());
        return acc + totalPrice;

        if (!getUserAfterSignIN) return;
        const userUpdate = createAccount.map((user) => {
          if (
            user.email.trim().toLowerCase() ===
            getUserAfterSignIN.email.trim().toLowerCase()
          ) {
            return {
              ...user,
              totalPrice: totalPrice,
            };
          }
          return user;
        });

        // Saved the latest account details  to localStorage
        localStorage.setItem("currentUser", JSON.stringify(userUpdate));
        setCreateAccount(userUpdate);

        const updateCurrent = {
          ...getUserAfterSignIN,
          totalPrice: totalPrice,
        };

        localStorage.setItem("user", JSON.stringify(userUpdate));
        setGetUserAfterSignIN(updateCurrent);
      }, 0);
    })();
  }, [cartList]);

  return (
    <main>
      {deleteCart && toast && (
        <Toast
          countDown={countDown}
          header={"Product deleted from cart!"}
          phrase={`Click "OK" to continue exploring`}
          title1={"Ok"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          handleFirstClick={handleClosesToast}
        />
      )}

      {successfullSaved && toast && (
        <Toast
          countDown={countDown}
          header={"Product saved successfully!"}
          phrase={`Click "OK" to continue exploring`}
          title1={"Ok"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          handleFirstClick={handleClosesToast}
        />
      )}

      {savedExist && toast && (
        <Toast
          countDown={countDown}
          header={"Product had been saved already!"}
          phrase={`Click "OK" to continue exploring`}
          title1={"Ok"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          handleFirstClick={handleClosesToast}
        />
      )}

      {
        <Header
          isSignedIn={isSignedIn}
          getUserAfterSignIN={getUserAfterSignIN}
          addToCart={addToCart}
          cartList={cartList}
          getUserName={getUserName}
          sideMenubar={sideMenubar}
          setSideMenubar={setSideMenubar}
          isSignedIn={isSignedIn}
          getUserAfterSignIN={getUserAfterSignIN}
          getUserName={getUserName}
        />
      }

      {
        // subTotal of all carts amount
        <section className="lg:px-5 px-3 my-2">
          <article className="border-b-[.5px] border-slate-200">
            <div className="flex gap-x-3 ">
              <H2_Element text={"Subtotal"} className={"font-medium"} />
              <H2_Element text={cartList.length < 1 ? 0 : totalPrice} />
            </div>
            <Button
              buttonTitle={`Proceed to checkout (${cartList.length || 0} ${cartList.length > 1 ? "items" : "item"} )`}
              className="bg-amber-300 lg:w-100 w-full py-1.5 text-[1.3rem] mb-4 font-medium rounded-lg "
              handleClick={() => handleAddCart(item.id)}
            />
          </article>
        </section>
      }

      {/* Display cart if available */}
      {cartList.length > 0 ? (
        cartList.map((product) => (
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
              <div className="flex w-full justify-between items-center border-2 border-amber-700 rounded-2xl p-1.5 font-bold cursor-pointer">
                <IoNotificationsSharp
                  className=""
                  onClick={() => handleDecreaseStock(product.id)}
                />
                <p>{stockById[product.id]}</p>
                <CiLocationOn onClick={() => handleIncreaseStock(product.id)} />
              </div>
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
                    {product.price}
                    <span className="text-[.6rem]">{product.priceRise}</span>
                  </p>
                </div>
                <p className="text-green-900 font-semibold">In Stock</p>
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
                  handleClick={() => handleDeleteCart(product.id)}
                />

                <Button
                  buttonTitle="Save for later"
                  className="border  py-1.5 px-2.5 text-[1rem] mb-3 font-medium whitespace-nowrap"
                  handleClick={() => {
                    handleSaved(product.id);
                    handleDeleteCart(product.id);
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
              <H2_Element text="Your Swap and Shop Cart is empty" />
              <Link to={"/deals"} className="text-blue-800 text-[1.2rem]">
                Shop today's deals
              </Link>
              {!getUserAfterSignIN && (
                <div>
                  <Button
                    buttonTitle="Sign in to your account"
                    className="bg-amber-300 w-full py-1.5 text-[1.3rem] mb-3 font-medium rounded-lg"
                    handleClick={() => navigate("/profile")}
                  />

                  <Button
                    buttonTitle="Create account now"
                    className="border w-full py-1.5 text-[1.3rem] mb-3 font-medium rounded-lg"
                    handleClick={() => navigate("/profile/createAccount")}
                  />
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      {/* <h2>Saved work</h2>
      <Saved />
 */}
      <Footer />
    </main>
  );
};

export default Cart;
