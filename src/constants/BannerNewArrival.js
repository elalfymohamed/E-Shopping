import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// Image
import banner_4 from "../assets/banner/banner-4.jpg";
import brand_1 from "../assets/brands/brand-1.png";
import brand_2 from "../assets/brands/brand-2.png";
import brand_3 from "../assets/brands/brand-3.png";
import brand_4 from "../assets/brands/brand-4.png";
import brand_5 from "../assets/brands/brand-5.png";

const BannerNewArrival = () => {
  return (
    <>
      <Row>
        <Col md={4} className="col-12 mt-4 mb-5 pt-4 pb-4">
          <div className="section-new-arrival__banner  banner">
            <Link to="/">
              <img src={banner_4} alr="banner" />
            </Link>
          </div>
        </Col>
        <Col md={4} className="col-12 mt-4 mb-5 pt-4 pb-4">
          <div className="section-new-arrival__banner  banner">
            <Link to="/">
              <img src={banner_4} alr="banner" />
            </Link>
          </div>
        </Col>
        <Col md={4} className="col-12 mt-4 mb-5 pt-4 pb-4">
          <div className="section-new-arrival__banner banner">
            <Link to="/">
              <img src={banner_4} alr="banner" />
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </>
  );
};

export default BannerNewArrival;
