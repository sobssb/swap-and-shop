import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const Layout = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
