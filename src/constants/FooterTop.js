import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import payment from "../assets/payment-support.png";

const FooterTop = () => {
  return (
    <>
      <div className="footer-section__footer__top__section">
        <Container>
          <Row>
            <Col>
              <div className="footer-top-section__widget ">
                <div className="footer-top-section__widget__logo">
                  <img src={logo} alt="E&E - Electronics eCommerce" />
                </div>
                <p>
                  Electronics product actual teachings of he great explorer of
                  the truth, the malder of human happiness. No one rejects
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-40">
              <div className="footer__top__section__widget">
                <h4 className="widget-title">CONTACT INFO</h4>
                <p className="contact-info">
                  <span>Address</span>
                  You address will be here
                  <br />
                  Lorem Ipsum text
                </p>
                <p className="contact-info">
                  <span>Phone</span>
                  <a href="tel:233444433">233444433</a>
                  <a href="tel:233444433">233444433</a>
                </p>
                <p className="contact-info">
                  <span>Web</span>
                  <a href="mailto:info@example.com">info@example.com</a>
                  <a href="https://resume-of-elalfy.netlify.app">
                    www.example.com
                  </a>
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-40">
              <div className="footer__top__section__widget">
                <h4 className="widget-title">CUSTOMER CARE</h4>
                <ul className="link-widget">
                  <li>
                    <Link to="/">About us</Link>
                  </li>
                  <li>
                    <Link to="/">Features</Link>
                  </li>
                  <li>
                    <Link to="/">My Account</Link>
                  </li>
                  <li>
                    <Link to="/">Cart</Link>
                  </li>
                  <li>
                    <Link to="/">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/">blog</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-40">
              <div className="footer__top__section__widget">
                <h4 className="widget-title">CUSTOMER CARE</h4>
                <ul className="link-widget">
                  <li>
                    <Link to="/">Track your order</Link>
                  </li>
                  <li>
                    <Link to="/">Locate Store</Link>
                  </li>
                  <li>
                    <Link to="/">Online Support</Link>
                  </li>
                  <li>
                    <Link to="/">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Payment</Link>
                  </li>
                  <li>
                    <Link to="/">Shipping &amp; Returns</Link>
                  </li>
                  <li>
                    <Link to="/">Gift coupon</Link>
                  </li>
                  <li>
                    <Link to="/">Special coupon</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-40">
              <div className="footer-widget">
                <h4 className="widget-title">LATEST TWEET</h4>
                <div className="footer-tweet">
                  <span>Loading...</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-section__footer__bottom__section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="footer__copyright">
                <p>
                  © Copyright, 2021 All Rights Reserved by{" "}
                  <a href="https://resume-of-elalfy.netlify.app">@</a>
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="footer__payments__image">
                <img src={payment} alt="Payment Support Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterTop;
