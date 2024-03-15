import '../styles/About.css';
import reviews from '../utils/reviews';
import Review from './Review';

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <h1 id="about-title">About Us</h1>
                <p id="about-description">
                    We are a team of car washing professionals who are dedicated
                    to providing the best car wash experience for our customers.
                    We have been in business for over 20 years and have served
                    over 100,000 customers. We are proud to be the highest rated
                    car wash in the city of New York.
                </p>
            </div>

            <div className="reviews-container">
                <h2 id="reviews-title">Reviews</h2>
                <div className="reviews">
                    {reviews.map((reviews) => (
                        <Review
                            name={reviews.name}
                            stars={reviews.stars}
                            comment={reviews.comment}
                            profilePicture={reviews.profilePicture}
                            key={reviews.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
