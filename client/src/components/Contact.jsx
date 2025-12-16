import { useState } from 'react';
import '../css/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>

                <div className="contact-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>

                    <div className="contact-info">
                        <h3>Visit Our Dojo</h3>

                        <div className="contact-info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Cavinitan, Virac, Catanduanes</span>
                        </div>

                        <div className="contact-info-item">
                            <i className="fas fa-phone"></i>
                            <span>+639636707888</span>
                        </div>

                        <div className="contact-info-item">
                            <i className="fas fa-envelope"></i>
                            <span>catanduaneshowlingkick@gmail.com</span>
                        </div>

                        <div className="contact-info-item">
                            <i className="fas fa-clock"></i>
                            <span>Sunday: 2PM - 3:30PM | Saturday: Closed</span>
                        </div>

                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!4v1765868484090!6m8!1m7!1skYmIgaFNfp8SjHxwzxjksQ!2m2!1d13.58280633252791!2d124.2055971066562!3f21.4928681749994!4f0!5f0.7820865974627469"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dojo Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;