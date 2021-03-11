import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const SectionTitle = ({ title }) => {
  return (
    <Col lg="12" className="mb-4">
      <div className={`section__title`} data-title={title}>
        <h2>{title}</h2>
      </div>
    </Col>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
