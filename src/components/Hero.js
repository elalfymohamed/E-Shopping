import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// component
import Slick from "../constants/Slick";
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
              <a href="#">
                <img src={banner_1} alt="Banner" height="320" />
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="hero-section__banner">
              <a href="#">
                <img src={banner_2} alt="Banner" height="320" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
