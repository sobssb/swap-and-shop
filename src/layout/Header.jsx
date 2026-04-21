import React from "react";
import Nav from "../component/Nav";

const Header = () => {
  // this is the hearder of the site containing just the nav bar
  return (
    <header className="sticky top-0 bg-white z-20">
      <Nav  />
    </header>
  );
};

export default Header;
