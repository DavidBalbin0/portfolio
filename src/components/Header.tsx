// @ts-ignore
import logo from '../assets/logo.svg';
import {useEffect, useState} from "react";

export const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.80
            }
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id)
                    }
                })
            }, options)

            document.querySelectorAll('section').forEach(section => {
                observer.observe(section)
            })


            const onScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
            window.addEventListener("scroll", onScroll);
            return () => {
                observer.disconnect();
                window.removeEventListener("scroll", onScroll);
            }
        }, []
    )

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

                    <a onClick={() => handleScrollToSection('home', 0)}
                       className={activeLink === 'home' ? 'active' : ""}>Home</a>
                    <a onClick={() => handleScrollToSection('about', 150)}
                       className={activeLink === 'about' ? 'active' : ""}>About</a>
                    <a onClick={() => handleScrollToSection('projects', 100)}
                       className={activeLink === 'projects' ? 'active' : ""}>Projects</a>

                </div>
                <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                    <span className="top-line"></span>
                    <span className="middle-line"></span>
                    <span className="bottom-line"></span>
                </div>

            </nav>
            <div className={`navbar-links-small ${isOpen ? 'active' : ''}`}>
            <a onClick={() => handleScrollToSection('home', 0)} className={activeLink === 'home' ? 'active' : ""}>Início</a>
                <a onClick={() => handleScrollToSection('about', 150)} className={activeLink === 'about' ? 'active' : ""}>Sobre</a>
                <a onClick={() => handleScrollToSection('projects', 100)} className={activeLink === 'projects' ? 'active' : ""}>Projetos</a>
            </div>
        </header>
    );
}