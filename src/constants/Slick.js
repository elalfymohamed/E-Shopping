import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import slickData from "../data/slickData";

const Slick = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="hero-section__slick">
            <div className="slick__list">
              <div className="slick__list__track">
                {slickData.map((item) => (
                  <div
                    className="slick__track__slide hero--item slick__track__current"
                    key={item.id}
                    aria-hidden={"false"}
                    tabIndex={"0"}
                    role="tabpanel"
                    style={{
                      width: "1110px",
                      position: "relative",
                      left: 0,
                      top: 0,
                      zIndex: 999,
                      opacity: 1,
                    }}
                  >
                    <Row className="align-items-center justify-content-between">
                      <Col className="hero__slink__content">
                        <h3>{item.title}</h3>
                        <h2>
                          <span>{item.title_1}</span>
                        </h2>
                        <h2>
                          {item.title_2}
                          <span className="big">{item.title_4}</span>
                          {item.title_3}
                        </h2>
                        <a href={item.link} tabIndex="0">
                          Get It Now
                        </a>
                      </Col>
                      <Col lg={4} className="p-0 text-end">
                        <img
                          src={item.src}
                          alt={item.title_1}
                          width="264"
                          height="447"
                        />
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Slick;
