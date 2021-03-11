import React from "react";
import { Container, Row } from "react-bootstrap";

import { Title, FeaturedList } from "../constants";

const Featured = () => {
  return (
    <section className="section-featured" style={{ height: "1000px" }}>
      <Container>
        <Row>
          <Title title="Featured Items" />
          <FeaturedList />
        </Row>
      </Container>
    </section>
  );
};

export default Featured;
