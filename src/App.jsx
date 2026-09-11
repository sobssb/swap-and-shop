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
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import img from "./assets/pending1777314335pngwing.com.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdAddShoppingCart } from "react-icons/md";

function App() {
  const setData = useStoreActions((actions) => actions.setData);

  const createAccount = useStoreState((state) => state.createAccount);
  const setCreateAccount = useStoreActions(
    (actions) => actions.setCreateAccount,
  );
  const getUserAfterSignIN = useStoreState((state) => state.getUserAfterSignIN);
  const setGetUserAfterSignIN = useStoreActions(
    (actions) => actions.setGetUserAfterSignIN,
  );
  const isSignedIn = useStoreState((state) => state.isSignedIn);

  const toast = useStoreState((state) => state.toast);
  const setToast = useStoreActions((actions) => actions.setToast);
  const decrementToast = useStoreActions((actions) => actions.decrementToast);

  const saved = useStoreState((state) => state.saved);
  const setSaved = useStoreActions((actions) => actions.setSaved);
  const cartList = useStoreState((state) => state.cartList);
  const setCartList = useStoreActions((actions) => actions.setCartList);
  // This is to the addition of carts
  const addToCart = useStoreState((state) => state.addToCart);
  const setAddToCart = useStoreActions((actions) => actions.setAddToCart);
  const addCartSuccessfully = useStoreState(
    (state) => state.addCartSuccessfully,
  );
  const setAddCartSuccessfully = useStoreActions(
    (actions) => actions.setAddCartSuccessfully,
  );
  const addCartExist = useStoreState((state) => state.addCartExist);
  const setAddCartExist = useStoreActions((actions) => actions.setAddCartExist);
  const sideMenubar = useStoreState((state) => state.sideMenubar);
  const setSideMenubar = useStoreActions((actions) => actions.setSideMenubar);

  const { data, fetchError, isLoading } = useFetchData(
    "http://localhost:3500/products",
  );

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  useEffect(() => {
    setCreateAccount(JSON.parse(localStorage.getItem("allUsers")) || []);
  }, [setCreateAccount]);

  useEffect(() => {
    setGetUserAfterSignIN(JSON.parse(localStorage.getItem("user")) || null);
  }, [setGetUserAfterSignIN]);

  useEffect(() => {
    setCartList(getUserAfterSignIN ? getUserAfterSignIN.cartList : []);
    setAddToCart(getUserAfterSignIN ? getUserAfterSignIN.cart : 0);
    setSaved(getUserAfterSignIN ? getUserAfterSignIN.saved : []);
  }, [setCartList, setAddToCart, setSaved]);

  // This is for the login and signUp

  const navigate = useNavigate();

  const getUserName = getUserAfterSignIN?.userName?.trim()?.toUpperCase() || "";

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
    localStorage.setItem("allUsers", JSON.stringify(userFullDetails));
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
      if (toast.countDown <= 1) {
        if (toast.navigateTo) navigate(toast.navigateTo);
        setToast(null);
        return;
      }

      decrementToast();
    }, 1000);

    return () => clearInterval(timer);
  }, [toast, navigate, setToast, decrementToast]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home data={data} fetchError={fetchError} isLoading={isLoading} />
            }
          />

          <Route path="profile">
            <Route index element={<SignIn />} />

            <Route path="/profile/createAccount" element={<CreateAccount />} />
          </Route>

          <Route
            path="deals"
            element={<Deals handleAddCart={handleAddCart} />}
          />

          <Route path="cart" element={<Cart />} />

          <Route path="saved" element={<Saved />} />

          <Route path="brandOutlet" element={<BrandOutlet />} />

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
                addToCart={addToCart}
                handleAddCart={handleAddCart}
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

          <Route path="/listItem" element={<ListItem />} />

          <Route path="/searchedProduct" element={<SearchedProduct />} />

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
