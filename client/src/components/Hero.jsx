import '../css/hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <h1 className="hero-title">
                    Unleash your potential, Train <span>Taekwondo</span>, live with discipline
                </h1>
                <p className="hero-subtitle">
                    Build strength, discipline, and confidence through traditional Taekwondo training for all ages and skill levels.
                </p>
                <div className="hero-buttons">
                    <a href="#classes" className="btn btn-primary">View Classes</a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;