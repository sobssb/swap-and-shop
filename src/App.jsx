import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import NotFound404 from "./pages/NotFound404";
import Deals from "./pages/Deals";
import BrandOutlet from "./pages/BrandOutlet";
import GiftCards from "./pages/GiftCards";
import HelpContact from "./pages/HelpContact";
import Sell from "./pages/Sell";
import Cart from "./pages/Cart";
import Saved from "./pages/Saved";
import useFetchData from "./hooks/useFetchData";
import Product from "./pages/Product";
import SearchedProduct from "./pages/SearchedProduct";
import AllProducts from "./data/AllProducts";
import useDetectOutsideClick from "./hooks/useDetectOutsideClick";
import { useNavigate } from "react-router-dom";
import img from "./assets/pending1777314335pngwing.com.png";

function App() {
  const { data, fetchError, isLoading } = useFetchData(
    "http://localhost:3500/products",
  );

  // This is for the login and signUp
  const [showPassword, setShowPassword] = useState(false);
  const [createAccount, setCreateAccount] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || [],
  );
  const [isCompleteLogin, setIsCompleteLogin] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [getUserAfterSignIN, setGetUserAfterSignIN] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  // for the deals page
  const { todayDeals } = AllProducts();

  const navigate = useNavigate();

  // This is for the toast alerts
  const [toast, setToast] = useState(false);
  const [countDown, setCountDown] = useState(3);

  // This is to the addition of carts
  const [addToCart, setAddToCart] = useState(
    getUserAfterSignIN ? getUserAfterSignIN.cart : 0,
  );
  const [cartList, setCartList] = useState(
    getUserAfterSignIN ? getUserAfterSignIN.cartList : [],
  );
  const [addCartSuccessfully, setAddCartSuccessfully] = useState(false);
  const [addCartExist, setAddCartExist] = useState(false);

  // saved products
  const [saved, setSaved] = useState(
    getUserAfterSignIN ? getUserAfterSignIN.saved : [],
  );

  // for the nav
  const [searchResult, setSearchResult] = useState("");
  const [sideMenubar, setSideMenubar] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResult === "") return;
    navigate("/searchedProduct");
  };

  const getUserName = getUserAfterSignIN?.userName?.trim()?.toUpperCase() || "";

  const sideMenu = useDetectOutsideClick(() => setSideMenubar(false));
  //  ///////////////

  // Load cart data from signed-in user when they sign in
  useEffect(() => {
    if (!getUserAfterSignIN) return;
    setAddToCart(getUserAfterSignIN ? getUserAfterSignIN.cart : 0);
    setCartList(getUserAfterSignIN ? getUserAfterSignIN.cartList : []);
  }, [getUserAfterSignIN]);

  // Adding cart and cartList to the user details, showing the details of cart or cartList based on the user that signed in
  const handleUpdateUserDetails = (newCart, newCartList) => {
    // if user doesn't sign in, return i.e stop
    if (!getUserAfterSignIN) return;

    const userFullDetails = createAccount.map((user) => {
      if (
        user.email.trim().toLowerCase() ===
        getUserAfterSignIN.email.trim().toLowerCase()
      ) {
        return {
          ...user,
          cart: newCart,
          cartList: newCartList,
        };
      }
      return user;
    });

    // Saved the latest account details  to localStorage
    localStorage.setItem("currentUser", JSON.stringify(userFullDetails));
    setCreateAccount(userFullDetails);

    // update the current user signed in
    const updateSpecificUser = {
      ...getUserAfterSignIN,
      cart: newCart,
      cartList: newCartList,
    };

    localStorage.setItem("user", JSON.stringify(updateSpecificUser));
    setGetUserAfterSignIN(updateSpecificUser);
  };

  // adding product to cartlist and updating the number of cart i.e increasing
  const handleAddCart = (id) => {
    // if product is now found stop
    if (!id) return;

    // Get the full details of the product
    const findProduct = todayDeals.find((product) => product.id === id);

    // check if product added to cart exist already
    const productExist = cartList.find(
      (product) => product.id === findProduct.id,
    );

    // Cart number increasement if card doesn't exist and less than 10
    let nextCart = addToCart;
    if (!productExist && getUserAfterSignIN && addToCart < 9) {
      nextCart = nextCart + 1;
      setAddToCart(nextCart);
    }
    if (!productExist && !getUserAfterSignIN && addToCart < 9) {
      setAddToCart((prev) => prev + 1);
    }

    if (!productExist) {
      const updatedList = [findProduct, ...cartList];
      handleUpdateUserDetails(nextCart, updatedList);
      setCartList(updatedList);
      setToast(true);
      setAddCartSuccessfully(true);
      setAddCartExist(false);
    } else {
      setToast(true);
      setAddCartExist(true);
      setAddCartSuccessfully(false);
    }
  };

  // Reset countdown when toast opens
  useEffect(() => {
    if (!toast) return;
    setCountDown(3);

    const count = setInterval(() => {
      setCountDown((prev) => (prev > 0 ? prev - 1 : 1));
    }, 500);

    const timer = setTimeout(() => {
      setToast(false);
      // navigate("/profile");
    }, 1500);

    // cleanUp when toast closes or component unmounts
    return () => {
      clearInterval(count);
      clearTimeout(timer);
    };
  }, [toast, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              isSignedIn={isSignedIn}
              getUserAfterSignIN={getUserAfterSignIN}
              data={data}
              fetchError={fetchError}
              isLoading={isLoading}
              addToCart={addToCart}
              cartList={cartList}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
              handleSearchSubmit={handleSearchSubmit}
              getUserName={getUserName}
              sideMenu={sideMenu}
            />
          }
        />

        <Route path="profile">
          <Route
            index
            element={
              <SignIn
                countDown={countDown}
                toast={toast}
                setToast={setToast}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                createAccount={createAccount}
                isCompleteLogin={isCompleteLogin}
                setIsCompleteLogin={setIsCompleteLogin}
                setIsSignedIn={setIsSignedIn}
                setGetUserAfterSignIN={setGetUserAfterSignIN}
                setAddToCart={setAddToCart}
                setCartList={setCartList}
              />
            }
          />
          <Route
            path="/profile/createAccount"
            element={
              <CreateAccount
                countDown={countDown}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                setCreateAccount={setCreateAccount}
                createAccount={createAccount}
                isCompleteLogin={isCompleteLogin}
                setIsCompleteLogin={setIsCompleteLogin}
                toast={toast}
                setToast={setToast}
                addToCart={addToCart}
                cartList={cartList}
              />
            }
          />
        </Route>

        <Route
          path="deals"
          element={
            <Deals
              isSignedIn={isSignedIn}
              getUserAfterSignIN={getUserAfterSignIN}
              todayDeals={todayDeals}
              addToCart={addToCart}
              handleAddCart={handleAddCart}
              countDown={countDown}
              toast={toast}
              setToast={setToast}
              addCartSuccessfully={addCartSuccessfully}
              addCartExist={addCartExist}
              cartList={cartList}
              getUserName={getUserName}
              sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
            />
          }
        />

        <Route
          path="cart"
          element={
            <Cart
              isSignedIn={isSignedIn}
              getUserAfterSignIN={getUserAfterSignIN}
              addToCart={addToCart}
              cartList={cartList}
              setCartList={setCartList}
              createAccount={createAccount}
              setCreateAccount={setCreateAccount}
              setGetUserAfterSignIN={setGetUserAfterSignIN}
              setAddToCart={setAddToCart}
              countDown={countDown}
              toast={toast}
              setToast={setToast}
              todayDeals={todayDeals}
              saved={saved}
              setSaved={setSaved}
              getUserName={getUserName}
              sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
            />
          }
        />

        <Route
          path="saved"
          element={
            <Saved
              isSignedIn={isSignedIn}
              getUserAfterSignIN={getUserAfterSignIN}
              addToCart={addToCart}
              saved={saved}
              setSaved={setSaved}
              cartList={cartList}
              getUserName={getUserName}
              sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
              handleAddCart={handleAddCart}
              createAccount={createAccount}
              setCreateAccount={setCreateAccount}
              setGetUserAfterSignIN={setGetUserAfterSignIN}
            />
          }
        />

        <Route
          path="brandOutlet"
          element={
            <BrandOutlet
              isSignedIn={isSignedIn}
              getUserAfterSignIN={getUserAfterSignIN}
              todayDeals={todayDeals}
              addToCart={addToCart}
              handleAddCart={handleAddCart}
              countDown={countDown}
              toast={toast}
              setToast={setToast}
              addCartSuccessfully={addCartSuccessfully}
              addCartExist={addCartExist}
              cartList={cartList}
              getUserName={getUserName}
              sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
            />
          }
        />

        <Route path="giftCards" element={<GiftCards />} />

        <Route
          path="helpContact"
          element={
            <HelpContact
              getUserName={getUserName}
              isSignedIn={isSignedIn}
              getUserAfterSignIN={getUserAfterSignIN}
              addToCart={addToCart}
              cartList={cartList}
              sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
              sideMenu={sideMenu}
              sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
            />
          }
        />

        <Route path="sell" element={<Sell />} />

        <Route
          path="/product/:id"
          element={
            <Product
              isSignedIn={isSignedIn}
              getUserAfterSignIN={getUserAfterSignIN}
              todayDeals={todayDeals}
              addToCart={addToCart}
              handleAddCart={handleAddCart}
              countDown={countDown}
              toast={toast}
              setToast={setToast}
              addCartSuccessfully={addCartSuccessfully}
              addCartExist={addCartExist}
              cartList={cartList}
              getUserName={getUserName}
              sideMenubar={sideMenubar}
              setSideMenubar={setSideMenubar}
            />
          }
        />

        <Route path="searchedProduct" element={<SearchedProduct />} />

        <Route path="*" element={<NotFound404 />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
