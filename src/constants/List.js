import React, { useState } from "react";
import { Col } from "react-bootstrap";
import FeaturedAllData from "../data/FeaturedAllData";
import FeaturedDroneData from "../data/FeaturedDroneData";
import FeaturedLaptopData from "../data/FeaturedLaptopData";

const List = ({ onPushData }) => {
  const [added, setAdded] = useState(0);
  const allData = 0;
  const laptopData = 1;
  const droneData = 2;
  const tvData = 3;
  const phoneData = 4;
  const cameraData = 5;

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
              className={`${allData === added ? "active" : ""}`}
              data-toggle="tab"
              onClick={() => onPushData(FeaturedAllData) || setAdded(allData)}
            >
              all
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              className={`${laptopData === added ? "active" : ""}`}
              onClick={() =>
                onPushData(FeaturedLaptopData) || setAdded(laptopData)
              }
            >
              LAPTOP
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              className={`${droneData === added ? "active" : ""}`}
              onClick={() =>
                onPushData(FeaturedDroneData) || setAdded(droneData)
              }
            >
              DRONE
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              className={`${tvData === added ? "active" : ""}`}
              onClick={() => onPushData(FeaturedAllData) || setAdded(tvData)}
            >
              TV &amp; AUDIO
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              className={`${phoneData === added ? "active" : ""}`}
              onClick={() =>
                onPushData(FeaturedLaptopData) || setAdded(phoneData)
              }
            >
              PHONE &amp; TABLET
            </div>
          </li>
          <li>
            <div
              data-toggle="tab"
              className={`${cameraData === added ? "active" : ""}`}
              onClick={() =>
                onPushData(FeaturedDroneData) || setAdded(cameraData)
              }
            >
              CAMERA &amp; PRINTER
            </div>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default List;
