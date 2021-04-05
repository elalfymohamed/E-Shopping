import React from "react";
// React Bootstrap
import { Col } from "react-bootstrap";
// images
import van from "../assets/icons/feature-van.png";
import walet from "../assets/icons/feature-walet.png";
import shield from "../assets/icons/feature-shield.png";

const Feature = () => {
  const FeatureData = [
    {
      icon: van,
      title: "FREE SHIPPING",
      info: "Start from $100",
    },
    {
      icon: walet,
      title: "MONEY BACK GUARANTEE",
      info: "Back within 15 days",
    },
    {
      icon: shield,
      title: "SECURE PAYMENTS",
      info: "Payment Security",
    },
  ];
  return (
    <>
      {FeatureData.map((item, i) => (
        <Col lg={4} md={6} className="col-12 mb-3" key={i}>
          <div className="feature feature-security">
            <div className="feature-wrap">
              <div className="icon">
                <img src={item.icon} alt="" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default Feature;
