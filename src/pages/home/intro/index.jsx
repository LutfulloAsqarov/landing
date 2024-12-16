import React from "react";
import { introData } from "../../../constants";
import "./style.scss";
import ScrollReveal from "../../../components/scroll-reveal";

const IntroCard = ({ card }) => {
    return (
        <ScrollReveal>
            <div key={card.id} className="intro__card">
                <img src={card.image} alt="img" />
                <div className="intro__card__content">
                    <p className="title">{card.title}</p>
                    <p className="desc">{card.desc1}</p>
                    <p className="desc">{card.desc2}</p>
                </div>
            </div>
        </ScrollReveal>
    );
};

const Intro = () => {
    return (
        <section id="intro">
            <div className="container">
                <div className="intro">
                    {introData.map((card) => (
                        <IntroCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Intro;
