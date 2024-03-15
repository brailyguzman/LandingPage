import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h1 id="contact-title">Contact Us</h1>
            <div className="contact-container">
                <div className="contact-address">
                    <FaMapMarkerAlt className="contact-icon" />
                    <p className="contact-text">
                        123 Syntax Ave
                        <br />
                        New York, NY 12345
                    </p>
                </div>

                <div className="contact-phone">
                    <FaPhoneAlt className="contact-icon" />
                    <p className="contact-text">
                        <a href="tel:" className="contact-link">
                            (123) 456-7890
                        </a>
                    </p>
                </div>

                <div className="contact-email">
                    <FaEnvelope className="contact-icon" />
                    <p className="contact-text">
                        <a href="mailto:" className="contact-link">
                            contact@syntaxcarwash.com
                        </a>
                    </p>
                </div>

                <div className="contact-work-hours">
                    <FaClock className="contact-icon" />
                    <p className="contact-text">
                        Mon - Fri: 8:00 AM - 7:00 PM
                        <br />
                        Sat - Sun: 9:00 AM - 6:00 PM
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
