import React from "react";

const HeaderMenu = () => {
  return (
    <nav>
      <ul>
        <li className="active">
          <a href="#">Home</a>
        </li>
        <li className=" menu__item__children">
          <a href="#">Shop</a>
          <ul className="menu__item__sub">
            <li className="menu__item__children">
              <a href="#">shop grid</a>
              <ul className="menu__item__sub">
                <li>
                  <a href="#">shop grid</a>
                </li>
              </ul>
            </li>
            <li className="menu__item__children">
              <a href="#">Single Product</a>
              <ul className="menu__item__sub">
                <li>
                  <a href="#">Single Product</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu__item__children">
          <a href="#">PAGES</a>

          <ul className="menu__item__mega three-column">
            <li>
              <a href="#">Column One</a>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Best Deals</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Column Two</a>
              <ul>
                <li>
                  <a href="#">Compare</a>
                </li>
                <li>
                  <a href="#">Faq</a>
                </li>
                <li>
                  <a href="#">Feature</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Store</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Column Three</a>
              <ul>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu__item__children">
          <a href="#">BLOG</a>
          <ul className="menu__item__sub">
            <li>
              <a href="#">Blog 1 Column Left Sidebar</a>
            </li>
            <li>
              <a href="#">Single Blog Left Sidebar</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
