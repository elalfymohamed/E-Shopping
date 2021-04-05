import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Slides, BannerNewArrival } from "../constants";
import NewArrivalData from "../data/BestSellerData";
//

const NewArrival = () => {
  return (
    <section className="section-new-arrival mb-5 pb-4">
      <Container>
        <Row>
          <Title title="NEW ARRIVAL" />
          <Col lg={12}>
            <Row>
              {NewArrivalData.map((item) => (
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
        </Row>
        <BannerNewArrival />
      </Container>
    </section>
  );
};

export default NewArrival;
