import '../css/about.css';
import AboutImage from '../asset/about-image.jpg'

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Howling Kick Taekwondo</h2>

                <div className="about-container">
                    <div className="about-image-wrapper">
                        <img
                            src={AboutImage}
                            alt="Taekwondo Training Session"
                            className="about-image"
                        />
                    </div>

                    <div className="about-content">
                        <h3>Our Mission & Philosophy</h3>
                        <p>
                            Founded in 2010, Howling Kick Taekwondo is dedicated to teaching the traditional art of Taekwondo while fostering personal growth, discipline, and respect in every student.
                        </p>
                        <p>
                            We believe that Taekwondo is more than just a martial art—it's a way of life that builds physical strength, mental resilience, and moral character.
                        </p>

                        <ul className="about-features">
                            <li className="about-feature">
                                <i className="fas fa-check-circle"></i>
                                <span>Certified and Experienced Instructors</span>
                            </li>
                            <li className="about-feature">
                                <i className="fas fa-check-circle"></i>
                                <span>Age-Appropriate Training Programs</span>
                            </li>
                            <li className="about-feature">
                                <i className="fas fa-check-circle"></i>
                                <span>Modern Training Facilities</span>
                            </li>
                            <li className="about-feature">
                                <i className="fas fa-check-circle"></i>
                                <span>Tournament and Competition Opportunities</span>
                            </li>
                            <li className="about-feature">
                                <i className="fas fa-check-circle"></i>
                                <span>Family-Friendly Environment</span>
                            </li>
                        </ul>

                        <a href="#contact" className="btn btn-primary">Learn More About Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;