import React from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer__top">
                        <p>©2023 Yourcompany</p>
                        <div className="header__nav__logo">Landing</div>
                        <button>Purchase Now</button>
                    </div>
                    <div className="footer__bottom">
                        <nav className="footer__nav">
                            <ul className={`footer__nav__list `}>
                                <li className="footer__nav__item">
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li className="footer__nav__item">
                                    <a href={"#about"}>About</a>
                                </li>
                                <li className="footer__nav__item">
                                    <NavLink to={"/#contact"}>Contact</NavLink>
                                </li>
                            </ul>
                            <ul className={`footer__nav__list `} style={{gap:"30px"}}>
                                <li className="footer__nav__item">
                                    <Link to={"/"}>
                                        <FaFacebookF />
                                    </Link>
                                </li>
                                <li className="footer__nav__item">
                                    <Link to={"/"}>
                                        <FaLinkedinIn />
                                    </Link>
                                </li>
                                <li className="footer__nav__item">
                                    <Link to={"/"}>
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li className="footer__nav__item">
                                    <Link to={"/"}>
                                        <FaYoutube />
                                    </Link>
                                </li>
                                <li className="footer__nav__item">
                                    <Link to={"/"}>
                                        <FaInstagram />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
