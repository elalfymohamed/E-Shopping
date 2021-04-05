import React from "react";
import { Col } from "react-bootstrap";
import Data from "../data/BrandSliderData";

const BrandSlider = () => {
  return (
    <Col className="section-new-arrival__brand__slider ">
      <div className="section-new-arrival__slick__list">
        <div
          className="section-new-arrival__slick__tract"
          style={{
            width: "3220px",
          }}
        >
          {Data.map((item, i) => (
            <div
              className="section-new-arrival__brand__item"
              style={{ width: "230px" }}
              key={i}
            >
              <img src={item.src} alt="brand" />
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default BrandSlider;
