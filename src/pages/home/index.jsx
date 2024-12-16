import React, { useEffect } from "react";
import Hero from "./hero";
import About from "./about";
import Intro from "./intro";
import Contact from "./contact";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
};

const Home = () => {
    useScrollToHash();
    return (
        <>
            <Hero />
            <About />
            <Intro />
            <Contact />
        </>
    );
};

export default Home;
