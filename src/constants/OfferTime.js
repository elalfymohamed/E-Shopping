import React from "react";

const OfferTime = () => {
  return (
    <div className="offer-time-wrap">
      <h2>
        <span>Up To</span>
        55%
      </h2>
      <h3>
        QUALITY &amp; EXCLUSIVE
        <span>Products</span>
      </h3>
      <h4>
        <span>LIMITED TIME OFFER</span>
        Get Your Product
      </h4>
      <div className="count-down">
        <span className="cdown day">
          <span className="time-count">0</span> <p>Days</p>
        </span>
        <span className="cdown hour">
          <span className="time-count">0</span> <p>Hours</p>
        </span>
        <span className="cdown minutes">
          <span className="time-count">00</span> <p>Minute</p>
        </span>
        <span className="cdown second">
          <span className="time-count">00</span> <p>Second</p>
        </span>
      </div>
    </div>
  );
};

export default OfferTime;
