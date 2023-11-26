import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home">
            <div id="home-background"></div>
            <div className="home-content">
                <div className="home-about">
                    <h1 id="home-title">Welcome to Syntax Car Wash</h1>
                    <p id="home-description">
                        A clean car is a happy car. Experience the best car wash
                        in town.
                    </p>
                </div>

                <div className="home-buttons">
                    <button className="home-button">
                        <a href="#contact">Book Now</a>
                    </button>
                    <button className="home-button">
                        <a href="#about">Learn More</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
