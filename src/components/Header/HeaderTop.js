import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./HeaderSearch";
import Car from "../../assets/icons/car.png";
import Marker from "../../assets/icons/marker.png";

const HeaderTop = () => {
  return (
    <div className="header-section__top header-top__one pt-2 pb-2">
      <Container>
        <Row className="align-items-center ">
          <Col className="mt-3 mb-3">
            <div className="header-section__top__links ">
              <a to="/">
                <img src={Car} alt="Car" />
                <span> Track your order </span>
              </a>
              <a to="/">
                <img src={Marker} alt="Marker" />
                <span> Locate Store </span>
              </a>
            </div>
          </Col>
          <Col className="mt-3 mb-3 ">
            <div className="header-section__top__advance__search">
              <Search />
            </div>
          </Col>
          <Col className="mt-3 mb-3">
            <div className="header-section__top__account__links">
              <a href="#">
                <i className="icofont icofont-user-alt-7" />
                <span>My Account</span>
              </a>
              <a href="#">
                <i className="icofont icofont-login" />
                <span>Login</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
