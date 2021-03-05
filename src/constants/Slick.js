import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SlickButton from "./SlickButton";

const Slick = ({ slides }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const length = slides.length;

  const next = () => {
    setCurrentIdx(currentIdx === length - 1 ? 0 : currentIdx + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  console.log(currentSlideIdx);
  useEffect(() => {
    setTimeout(() => {
      setCurrentSlideIdx(
        currentSlideIdx === length - 1 ? 0 : currentSlideIdx + 1
      );
    }, 6000);
  });

  return (
    <Container>
      <Row>
        <Col>
          <div className="hero-section__slick">
            <div className="slick__list">
              <div
                className="slick__list__track"
                style={{ opacity: 1, width: "4445px" }}
              >
                {slides.map((item, i) => (
                  <div
                    className={`slick__track__slide hero--item slick__track__current ${
                      i === currentSlideIdx ? "slide active" : ""
                    }`}
                    key={item.id}
                    aria-hidden={`${i === currentSlideIdx ? "false" : "true"}`}
                    tabIndex={`${i === currentSlideIdx ? "0" : "-1"}`}
                    role="tabpanel"
                    title={item.product_name}
                    style={{
                      width: "1110px",
                      position: "relative",
                      left: `${item.left}px`,
                      top: 0,
                      zIndex: `${i === currentSlideIdx ? "999" : "997"}`,
                      opacity: `${i === currentSlideIdx ? "1" : "0"}`,
                      transition: `${
                        i === currentSlideIdx ? "" : "opacity 500ms ease 0s"
                      }`,
                    }}
                  >
                    <Row className="align-items-center justify-content-between">
                      <Col
                        className={`${
                          i === currentSlideIdx ? "hero__slink__content" : ""
                        }`}
                      >
                        <h3>{item.title}</h3>
                        <h2>
                          <span>{item.product_name}</span>
                        </h2>
                        <h2>
                          {item.offer}
                          <span className="big">{item.percentage}</span>
                          {item.off}
                        </h2>
                        <div className="mt-4">
                          <a
                            href={item.link}
                            tabIndex={`${i === currentSlideIdx ? "0" : "-1"}`}
                          >
                            Get It Now
                          </a>
                        </div>
                      </Col>
                      <Col
                        lg={4}
                        className={`p-0 text-end  ${
                          i === currentSlideIdx ? "hero__slink__image" : ""
                        }`}
                      >
                        <img
                          src={item.src}
                          alt={item.product_name}
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
          <SlickButton onCurrent={setCurrentIdx} setOnCurrent={currentIdx} />
        </Col>
      </Row>
    </Container>
  );
};

export default Slick;
