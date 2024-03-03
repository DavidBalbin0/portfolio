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

    const handleScrollToSection = (sectionId: string, offSet: number) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = element.offsetTop - offSet;
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            })
        }
    }

    return (
        <header className={`header ${isOpen || scrolled ? 'opaque-bg' : ''} `}>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/">
                        <img src={logo} alt="Logo" className={`${!isOpen && !scrolled ? '' : ''}`}/>
                    </a>
                </div>

                <div className="navbar-links-large">

                    <a  onClick={() => handleScrollToSection('home', 0)}>Home</a>
                    <a onClick={() => handleScrollToSection('about', 150)}>About</a>
                    <a onClick={() => handleScrollToSection('projects', 100)}>Projects</a>

                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>
            <div className={`navbar-links-small ${isOpen ? 'active' : ''}`}>
                <a onClick={() => handleScrollToSection('home', 0)}>Início</a>
                <a onClick={() => handleScrollToSection('about', 150)} >Sobre</a>
                <a onClick={() => handleScrollToSection('projects', 100)} >Projetos</a>
            </div>
        </header>
    );
}