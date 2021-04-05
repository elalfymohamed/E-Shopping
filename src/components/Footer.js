import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FooterTop } from "../constants";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section__subscribe__section">
        <Container>
          <Row>
            <Col lg={6} className="mb-3 mt-3">
              <div className="subscribe__section__subscribe__content">
                <h2>
                  SUBSCRIBE <span>OUR NEWSLETTER</span>
                </h2>
                <h2>
                  <span>TO GET LATEST</span> PRODUCT UPDATE
                </h2>
              </div>
            </Col>
            <Col lg={6} className="mb-3 mt-3">
              <form action="#" className="subscribe__section__subscribe__form">
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="Enter your email here"
                />
                <button type="submit">subscribe</button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterTop />
    </footer>
  );
};

export default Footer;
