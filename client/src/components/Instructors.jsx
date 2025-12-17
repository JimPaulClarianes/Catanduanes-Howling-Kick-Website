import '../css/instructors.css';
import karl from '../asset/karl.jpeg'
import vlad from '../asset/vlad.jpeg'

const Instructors = () => {
    // Sample instructor data
    const instructors = [
        {
            id: 1,
            name: "Dom Karl Bogabil",
            rank: "3rd Dan Black Belt",
            bio: "With over 30 years of Taekwondo experience, Master Lee has trained national and international champions.",
            image: karl,
            position: "Coach/Trainor"

        },
        {
            id: 2,
            name: "Vlademir Manoguid",
            rank: "1st Dan Black Belt",
            bio: "Former national champion, specializing in youth training and self-defense programs for women.",
            image: vlad,
            position: "Assistant Trainor"
        },
        {
            id: 3,
            name: "Instructor John Park",
            rank: "1st Dan Black Belt",
            bio: "Expert in competitive sparring and fitness training, with 10 years of teaching experience.",
            image: "https://picsum.photos/id/1071/600/800",
            position: "Assistant Trainor"
        }
    ];

    return (
        <section id="instructors" className="section instructors">
            <div className="container">
                <h2 className="section-title">Our Instructors</h2>

                <div className="instructors-grid">
                    {instructors.map((instructor) => (
                        <div key={instructor.id} className="instructor-card">
                            <img src={instructor.image} alt={instructor.name} className="instructor-image" />
                            <h3 className="instructor-name">{instructor.name}</h3>
                            <h3>{instructor.position}</h3>
                            <p className="instructor-rank">{instructor.rank}</p>
                            <p className="instructor-bio">{instructor.bio}</p>
                            <a href="#contact" className="btn btn-primary">Ask a Question</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructors;