import '../css/classes.css';
import TenClass from '../asset/ten-classes.jpg'
import KidsClass from '../asset/kids-classes.jpg'
import AdultClass from '../asset/adult-classes.jpg'

const Classes = () => {
    // Sample class data
    const classList = [
        {
            id: 1,
            title: "Little Tigers (Ages 4-6)",
            image: KidsClass,
            description: "Fun, engaging training for young children to build basic motor skills, discipline, and confidence.",
            schedule: "Mon, Wed: 4:00 PM - 4:45 PM",
            price: "$80/month"
        },
        {
            id: 2,
            title: "Junior Taekwondo (Ages 7-12)",
            image: TenClass,
            description: "Structured training focusing on Taekwondo fundamentals, self-defense, and character development.",
            schedule: "Tue, Thu: 5:00 PM - 6:00 PM | Sat: 10:00 AM - 11:00 AM",
            price: "$100/month"
        },
        {
            id: 3,
            title: "Teen & Adult Taekwondo (Ages 13+)",
            image: AdultClass,
            description: "Comprehensive training for teens and adults including self-defense, sparring, and fitness.",
            schedule: "Mon, Wed: 6:30 PM - 7:45 PM | Fri: 7:00 PM - 8:15 PM",
            price: "$120/month"
        },
    ];

    return (
        <section id="classes" className="section classes">
            <div className="container">
                <h2 className="section-title">Our Training Classes</h2>

                <div className="classes-grid">
                    {classList.map((cls) => (
                        <div key={cls.id} className="class-card">
                            <img src={cls.image} alt={cls.title} className="class-card-image" />
                            <div className="class-card-content">
                                <h3 className="class-card-title">{cls.title}</h3>
                                <div className="class-card-details">
                                    <p>{cls.description}</p>
                                    <p><span>Schedule:</span> {cls.schedule}</p>
                                    <p><span>Monthly Fee:</span> {cls.price}</p>
                                </div>
                                <a href="#contact" className="btn btn-primary">Enroll Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;