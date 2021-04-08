import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {IoIosShuffle} from "react-icons/io";
import Menu from "./HeaderMenu";
import HeaderMobile from "./HeaderMobile";
import logo from "../../assets/logo.png";

const HeaderBottom = ({setOpenCart, openCart}) => {
    const [numberCart, setNumberCart] = useState("4");
    const [numberLive, setNumberLive] = useState("6");
    const [addClass, setAddClass] = useState(false);
    const [width, setWidth] = useState(Inner);
    const breakpoint = 992;
    let Inner;

    if (typeof Window !== `undefined`) {
        Inner = window.innerWidth;
    }

    //
    const checkScroll = () => {
        if (!addClass && window.pageYOffset > 290) {
            setAddClass(true);
        } else if (addClass && window.pageYOffset <= 290) {
            setAddClass(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
    });

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        // className={`header-section__bottom header__sticky ${addClass ? "header__is__sticky" : ""}`}
        <div className={`header-section__bottom header__sticky`}>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="header-section__bottom__logo">
                            <Link to="/">
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                    </Col>
                    <Col className="d-contents">
                        {width < breakpoint ? (
                            <HeaderMobile width={breakpoint} breakpoint={breakpoint}/>
                        ) : (
                            <div className="header-section__bottom__menu">
                                <Menu/>
                            </div>
                        )}
                    </Col>
                    <Col>
                        <div className="header-section__bottom__shop__links">
                            <Link to="/" className="shop__links__compare">
                                <IoIosShuffle/>
                            </Link>
                            <Link to="/" className="shop__links__wishlist">
                                <AiOutlineHeart/>
                                <span className={`${numberLive.length ? "number" : ""}`}>
                  {numberLive}
                </span>
                            </Link>
                            <Link to="/" className="shop__links__cart" onClick={() => setOpenCart(!openCart)}>
                                <AiOutlineShoppingCart/>
                                <span className={`${numberCart.length ? "number" : ""}`}>
                  {numberCart}
                </span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderBottom;
