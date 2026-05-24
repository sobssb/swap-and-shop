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
import CustomerService from "./pages/CustomerService";
import Sell from "./pages/Sell";
import useFetchData from "./hooks/useFetchData";
import Product from "./pages/Product";
import SearchedProduct from "./pages/SearchedProduct";
import { GrDocumentUser } from "react-icons/gr";
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

  const navigate = useNavigate();

  // This is for the toast alerts
  const [toast, setToast] = useState(false);
  const [countDown, setCountDown] = useState(3);

  // Reset countdown when toast opens
  useEffect(() => {
    if (!toast) return;
    setCountDown(3);

    const count = setInterval(() => {
      setCountDown((prev) => (prev > 0 ? prev - 1 : 1));
    }, 1000);

    const timer = setTimeout(() => {
      setToast(false);
      // navigate("/profile");
    }, 3000);

    // cleanUp when toast closes or component unmounts
    return () => {
      clearInterval(count);
      clearTimeout(timer);
    };
  }, [toast, navigate]);

  // for the deals page
  const todayDeals = [
    {
      image: img,
      shortDetails:
        "Inpire Black Nitrile Disposable Gloves | 4.5 Nitrle for more info",
      id: 1,
      brand: "inspire",
      linkText: "Shop Inspire deals",
      type: "List",
      text: "Limited time deal",
      price: "41,113",
      currency: "NGN",
      priceRise: 59,
      oldPrice: "60, 240.04",
      percentage: "30% off",
    },
    {
      image: img,
      shortDetails:
        "Inpire Black Nitrile Disposable Gloves | 4.5 Nitrle for more info",
      id: 2,
      brand: "levoit",
      linkText: "Shop Inspire deals",
      type: "List",
      text: "Limited time deal",
      price: "81,113",
      currency: "NGN",
      priceRise: 99,
      oldPrice: "90, 260.04",
      percentage: "34% off",
    },
    {
      image: img,
      shortDetails:
        "Inpire Black Nitrile Disposable Gloves | 4.5 Nitrle for more info",
      id: 3,
      brand: "lenovo",
      linkText: "Shop Inspire deals",
      type: "Typical",
      text: "Limited time deal",
      price: "41,113",
      currency: "NGN",
      priceRise: 59,
      oldPrice: "60, 240.04",
      percentage: "36% off",
    },
    {
      image: img,
      shortDetails:
        "Inpire Black Nitrile Disposable Gloves | 4.5 Nitrle for more info",
      id: 4,
      brand: "ring",
      linkText: "Shop Inspire deals",
      type: "List",
      text: "Limited time deal",
      price: "41,113",
      currency: "NGN",
      priceRise: 59,
      oldPrice: "60, 240.04",
      percentage: "30% off",
    },
    {
      image: img,
      shortDetails:
        "Inpire Black Nitrile Disposable Gloves | 4.5 Nitrle for more info",
      id: 5,
      brand: "iphone",
      linkText: "Shop Inspire deals",
      type: "Typical",
      text: "Limited time deal",
      price: "41,113",
      currency: "NGN",
      priceRise: 59,
      oldPrice: "60, 240.04",
      percentage: "20% off",
    },
    {
      image: img,
      shortDetails:
        "Inpire Black Nitrile Disposable Gloves | 4.5 Nitrle for more info",
      id: 6,
      brand: "samsung",
      linkText: "Shop Inspire deals",
      type: "List",
      text: "Limited time deal",
      price: "41,113",
      currency: "NGN",
      priceRise: 59,
      oldPrice: "60, 240.04",
      percentage: "25% off",
    },
    {
      image: img,
      shortDetails:
        "Inpire Black Nitrile Disposable Gloves | 4.5 Nitrle for more info",
      id: 7,
      brand: "inspire",
      linkText: "Shop Inspire deals",
      type: "List",
      text: "Limited time deal",
      price: "41,113",
      currency: "NGN",
      priceRise: 59,
      oldPrice: "60, 240.04",
      percentage: "40% off",
    },
    {
      image: img,
      shortDetails:
        "Inpire Black Nitrile Disposable Gloves | 4.5 Nitrle for more info",
      id: 8,
      brand: "levoit",
      linkText: "Shop Inspire deals",
      type: "Typical",
      text: "Limited time deal",
      price: "41,113",
      currency: "NGN",
      priceRise: 59,
      oldPrice: "60, 240.04",
      percentage: "50% off",
    },
  ];

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
            />
          }
        />
        <Route path="brandOutlet" element={<BrandOutlet />} />
        <Route path="giftCards" element={<GiftCards />} />
        <Route path="helpContact" element={<HelpContact />} />
        <Route path="customerService" element={<CustomerService />} />
        <Route path="sell" element={<Sell />} />
        <Route
          path="/product/:id"
          element={
            <Product
              isSignedIn={isSignedIn}
              getUserAfterSignIN={getUserAfterSignIN}
              todayDeals={todayDeals}
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
