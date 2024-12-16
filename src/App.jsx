import { Fragment, lazy, Suspense } from "react";
import Layout from "./layout";
import { Route, Router, Routes } from "react-router-dom";
import { IoMdArrowRoundUp } from "react-icons/io";
import Loader from "./components/Loader";

//lazy loading

const Home = lazy(() => import("./pages/home/index"));

function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <Fragment>
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Layout>
            </Suspense>
            <div className="back-top" onClick={scrollToTop}>
                <IoMdArrowRoundUp />
            </div>
        </Fragment>
    );
}

export default App;
