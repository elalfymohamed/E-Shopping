import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrandSlider from "./BrandSlider";

// Image
import banner_4 from "../assets/banner/banner-4.jpg";

const BannerNewArrival = () => {
  return (
    <>
      <Row>
        <Col md={4} className="col-12 mt-4 mb-3 pt-4 pb-3">
          <div className="section-new-arrival__banner  banner">
            <Link to="/">
              <img src={banner_4} alr="banner" />
            </Link>
          </div>
        </Col>
        <Col md={4} className="col-12 mt-4 mb-3 pt-4 pb-3">
          <div className="section-new-arrival__banner  banner">
            <Link to="/">
              <img src={banner_4} alr="banner" />
            </Link>
          </div>
        </Col>
        <Col md={4} className="col-12 mt-4 mb-3 pt-4 pb-3">
          <div className="section-new-arrival__banner banner">
            <Link to="/">
              <img src={banner_4} alr="banner" />
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <BrandSlider />
      </Row>
    </>
  );
};

export default BannerNewArrival;
