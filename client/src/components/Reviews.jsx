import '../css/reviews.css';

const Reviews = () => {
    // Helper to render star ratings with Font Awesome
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fas ${i <= rating ? 'fa-star' : 'fa-star-o'}`}
                    aria-hidden="true"
                ></i>
            );
        }
        return <div className="review-rating">{stars}</div>;
    };

    // Sample student review data
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Parent of Little Tigers Student",
            rating: 5,
            comment: "My 5-year-old son has been attending Howling Kick for 6 months and the change is incredible. He's more disciplined, confident, and looks forward to every class. The instructors are patient and amazing with kids!",
            avatar: "https://picsum.photos/id/1027/100/100"
        },
        {
            id: 2,
            name: "Mark Thompson",
            role: "Teen Taekwondo Student (2 Years)",
            rating: 5,
            comment: "I joined Howling Kick to get in shape and learn self-defense, but it's become so much more. The instructors push you to be your best, and the community here is like family. I just earned my blue belt and can't wait to keep going!",
            avatar: "https://picsum.photos/id/1074/100/100"
        },
        {
            id: 3,
            name: "Lisa Chen",
            role: "Adult Taekwondo Student (1 Year)",
            rating: 4,
            comment: "I was nervous to start Taekwondo as an adult, but the instructors made me feel welcome right away. The classes are challenging but fun, and I've noticed a huge improvement in my strength and confidence. Highly recommend!",
            avatar: "https://picsum.photos/id/1062/100/100"
        },
        {
            id: 4,
            name: "David Rodriguez",
            role: "Parent of Junior Taekwondo Student",
            rating: 5,
            comment: "My daughter has been training here for 3 years, and I've seen her grow into a more focused and respectful young woman. The black belt program teaches more than just martial arts—it teaches life skills. Thank you Howling Kick!",
            avatar: "https://picsum.photos/id/1071/100/100"
        }
    ];

    return (
        <section id="reviews" className="reviews">
            <div className="reviews-container">
                <h2 className="section-title">What Our Students Say</h2>

                <div className="reviews-grid">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <img
                                    src={review.avatar}
                                    alt={`${review.name}'s profile`}
                                    className="review-avatar"
                                />
                                <div className="review-author">
                                    <span className="review-name">{review.name}</span>
                                    <span className="review-role">{review.role}</span>
                                </div>
                            </div>

                            {renderStars(review.rating)}

                            <p className="review-comment">"{review.comment}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;