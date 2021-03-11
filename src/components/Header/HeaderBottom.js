import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosShuffle } from "react-icons/io";
import Menu from "./HeaderMenu";
import logo from "../../assets/logo.png";

const HeaderBottom = () => {
  const [numberCart, setNumberCart] = useState("4");
  const [numberLive, setNumberLive] = useState("6");
  const [addClass, setAddClass] = useState(false);

  const checkScroll = () => {
    if (!addClass && window.pageYOffset > 290) {
      setAddClass(true);
    } else if (addClass && window.pageYOffset <= 290) {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  });

  return (
    <div
      className={`header-section__bottom header__sticky ${
        addClass ? "header__is__sticky" : ""
      }`}
    >
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="header-section__bottom__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </Col>
          <Col className="d-contents">
            <div className="header-section__bottom__menu">
              <Menu />
            </div>
          </Col>
          <Col>
            <div className="header-section__bottom__shop__links">
              <Link to="/" className="shop__links__compare">
                <IoIosShuffle />
              </Link>
              <Link to="/" className="shop__links__wishlist">
                <AiOutlineHeart />
                <span className={`${numberLive.length ? "number" : ""}`}>
                  {numberLive}
                </span>
              </Link>
              <Link to="/" className="shop__links__cart">
                <AiOutlineShoppingCart />
                <span className={`${numberCart.length ? "number" : ""}`}>
                  {numberCart}
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBottom;
