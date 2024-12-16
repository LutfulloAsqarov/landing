import React from "react";
import image from "../../../assets/images/about.png";
import "./style.scss";
import { aboutData } from "../../../constants";
import ScrollReveal from "../../../components/scroll-reveal";

const About = () => {
    return (
        // About section

        <section id="about">
            <div className="container">
                <div className="about">
                    <ScrollReveal>
                        <div className="about__content">
                            <div className="about__content__left">
                                <h2 className="title">
                                    Light, Fast & Powerful
                                </h2>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. <br /> Donec quam
                                    felis, ultricies nec, pellentesque eu,
                                    pretium quis, sem. Nulla consequat massa
                                    quis enim.
                                </p>
                                <div className="about__content__cards">
                                    {aboutData.map((card) => (
                                        <div
                                            key={card.id}
                                            className="about__content__card"
                                        >
                                            <p>{card.title}</p>
                                            <p>{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="about__content__right">
                                <img src={image} alt="img" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
