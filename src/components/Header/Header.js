import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderCategory from "./HeaderCategory";

const Header = ({setOpenCart,openCart}) => {
  return (
    <header className="header-section">
      <HeaderTop />
      <HeaderBottom setOpenCart={setOpenCart} openCart={openCart} />
      <HeaderCategory />
    </header>
  );
};

export default Header;
