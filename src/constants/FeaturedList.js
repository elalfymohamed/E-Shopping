import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const FeaturedList = () => {
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
            <Link className="active" data-toggle="tab" to="/">
              all
            </Link>
          </li>
          <li>
            <Link data-toggle="tab" to="/">
              LAPTOP
            </Link>
          </li>
          <li>
            <Link data-toggle="tab" to="/">
              DRONE
            </Link>
          </li>
          <li>
            <Link data-toggle="tab" to="/">
              TV &amp; AUDIO
            </Link>
          </li>
          <li>
            <Link data-toggle="tab" to="/">
              PHONE &amp; TABLET
            </Link>
          </li>
          <li>
            <Link data-toggle="tab" to="/">
              CAMERA &amp; PRINTER
            </Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FeaturedList;
