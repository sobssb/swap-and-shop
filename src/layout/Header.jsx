import React from "react";
import Nav from "../component/Nav";
import Nav2 from "../component/Nav2";

const Header = ({ getUserAfterSignIN, isSignedIn }) => {
  // this is the hearder of the site containing just the nav bar
  return (
    <header className="sticky top-0 bg-white z-20">
      <Nav isSignedIn={isSignedIn}  getUserAfterSignIN={getUserAfterSignIN} />
    </header>
  );
};

export default Header;
