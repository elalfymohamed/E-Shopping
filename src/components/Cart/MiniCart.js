import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
//image
import product_1 from "../../assets/product/product-1.png";

const MiniCart = ({ openCart, setOpenCart }) => {
  return (
    <>
      <div className={openCart ? "mini-cart-wrap open" : " mini-cart-wrap "}>
        <div className="mini-cart__close">
          <button
            type="button"
            className="close-cart"
            onClick={() => setOpenCart(!openCart)}
          >
            close
            <AiOutlineClose />
          </button>
        </div>
        <ul className="mini-cart__products">
          <li>
            <Link to="/" className="image">
              <img src={product_1} alt="Product" />
            </Link>
            <div className="content">
              <Link to="/" className="title">
                Waxon Note Book Pro 5
              </Link>
              <div className="price">
                Price:<span> $295</span>
              </div>
              <div className="qty">
                Qty: <span>02</span>
              </div>
            </div>
            <button type="button" className="remove">
              <BsTrash />
            </button>
          </li>
        </ul>
        <div className="mini-cart_bottom">
          <h4 className="mini-cart_bottom_total">
            Total: <span>$ 295</span>
          </h4>
          <div className="button">
            <Link to="/cart">check out</Link>
          </div>
        </div>
      </div>
      <div
        className={openCart ? "cart-overlay visible" : "cart-overlay"}
        onClick={() => setOpenCart(!openCart)}
      />
    </>
  );
};

export default MiniCart;
