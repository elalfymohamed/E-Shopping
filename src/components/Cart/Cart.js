import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer";
// image
import emptyCart from "../../assets/empty-state-cart.svg";

const Cart = () => {
  let history = useHistory();
  return (
    <>
      <Header />
      <section className="section-cart">
        <Container>
          <Row>
            <Col>
              <div className="section-cart_empty">
                <img src={emptyCart} alt="your cart is empty" />
                <p>Your cart is empty</p>
                <button
                  className="btn"
                  type="button"
                  aria-label="Start shopping"
                  onClick={() => history.push("/")}
                >
                  Start shopping
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
