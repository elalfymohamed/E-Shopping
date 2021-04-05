import React from "react";
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
    return (
        <>
            <MiniCart/>
            <Header/>
            <Hero/>
            <Featured/>
            <BestSellers/>
            <BestDeals/>
            <NewArrival/>
            <Footer/>
        </>
    );
};

export default Home;
