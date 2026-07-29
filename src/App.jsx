import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Toast from "./component/Toast";
import Layout from "./routes/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import NotFound404 from "./pages/NotFound404";
import Deals from "./pages/Deals";
import BrandOutlet from "./pages/BrandOutlet";
import GiftCards from "./pages/GiftCards";
import HelpContact from "./pages/HelpContact";
import Swap from "./pages/Swap";
import Sell from "./pages/Sell";
import Cart from "./pages/Cart";
import Saved from "./pages/Saved";
import ListItem from "./pages/ListItem";
import useFetchData from "./hooks/useFetchData";
import Product from "./pages/Product";
import SearchedProduct from "./pages/SearchedProduct";
import AllProducts from "./data/AllProducts";
import useDetectOutsideClick from "./hooks/useDetectOutsideClick";
import Summary from "./pages/Summary";
import RecentView from "./pages/RecentView";
import BidsOffers from "./pages/BidsOffers";
import Watchlist from "./pages/Watchlist";
import PurchaseHistory from "./pages/PurchaseHistory";
import BuyAgain from "./pages/BuyAgain";
import Selling from "./pages/Selling";
import SavedFeed from "./pages/SavedFeed";
import SavedSearches from "./pages/SavedSearches";
import SavedSellers from "./pages/SavedSellers";
import Payments from "./pages/Payments";
import MyGarage from "./pages/MyGarage";
import Preferences from "./pages/Preferences";
import MyCollection from "./pages/MyCollection";
import Messages from "./pages/Messages";
import PsaVault from "./pages/PsaVault";
import IssueResolutionCenter from "./pages/IssueResolutionCenter";
import { useNavigate } from "react-router-dom";
import img from "./assets/pending1777314335pngwing.com.png";

import { RxHamburgerMenu } from "react-icons/rx";

import { MdAddShoppingCart } from "react-icons/md";

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

  // null means hidden; an object contains the complete toast configuration.
  const [toast, setToast] = useState(null);

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
    setSaved(getUserAfterSignIN ? getUserAfterSignIN.saved : []);
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
  const handleAddCart = (product) => {
    // if product is now found stop
    if (!product) return;

    // check if product added to cart exist already
    const productExist = cartList.find((cart) => cart.id === product.id);

    // Cart number increasement if card doesn't exist and less than 10
    let nextCart = addToCart;
    if (!productExist && addToCart < 9) {
      nextCart = nextCart + 1;
      setAddToCart(nextCart);
    }
    if (!productExist) {
      const updatedList = [product, ...cartList];
      handleUpdateUserDetails(nextCart, updatedList);
      setCartList(updatedList);
      setToast({
        countDown: 3,
        header: "Added to cart successfully!",
        message: "The product was added to your cart.",
        title1: "OK",
        icon: <MdAddShoppingCart className="m-auto mb-3 w-full h-full" />,
      });
      setAddCartSuccessfully(true);
      setAddCartExist(false);
    } else {
      setToast({
        countDown: 3,
        header: "Product already in cart",
        message: "This product is already in your cart.",
        title1: "OK",
        icon: <MdAddShoppingCart className="m-auto mb-3 w-full h-full" />,
      });
      setAddCartExist(true);
      setAddCartSuccessfully(false);
    }
  };

  // Each new toast gets its own timer. Replacing the toast also cancels the old timer.
  useEffect(() => {
    if (!toast) return;

    const timer = setInterval(() => {
      setToast((currentToast) => {
        if (!currentToast) return null;
        if (currentToast.countDown <= 1) {
          if (currentToast.navigateTo) navigate(currentToast.navigateTo);
          return null;
        }
        return {
          ...currentToast,
          countDown: currentToast.countDown - 1,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [toast, navigate]);

  return (
    <>
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
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  setCreateAccount={setCreateAccount}
                  createAccount={createAccount}
                  isCompleteLogin={isCompleteLogin}
                  setIsCompleteLogin={setIsCompleteLogin}
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
                setToast={setToast}
                addCartSuccessfully={addCartSuccessfully}
                addCartExist={addCartExist}
                cartList={cartList}
                getUserName={getUserName}
                sideMenubar={sideMenubar}
                setSideMenubar={setSideMenubar}
                sideMenu={sideMenu}
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
                setToast={setToast}
                todayDeals={todayDeals}
                saved={saved}
                setSaved={setSaved}
                getUserName={getUserName}
                sideMenubar={sideMenubar}
                setSideMenubar={setSideMenubar}
                sideMenu={sideMenu}
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
                createAccount={createAccount}
                setCreateAccount={setCreateAccount}
                setGetUserAfterSignIN={setGetUserAfterSignIN}
                setAddToCart={setAddToCart}
                setCartList={setCartList}
                setToast={setToast}
                sideMenu={sideMenu}
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
                setToast={setToast}
                addCartSuccessfully={addCartSuccessfully}
                addCartExist={addCartExist}
                cartList={cartList}
                getUserName={getUserName}
                sideMenubar={sideMenubar}
                setSideMenubar={setSideMenubar}
                sideMenu={sideMenu}
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

          <Route
            path="sell"
            element={
              <Sell
                addToCart={addToCart}
                isSignedIn={isSignedIn}
                getUserAfterSignIN={getUserAfterSignIN}
                cartList={cartList}
                getUserName={getUserName}
                sideMenubar={sideMenubar}
                setSideMenubar={setSideMenubar}
                sideMenu={sideMenu}
              />
            }
          />

          <Route path="/swap" element={<Swap />} />

          <Route
            path="/product/:id"
            element={
              <Product
                isSignedIn={isSignedIn}
                getUserAfterSignIN={getUserAfterSignIN}
                todayDeals={todayDeals}
                addToCart={addToCart}
                handleAddCart={handleAddCart}
                setToast={setToast}
                addCartSuccessfully={addCartSuccessfully}
                addCartExist={addCartExist}
                cartList={cartList}
                getUserName={getUserName}
                sideMenubar={sideMenubar}
                setSideMenubar={setSideMenubar}
                sideMenu={sideMenu}
              />
            }
          />

          <Route path="/listItem" element={<ListItem />} />

          <Route path="searchedProduct" element={<SearchedProduct />} />

          <Route path="*" element={<NotFound404 />} />
          {/* <Route path="about" element={<About />} /> */}

          {/* this are for the dropdown of my shop */}
          <Route path="summary" element={<Summary />} />
          <Route path="recentView" element={<RecentView />} />
          <Route path="bidsOffers" element={<BidsOffers />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="purchaseHistory" element={<PurchaseHistory />} />
          <Route path="buyAgain" element={<BuyAgain />} />
          <Route path="selling" element={<Selling />} />
          <Route path="savedFeed" element={<SavedFeed />} />
          <Route path="savedSearches" element={<SavedSearches />} />
          <Route path="savedSellers" element={<SavedSellers />} />
          <Route path="payments" element={<Payments />} />
          <Route path="myGarage" element={<MyGarage />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="myCollection" element={<MyCollection />} />
          <Route path="messages" element={<Messages />} />
          <Route path="psaVault" element={<PsaVault />} />
          <Route
            path="issueResolutionCenter"
            element={<IssueResolutionCenter />}
          />
          {/* /////////////////////////// */}
        </Route>
      </Routes>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}

export default App;
