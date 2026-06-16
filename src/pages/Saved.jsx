import React from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import Footer from "../layout/Footer";
import H2_Element from "../component/H2_Element";
import noCartimg from "../assets/pngwing.com (2) (5).png";
// icons
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoNotificationsSharp } from "react-icons/io5";

const Saved = ({
  addToCart,
  getUserAfterSignIN,
  saved,
  setSaved,
  isSignedIn,
  cartList,
  getUserName,
  sideMenubar,
  setSideMenubar,
  handleAddCart,
  createAccount,
  setCreateAccount,
  setGetUserAfterSignIN,
}) => {
  const handleUpdateSaved = (minusSaved, productId) => {
    if (!getUserAfterSignIN) return;

    const newList = createAccount.map((user) => {
      if (
        user.email.trim().toLowerCase() ===
        getUserAfterSignIN.email.trim().toLowerCase()
      ) {
        const updateUser = user.saved.map((save) => {
          if (save.id === productId) {
            return {
              ...save,
              saved: minusSaved,
            };
          }
          return save;
        });
        return {
          ...user,
          saved: updateUser,
        };
      }
      return user;
    });

    // Saved the latest account details  to localStorage
    localStorage.setItem("currentUser", JSON.stringify(newList));
    setCreateAccount(newList);

    // current user singed in
    const updateCurrentUser = getUserAfterSignIN.saved.map((currentUser) => {
      if (currentUser.id === productId) {
        return {
          ...currentUser,
          saved: minusSaved,
        };
      }

      return currentUser;
    });

    const userUpdate = {
      ...getUserAfterSignIN,
      saved: updateCurrentUser,
    };
    localStorage.setItem("user", JSON.stringify(userUpdate));
    setGetUserAfterSignIN(userUpdate);
  };

  const handleDeleteSaved = (id) => {
    if (!id) return;

    const deleteSaved = saved.filter((product) => product.id !== id);
    handleUpdateSaved(deleteSaved, id);
    setSaved(deleteSaved);
  };

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
      />

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
                  handleClick={() => handleDeleteSaved(product.id)}
                />

                <Button
                  buttonTitle="Move to cart"
                  className="border  py-1.5 px-2.5 text-[1rem] mb-3 font-medium whitespace-nowrap"
                  handleClick={() => {
                    handleAddCart(product.id);
                    handleDeleteSaved(product.id);
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
