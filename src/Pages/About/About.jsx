import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <section className="about-section">
                <h1>About Us</h1>
                <p>
                    Welcome to our platform! We are dedicated to providing the best solutions for your learning and development needs. 
                    Our team is committed to innovation, excellence, and creating an inclusive community for everyone.
                </p>
            </section>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    To empower individuals through knowledge, collaboration, and cutting-edge tools, enabling them to achieve 
                    their fullest potential.
                </p>
            </section>

            <section className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" />
                        <h3>John Doe</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" />
                        <h3>Jane Smith</h3>
                        <p>Head of Operations</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" />
                        <h3>Emily Johnson</h3>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
