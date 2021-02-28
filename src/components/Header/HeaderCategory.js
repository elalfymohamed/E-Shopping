import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";

const HeaderCategory = () => {
  return (
    <div className="header__category__section">
      <Container>
        <Row>
          <Col>
            <div className="header__category">
              <div className="header__category__toggle d-block d-lg-none">
                <button className="category__toggle">
                  Categories
                  <AiOutlineArrowDown />
                </button>
              </div>
              <nav className="header__category__menu">
                <ul>
                  <li>
                    <a href="#">Tv &amp; Audio System</a>
                  </li>
                  <li>
                    <a href="#">Computer &amp; Laptop</a>
                  </li>
                  <li>
                    <a href="#">Phones &amp; Tablets</a>
                  </li>
                  <li>
                    <a href="#">Home Appliances</a>
                  </li>
                  <li>
                    <a href="#">Kitchen appliances</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderCategory;
