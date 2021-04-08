import React, { useState } from "react";
import {
  Header,
  Hero,
  Featured,
  BestSellers,
  BestDeals,
  NewArrival,
  Footer,
  MiniCart,
} from "../components";

const Home = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <MiniCart openCart={openCart} setOpenCart={setOpenCart} />
      <Header setOpenCart={setOpenCart} openCart={openCart} />
      <Hero />
      <Featured />
      <BestSellers />
      <BestDeals />
      <NewArrival />
      <Footer />
    </>
  );
};

export default Home;
