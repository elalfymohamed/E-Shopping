import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosShuffle } from "react-icons/io";
import FeaturedList from "./FeaturedList";
import FeaturedAllData from "../data/FeaturedAllData";

const FeaturedSlide = () => {
  const [added, setAdded] = useState(true);
  // const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const [pushData, setPushData] = useState(FeaturedAllData);

  // const length = slides.length;

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  // const nextSlide = () => {
  //   setCurrentSlideIdx(
  //     currentSlideIdx === length - 1 ? 0 : currentSlideIdx + 1
  //   );
  // };

  return (
    <>
      <FeaturedList onPushData={setPushData} pushData={pushData} />

      <Col lg="12">
        <div className="section-featured__content">
          <div className="section-featured__content__pane fade show active">
            <div className="section-featured__content__pane__slider product__slider">
              <div className="section-featured__content__pane__product__slider">
                <button
                  type="button"
                  className="slick_prev slick_arrow"
                  style={{ display: "block" }}
                >
                  <i className="icofont icofont-long-arrow-left"></i>
                </button>
                <div
                  className="section-featured__content__slick__list slick--slick"
                  style={{
                    opacity: 1,
                    width: "4200px",
                    transform: `translate3d(-1200px,0px,0px)`,
                    // {transition: transform 500ms ease 0s}
                  }}
                >
                  <div className="section-featured__content__slick__track">
                    {pushData.map((item) => (
                      <Col
                        className="pb-4 pt-4 slick__slide"
                        aria-hidden={`true`}
                        tabIndex={`-1`}
                        style={{ width: "300px" }}
                        key={item.id}
                      >
                        <div className="product">
                          <div className="image">
                            {item.sale && (
                              <span className="sale label">{item.sale}</span>
                            )}
                            {item.new && (
                              <span className="new label">{item.new}</span>
                            )}
                            <Link to="/" className="img" tabIndex={-1}>
                              <img src={item.src} alt={`product Img`} />
                            </Link>
                            <div className="compare">
                              <Link
                                to="/"
                                tabIndex={`0`}
                                data-tooltip="Compare"
                                className={``}
                              >
                                <IoIosShuffle />
                              </Link>
                              <Link
                                to="/"
                                tabIndex={`0`}
                                data-tooltip="Wishlist"
                                className={``}
                              >
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
                              {added ? (
                                <span>{`ADD TO CART`}</span>
                              ) : (
                                <span>{`ADDED`}</span>
                              )}
                            </div>
                          </div>
                          {/* Content */}
                          <div className="content">
                            {/* Title */}
                            <div className="category__title">
                              <Link to="/" className="cat" tabIndex={`0`}>
                                {item.section}
                              </Link>
                              <h5 className="title">
                                <Link to="/" tabIndex={`0`}>
                                  {item.product_name}
                                </Link>
                              </h5>
                            </div>
                            {/* ratting */}
                            <div className="price__ratting">
                              <h5 className="price">
                                {item.offer && (
                                  <span className="old">{item.offer}</span>
                                )}
                                {item.price}
                              </h5>
                            </div>
                            {/* ratting */}
                            <div className="ratting"></div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="slick_next slick_arrow"
                  style={{ display: "block" }}
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
