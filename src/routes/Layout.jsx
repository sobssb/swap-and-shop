import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen w-full relative">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
