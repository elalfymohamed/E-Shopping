import React, { useState } from "react";
import { Col } from "react-bootstrap";
import FeaturedAllData from "../data/FeaturedAllData";
import FeaturedDroneData from "../data/FeaturedDroneData";
import FeaturedLaptopData from "../data/FeaturedLaptopData";

const FeaturedList = ({ onPushData, pushData }) => {
  const [added, setAdded] = useState("");

  return (
    <Col lg="12" className="mb-4">
      <div className="section-featured__product__filter">
        <button className="product__filter__toggle">
          showings
          <span>All</span>
          <i className="icofont icofont-simple-down" />
        </button>
        <ul className="product__filter__list">
          <li>
            <div
              className={`${added ? "" : "active"}`}
              data-toggle="tab"
              onClick={() => onPushData(FeaturedAllData) || setAdded("active")}
            >
              all
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              className={`${added}`}
              onClick={() =>
                onPushData(FeaturedLaptopData) || setAdded("active")
              }
            >
              LAPTOP
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              className={`${added}`}
              onClick={() => onPushData(FeaturedDroneData)}
            >
              DRONE
            </div>
          </li>
          <li>
            <div data-toggle="tab" onClick={() => onPushData(FeaturedAllData)}>
              TV &amp; AUDIO
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              onClick={() => onPushData(FeaturedLaptopData)}
            >
              PHONE &amp; TABLET
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              onClick={() => onPushData(FeaturedDroneData)}
            >
              CAMERA &amp; PRINTER
            </div>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FeaturedList;
