import '../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-about">
                    <h2 className="footer-logo">Catanduanes Howling Kick</h2>
                    <p className="footer-about-text">
                        Empowering individuals through the art of Taekwondo. Building strength, discipline, and confidence since 2023.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#classes">Classes</a></li>
                        <li><a href="#instructors">Trainor's</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <div className="footer-contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Cavinitan, Virac, Catanduanes</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fas fa-phone"></i>
                        <span>+639636707888</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fas fa-envelope"></i>
                        <span>catanduaneshowlingkick@gmail.com</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fas fa-clock"></i>
                        <span>Sunday: 2PM - 3:30PM</span>
                    </div>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="footer-social-links">
                        <a href="https://www.facebook.com/catanduaneshowlingkickstaekwondotrainingcenter" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Catanduanes Howling Kick. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;