import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosShuffle } from "react-icons/io";

const Slides = ({
  sale,
  new_product,
  src,
  section,
  product_name,
  offer,
  price,
  onChange,
}) => {
  const [added, setAdded] = useState(true);

  console.log(onChange);

  return (
    <Col
      className="pb-4 pt-4 slick__slide"
      aria-hidden={`${onChange ? "true" : "false"}`}
      tabIndex={`-1`}
      style={{ width: "300px" }}
    >
      <div className="product">
        <div className="image">
          {sale && <span className="sale label">{sale}</span>}
          {new_product && <span className="new label">{new_product}</span>}
          <Link to="/" className="img" tabIndex={-1}>
            <img src={src} alt={`product Img`} />
          </Link>
          <div className="compare">
            <Link to="/" tabIndex={`0`} data-tooltip="Compare" className={``}>
              <IoIosShuffle />
            </Link>
            <Link to="/" tabIndex={`0`} data-tooltip="Wishlist" className={``}>
              <AiOutlineHeart />
            </Link>
          </div>
          <div
            tabIndex={`0`}
            className={`add-to-cart ${added ? "" : "added"}`}
            onClick={() => setAdded(!added)}
          >
            {added ? (
              <i className="icofont-cart"></i>
            ) : (
              <i className="icofont-check-alt"></i>
            )}
            {added ? <span>{`ADD TO CART`}</span> : <span>{`ADDED`}</span>}
          </div>
        </div>
        {/* Content */}
        <div className="content">
          {/* Title */}
          <div className="category__title">
            <Link to="/" className="cat" tabIndex={`0`}>
              {section}
            </Link>
            <h5 className="title">
              <Link to="/" tabIndex={`0`}>
                {product_name}
              </Link>
            </h5>
          </div>
          {/* ratting */}
          <div className="price__ratting">
            <h5 className="price">
              {offer && <span className="old">{offer}</span>}
              {price}
            </h5>
          </div>
          {/* ratting */}
          <div className="ratting"></div>
        </div>
      </div>
    </Col>
  );
};

export default Slides;
