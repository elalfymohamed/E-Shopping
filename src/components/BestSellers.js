import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Slides, Feature } from "../constants";
import BestSellerData from "../data/BestSellerData";
import banner_3 from "../assets/banner/banner-3.jpg";

const BestSellers = () => {
  return (
    <section className="section-best-sellers mb-5 pb-4">
      <Container>
        <Row>
          <Title title="Best Sellers" />
          <Col lg={12}>
            <Row>
              {BestSellerData.map((item) => (
                <Col
                  lg={3}
                  md={6}
                  className="pb-4 pt-4 slick__slide col-12 col-xl-3"
                  style={{ width: "300px" }}
                  key={item.id}
                >
                  <Slides {...item} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={12} className="mt-4 mb-5 pt-4 pb-4">
            <div className="best-sellers__banner banner">
              <Link to="/">
                <img src={banner_3} alt="banner_3" />
              </Link>
            </div>
          </Col>
          {/*  */}
          <Feature />
        </Row>
      </Container>
    </section>
  );
};
export default BestSellers;
