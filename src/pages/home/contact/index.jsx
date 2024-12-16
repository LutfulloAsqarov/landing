import React from "react";
import "./style.scss";
import ScrollReveal from "../../../components/scroll-reveal";

const Contact = () => {
    return (
        <section id="contact">
            <div className="top"></div>
            <div className="container">
                <ScrollReveal>
                    <div className="contact">
                        <h2 className="title">A Price To Suit Everyone</h2>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus{" "}
                        </p>
                        <p>$40</p>
                        <p>UI Design Kit</p>
                        <p className="desc">See, One price. Simple</p>
                        <button>Purchase Now</button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Contact;
