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

function App() {
  const { data, fetchError, isLoading } = useFetchData(
    "http://localhost:3500/products",
  );
  return (
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
        <Route path="brandOutlet" element={<BrandOutlet />} />
        <Route path="giftCards" element={<GiftCards />} />
        <Route path="helpContact" element={<HelpContact />} />
        <Route path="customerService" element={<CustomerService />} />
        <Route path="sell" element={<Sell />} />
        <Route path="*" element={<NotFound404 />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
