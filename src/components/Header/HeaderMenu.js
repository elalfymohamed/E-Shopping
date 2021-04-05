import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HeaderMenu = ({ width, breakpoint }) => {
  return (
    <nav>
      {width < breakpoint ? <button type="button">+</button> : ""}

      <ul>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li className=" menu__item__children">
          <Link to="/">Shop</Link>
          <ul className="menu__item__sub">
            <li className="menu__item__children">
              <Link to="/">shop grid</Link>
              <ul className="menu__item__sub">
                <li>
                  <Link to="/">shop grid</Link>
                </li>
              </ul>
            </li>
            <li className="menu__item__children">
              <Link to="/">Single Product</Link>
              <ul className="menu__item__sub">
                <li>
                  <Link to="/">Single Product</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu__item__children">
          <Link to="/">PAGES</Link>

          <ul className="menu__item__mega three-column">
            <li>
              <Link to="/">Column One</Link>
              <ul>
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">Best Deals</Link>
                </li>
                <li>
                  <Link to="/">Cart</Link>
                </li>
                <li>
                  <Link to="/">Checkout</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Column Two</Link>
              <ul>
                <li>
                  <Link to="/">Compare</Link>
                </li>
                <li>
                  <Link to="/">Faq</Link>
                </li>
                <li>
                  <Link to="/">Feature</Link>
                </li>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/">Register</Link>
                </li>
                <li>
                  <Link to="/">Store</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/">Column Three</Link>
              <ul>
                <li>
                  <Link to="/">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/">Track Order</Link>
                </li>
                <li>
                  <Link to="/">Wishlist</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu__item__children">
          <Link to="/">BLOG</Link>
          <ul className="menu__item__sub">
            <li>
              <Link to="/">Blog 1 Column Left Sidebar</Link>
            </li>
            <li>
              <Link to="/">Single Blog Left Sidebar</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
