import React from "react";
import { Container, Row } from "react-bootstrap";
import { Title, FeaturedList, FeaturedSlide } from "../constants";

const Featured = () => {
  return (
    <section className="section-featured" style={{ height: "1000px" }}>
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
