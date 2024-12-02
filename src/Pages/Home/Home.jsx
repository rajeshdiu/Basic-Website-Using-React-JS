import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Our Platform</h1>
                    <p>Your one-stop solution for learning, connecting, and growing.</p>
                    <button className="hero-button">Get Started</button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2 className="features-title">Our Features</h2>
                <div className="features-container">
                    <div className="feature-card">
                        <h3>Interactive Design</h3>
                        <p>Experience seamless and intuitive user interfaces.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Secure Platform</h3>
                        <p>Your data is safe with our industry-leading security.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Community Support</h3>
                        <p>Join a community that values collaboration and learning.</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="cta">
                <h2>Ready to Join?</h2>
                <p>Sign up now and take the first step towards your journey!</p>
                <button className="cta-button">Sign Up</button>
            </section>
        </div>
    );
}

export default Home;
