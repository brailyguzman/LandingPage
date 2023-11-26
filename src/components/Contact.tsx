import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
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
                    <p className="contact-text">(123) 456-7890</p>
                </div>

                <div className="contact-email">
                    <FaEnvelope className="contact-icon" />
                    <p className="contact-text">
                        <a href="mailto:" className="contact-link">
                            contact@syntaxcarwash.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
