import { useEffect } from "react";
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

function App() {
  const setData = useStoreActions((actions) => actions.setData);
  const setCreateAccount = useStoreActions(
    (actions) => actions.setCreateAccount,
  );
  const getUserAfterSignIN = useStoreState((state) => state.getUserAfterSignIN);
  const setGetUserAfterSignIN = useStoreActions(
    (actions) => actions.setGetUserAfterSignIN,
  );
  const toast = useStoreState((state) => state.toast);
  const setToast = useStoreActions((actions) => actions.setToast);
  const decrementToast = useStoreActions((actions) => actions.decrementToast);
  const setSaved = useStoreActions((actions) => actions.setSaved);
  const setCartList = useStoreActions((actions) => actions.setCartList);
  const setAddToCart = useStoreActions((actions) => actions.setAddToCart);

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

  const navigate = useNavigate();

  // Load cart data from signed-in user when they sign in
  useEffect(() => {
    if (!getUserAfterSignIN) return;
    setAddToCart(getUserAfterSignIN ? getUserAfterSignIN.cart : 0);
    setCartList(getUserAfterSignIN ? getUserAfterSignIN.cartList : []);
    setSaved(getUserAfterSignIN ? getUserAfterSignIN.saved : []);
  }, [getUserAfterSignIN]);

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

          <Route path="deals" element={<Deals />} />

          <Route path="cart" element={<Cart />} />

          <Route path="saved" element={<Saved />} />

          <Route path="brandOutlet" element={<BrandOutlet />} />

          <Route path="giftCards" element={<GiftCards />} />

          <Route path="helpContact" element={<HelpContact />} />

          <Route path="sell" element={<Sell />} />

          <Route path="/swap" element={<Swap />} />

          <Route path="/product/:id" element={<Product />} />

          <Route path="/listItem" element={<ListItem />} />

          <Route path="/searchedProduct" element={<SearchedProduct />} />

          <Route path="*" element={<NotFound404 />} />

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
