import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send the data to an API or email)
        alert('Message Sent!');
        // Clear form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact">
            <section className="contact-details">
                <h1>Contact Us</h1>
                <p>If you have any questions, feel free to reach out to us!</p>
                <div className="contact-info">
                    <div className="info-item">
                        <h3>Email</h3>
                        <p>support@ourplatform.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Phone</h3>
                        <p>(123) 456-7890</p>
                    </div>
                    <div className="info-item">
                        <h3>Address</h3>
                        <p>123 Main St, City, Country</p>
                    </div>
                </div>
            </section>

            <section className="contact-form">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default Contact;
