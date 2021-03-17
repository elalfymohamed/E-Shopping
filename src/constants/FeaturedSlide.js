import React, { useState } from "react";
import { Col } from "react-bootstrap";
import FeaturedList from "./List";
import Slides from "./Slides";
import FeaturedAllData from "../data/FeaturedAllData";

const FeaturedSlide = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [transWight, setTransWight] = useState(-1200);
  const [pushData, setPushData] = useState(FeaturedAllData);
  const length = pushData.length;

  // if (!Array.isArray(pushData) || pushData.length <= 0) {
  //   return null;
  // }
  const nextSlide = () => {
    setCurrentSlideIdx(
      currentSlideIdx === length - 1 ? 0 : currentSlideIdx + 1
    );
    setTransWight(transWight === -2400 ? -1200 : transWight + -300);
  };
  const prevSlide = () => {
    setCurrentSlideIdx(
      currentSlideIdx === 0 ? length - 1 : currentSlideIdx - 1
    );
    setTransWight(transWight === 0 ? -2400 : transWight - -300);
  };

  return (
    <>
      <FeaturedList onPushData={setPushData} />

      <Col lg="12">
        <div className="section-featured__content">
          <div className="section-featured__content__pane fade show active">
            <div className="section-featured__content__pane__slider product__slider">
              <div className="section-featured__content__pane__product__slider">
                <button
                  type="button"
                  className="slick_prev slick_arrow"
                  style={{ display: "block" }}
                  onClick={() => prevSlide()}
                >
                  <i className="icofont icofont-long-arrow-left"></i>
                </button>
                <div
                  className="section-featured__content__slick__list slick--slick"
                  style={{
                    opacity: 1,
                    width: "4200px",
                    transform: `translate3d( ${transWight}px, 0px, 0px)`,
                    transition: `${
                      currentSlideIdx && `transform 500ms ease 0s`
                    }`,
                  }}
                >
                  <div className="section-featured__content__slick__track">
                    {pushData.map((item) => (
                      <Slides
                        key={item.id}
                        {...item}
                        onChange={currentSlideIdx}
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="slick_next slick_arrow"
                  style={{ display: "block" }}
                  onClick={() => nextSlide()}
                >
                  <i className="icofont icofont-long-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default FeaturedSlide;
