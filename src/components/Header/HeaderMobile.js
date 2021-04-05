import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HeaderMenu from "./HeaderMenu";

const HeaderMobile = ({ width, breakpoint }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header-section__bottom__mobile__menu">
      <div className="mobile__menu__bar">
        <button
          type="button"
          className={`meanmenu__reveal ${openMenu ? "show__menu" : ""}`}
          style={{
            right: 0,
            left: "auto",
            textAlign: "center",
            textIndent: 0,
            fontSize: 0,
          }}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <div
          className="mobile__menu"
          style={{ display: `${openMenu ? "block" : "none"}` }}
        >
          <HeaderMenu width={width} breakpoint={breakpoint} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
