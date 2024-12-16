import React, { useState } from "react";
import heroImg from "../../../assets/images/hero-bg.png";
import "./style.scss";
import ScrollReveal from "../../../components/scroll-reveal";
import Modal from "../../../components/modal";
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section id="hero">
            <div className="container">
                <ScrollReveal>
                    <div className="hero">
                        <h1 className="hero__title">
                            Introduce Your Product Quickly & Effectively
                        </h1>
                        <p className="hero__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <div
                            className="hero__btns"
                            onClick={() => setIsOpen(true)}
                        >
                            <button>Purchase UI Kit</button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <p>@lutfullo_asqarov</p>
            </Modal>
        </section>
    );
};

export default Hero;
