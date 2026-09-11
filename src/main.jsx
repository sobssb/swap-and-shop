import { StoreProvider } from "easy-peasy";
import EasyPeasyStore from "./data/EasyPeasyStore.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider store={EasyPeasyStore}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider>
  </StrictMode>,
);
