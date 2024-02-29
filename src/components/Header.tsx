// @ts-ignore
import logo from '../assets/logo.svg';
import {useEffect, useState} from "react";

export const Header = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
            const onScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }, []
    )

    const onUpdateActiveLink = (link: string) => {
        setActiveLink(link);
    }

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen || scrolled ? 'opaque-bg' : ''} `}>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/">
                        <img src={logo} alt="Logo" className={`${!isOpen && !scrolled ? '' : ''}`}/>
                    </a>
                </div>
                <div className="navbar-links-large">

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>

                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>
            <div className={`navbar-links-small ${isOpen ? 'active' : ''}`}>
                    <a href="#home">Início</a>
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
            </div>
        </header>
    );
}