import '../styles/Services.css';

const Services = () => {
    return (
        <section
            id="services"
        >
            <h1 id="services-title">Services</h1>
            <div className="services-container">
                <div className="service">
                    <h2 className="service-title">Basic Wash</h2>
                    <p className="service-description">
                        Our Basic Wash package includes a thorough exterior
                        wash, window cleaning, and tire shine.
                    </p>
                    <p className="service-price">$20</p>
                    <p className="service-duration">
                        Estimated time: 20 minutes
                    </p>
                </div>
                <div className="service">
                    <h2 className="service-title">Deluxe Wash</h2>
                    <p className="service-description">
                        The Deluxe Wash includes everything from the Basic Wash,
                        plus interior vacuuming and dusting.
                    </p>
                    <p className="service-price">$30</p>
                    <p className="service-duration">
                        Estimated time: 30 minutes
                    </p>
                </div>
                <div className="service">
                    <h2 className="service-title">Premium Wash</h2>
                    <p className="service-description">
                        Our Premium Wash package offers all the services of the
                        Deluxe Wash, along with a wax finish and leather
                        conditioning.
                    </p>
                    <p className="service-price">$40</p>
                    <p className="service-duration">
                        Estimated time: 40 minutes
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
