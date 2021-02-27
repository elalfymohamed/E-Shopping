import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderCategory from "./HeaderCategory";

const Header = () => {
  return (
    <header className="header-section">
      <HeaderTop />
      <HeaderBottom />
      <HeaderCategory />
    </header>
  );
};

export default Header;
