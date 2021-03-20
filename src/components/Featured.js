import React from "react";
import { Container, Row } from "react-bootstrap";
import { Title, FeaturedSlide } from "../constants";

const Featured = () => {
  return (
    <section className="section-featured mb-5 pb-4">
      <Container>
        <Row>
          <Title title="Featured Items" />
          <FeaturedSlide />
        </Row>
      </Container>
    </section>
  );
};

export default Featured;
