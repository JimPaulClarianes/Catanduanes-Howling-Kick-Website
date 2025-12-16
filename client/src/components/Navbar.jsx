import { useState, useEffect } from 'react';
import '../css/navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when link is clicked (mobile)
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
                    Catanduanes Howling Kick
                </a>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a></li>
                    <li><a href="#about" className="nav-link" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#classes" className="nav-link" onClick={handleLinkClick}>Classes</a></li>
                    <li><a href="#instructors" className="nav-link" onClick={handleLinkClick}>Trainor's</a></li>
                    <li><a href="#reviews" className="nav-link" onClick={handleLinkClick}>Reviews</a></li> {/* New link */}
                    <li><a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a></li>
                    <li><a href="#contact" className="nav-link btn btn-primary" onClick={handleLinkClick}>Join Now</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;