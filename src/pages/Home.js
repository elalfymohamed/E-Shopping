import React from "react";
import {
  Header,
  Hero,
  Featured,
  BestSellers,
  BestDeals,
  NewArrival,
} from "../components";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <BestSellers />
      <BestDeals />
      <NewArrival />
    </>
  );
};

export default Home;
