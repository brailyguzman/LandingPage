import { FaStar } from 'react-icons/fa';

interface ReviewProps {
    name: string;
    stars: number;
    comment: string;
    profilePicture?: string;
}

const Review = ({ name, stars, comment, profilePicture }: ReviewProps) => {
    return (
        <div className="review">
            <img src={profilePicture} className="review-pfp" />
            <div className="review-content">
                <h3 className="review-name">{name}</h3>
                <p className="review-comment">{comment}</p>
                <div className="review-stars">
                    {Array.from({ length: 5 }, (_, i) => {
                        return (
                            <FaStar
                                key={i}
                                className={`review-star ${
                                    i < stars ? 'active' : ''
                                }`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Review;
