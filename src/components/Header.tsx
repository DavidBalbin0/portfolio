

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
        <header className="header">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
                <div className="navbar-links-large">
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                    </ul>
                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>
            <div className={`navbar-links-small ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                </ul>
            </div>
        </header>
    );
}