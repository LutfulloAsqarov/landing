import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { RiMenu3Fill } from "react-icons/ri";
import Modal from "../modal";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <nav className="header__nav">
                    <ul
                        className={`header__nav__list ${
                            menuOpen ? "active" : ""
                        }`}
                    >
                        <li className="header__nav__item">
                            <NavLink to={"/#hero"}>Home</NavLink>
                        </li>
                        <li className="header__nav__item">
                            <NavLink to="/#about">About</NavLink>
                        </li>
                        <li className="header__nav__item">
                            <NavLink to="/#contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="header__nav__logo">Landing</div>
                    <button
                        className="header__nav__btn"
                        onClick={() => setIsOpen(true)}
                    >
                        Buy Now
                    </button>
                    <div className="header__burger" onClick={toggleMenu}>
                        <RiMenu3Fill />
                    </div>
                </nav>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <p>@lutfullo_asqarov</p>
            </Modal>
        </header>
    );
};

export default Header;
