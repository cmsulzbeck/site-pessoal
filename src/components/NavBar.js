import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <div className="nav-center">
                    <div className="nav-links">
                        <a 
                            href="#home" 
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </a>
                        <a 
                            href="#skills" 
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </a>
                        <a 
                            href="#projects" 
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </a>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="#"><img src={navIcon2} alt="Facebook" /></a>
                        <a href="#"><img src={navIcon3} alt="Instagram" /></a>
                    </div>
                    <button className="connect-button">Let's Connect</button>
                </div>
            </Container>
        </Navbar>
    )
};