import { Fragment, useEffect, useState } from "react";
import Home from "./pages/home";
import Layout from "./layout";
import { Route, Router, Routes } from "react-router-dom";
import { IoMdArrowRoundUp } from "react-icons/io";

function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Animatsiya bilan scroll qiladi
        });
    };
    return (
        <Fragment>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
            <div className="back-top" onClick={scrollToTop}>
                <IoMdArrowRoundUp />
            </div>
        </Fragment>
    );
}

export default App;
