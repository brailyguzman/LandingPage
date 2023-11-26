import '../styles/Header.css';
import { useState } from 'react';
import { FaBars, FaCar, FaWater } from 'react-icons/fa';

interface HeaderProps {
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="header">
            <div className="header-title-container">
                <h1 id="header-title">
                    Syntax
                    <FaCar className="header-icon" />
                    <FaWater className="header-icon" />
                </h1>
            </div>

            <div className="mobile-navigation">
                <nav
                    className={`header-menu ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="hamburger-menu"
                    >
                        <FaBars className="hamburger-icon"/>
                    </button>
                    {isMenuOpen && (
                        <div className="mobile-menu">
                            <a
                                href="#home"
                                onClick={() => {
                                    setActiveSection('home');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                onClick={() => {
                                    setActiveSection('about');
                                    setIsMenuOpen(false);
                                }}
                            >
                                About
                            </a>
                            <a
                                href="#services"
                                onClick={() => {
                                    setActiveSection('services');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Services
                            </a>
                            <a
                                href="#contact"
                                onClick={() => {
                                    setActiveSection('contact');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Contact
                            </a>
                        </div>
                    )}
                </nav>
            </div>

            <nav
                className="header-nav"
                style={isMenuOpen ? { display: 'none' } : {}}
            >
                <a
                    href="#home"
                    className={`header-link ${
                        activeSection === 'home' && 'active'
                    }`}
                    onClick={() => setActiveSection('home')}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className={`header-link ${
                        activeSection === 'about' && 'active'
                    }`}
                    onClick={() => setActiveSection('about')}
                >
                    About
                </a>
                <a
                    href="#services"
                    className={`header-link ${
                        activeSection === 'services' && 'active'
                    }`}
                    onClick={() => setActiveSection('services')}
                >
                    Services
                </a>
                <a
                    href="#contact"
                    className={`header-link ${
                        activeSection === 'contact' && 'active'
                    }`}
                    onClick={() => setActiveSection('contact')}
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;
