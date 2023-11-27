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
                <a id="header-title" href="#home">
                    Syntax
                    <FaCar className="header-icon" />
                    <FaWater className="header-icon" />
                </a>
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
                        <FaBars className="hamburger-icon" />
                    </button>
                    {isMenuOpen && (
                        <div className="mobile-menu">
                            <a
                                href="#home"
                                onClick={() => {
                                    setActiveSection('home');
                                    setIsMenuOpen(false);
                                }}
                                className={`${
                                    activeSection === 'home' && 'active'
                                }`}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                }}
                                className={`${
                                    activeSection === 'about' && 'active'
                                }`}
                            >
                                About
                            </a>
                            <a
                                href="#services"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                }}
                                className={`${
                                    activeSection === 'services' && 'active'
                                }`}
                            >
                                Services
                            </a>
                            <a
                                href="#contact"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                }}
                                className={`${
                                    activeSection === 'contact' && 'active'
                                }`}
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
                >
                    Home
                </a>
                <a
                    href="#about"
                    className={`header-link ${
                        activeSection === 'about' && 'active'
                    }`}
                >
                    About
                </a>
                <a
                    href="#services"
                    className={`header-link ${
                        activeSection === 'services' && 'active'
                    }`}
                >
                    Services
                </a>
                <a
                    href="#contact"
                    className={`header-link ${
                        activeSection === 'contact' && 'active'
                    }`}
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;
