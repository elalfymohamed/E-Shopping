import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, List, Slides, OfferTime } from "../constants";
import FeaturedAllData from "../data/FeaturedAllData";

const BestDeals = () => {
  const [pushData, setPushData] = useState(FeaturedAllData);
  return (
    <section className="best-deals-section mb-5 pb-4">
      <Container>
        <Row>
          <Title title="BEST DEALS" />
          <Col>
            <List onPushData={setPushData} />
            <Row className="best-deals-section__offer__product__wrap">
              <Col>
                <OfferTime />
              </Col>
              <Col lg={12}>
                <div className="best-deals-section__content">
                  <div className="best-deals-section__content__pane fade">
                    <div className="content__pane__product__slider">
                      <button
                        type="button"
                        className="slick_prev slick_arrow"
                        style={{ display: "block" }}
                        // onClick={() => prevSlide()}
                      >
                        <i className="icofont icofont-long-arrow-left"></i>
                      </button>
                      <div className="product__slider__slick__list">
                        <div
                          className="product__slider__slick__track"
                          style={{
                            opacity: 1,
                            width: "4050px",
                            transform: "translate3d(-820px,0px,0px)",
                          }}
                        >
                          {pushData.map((item) => (
                            <Col
                              className="pb-4 pt-4 slick__slide "
                              aria-hidden="false"
                              tabIndex="-1"
                              style={{ width: "270px" }}
                              key={item.id}
                            >
                              <Slides {...item} />
                            </Col>
                          ))}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="slick_next slick_arrow"
                        style={{ display: "block" }}
                        // onClick={() => nextSlide()}
                      >
                        <i className="icofont icofont-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestDeals;
