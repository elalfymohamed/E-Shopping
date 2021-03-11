import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// component
import { Slick } from "../constants";
import slickData from "../data/slickData";
// images
import banner_1 from "../assets/banner/banner-1.jpg";
import banner_2 from "../assets/banner/banner-2.jpg";

const Hero = () => {
  return (
    <section className="hero-section mb-30">
      <Slick slides={slickData} />
      <Container>
        <Row className="mb-4">
          <Col md={8} className="mb-4">
            <div className="hero-section__banner">
              <Link to="/">
                <img src={banner_1} alt="Banner" height="320" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="hero-section__banner">
              <Link to="/">
                <img src={banner_2} alt="Banner" height="320" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
