import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosShuffle } from "react-icons/io";
import Menu from "./HeaderMenu";
import logo from "../../assets/logo.png";

const HeaderBottom = () => {
  const [numberCart, setNumberCart] = useState("4");
  const [numberLive, setNumberLive] = useState("6");

  return (
    <div className="header-section__bottom header__sticky">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="header-section__bottom__logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </Col>
          <Col className="d-contents">
            <div className="header-section__bottom__menu">
              <Menu />
            </div>
          </Col>
          <Col>
            <div className="header-section__bottom__shop__links">
              <a href="#" className="shop__links__compare">
                <IoIosShuffle />
              </a>
              <a href="#" className="shop__links__wishlist">
                <AiOutlineHeart />
                <span className={`${numberLive.length ? "number" : ""}`}>
                  {numberLive}
                </span>
              </a>
              <a href="#" className="shop__links__cart">
                <AiOutlineShoppingCart />
                <span className={`${numberCart.length ? "number" : ""}`}>
                  {numberCart}
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBottom;
