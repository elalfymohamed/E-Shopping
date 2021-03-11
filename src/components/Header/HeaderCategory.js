import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to="/">Tv &amp; Audio System</Link>
                  </li>
                  <li>
                    <Link to="/">Computer &amp; Laptop</Link>
                  </li>
                  <li>
                    <Link to="/">Phones &amp; Tablets</Link>
                  </li>
                  <li>
                    <Link to="/">Home Appliances</Link>
                  </li>
                  <li>
                    <Link to="/">Kitchen appliances</Link>
                  </li>
                  <li>
                    <Link to="/">Accessories</Link>
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
