// app/components/Registration.js
'use client';

import { useState, useEffect } from 'react';

const Registration = () => {
    // --- Countdown Timer Logic ---
    const calculateTimeLeft = () => {
        // Set a future date for the event
        const difference = +new Date('2026-01-01T00:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    // --- Form State Logic ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: ''
    });

    const [formStatus, setFormStatus] = useState(''); // for success/error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');
        // Here you would typically send the data to an API endpoint
        console.log("Form Data Submitted: ", formData);

        // Simulate an API call
        setTimeout(() => {
            setFormStatus('Thank you! Your submission has been received!');
            // Reset form
            setFormData({ name: '', email: '', phone: '', location: '' });
        }, 1500);
    };


    return (
        <section className="registration-section">
            <div className="registration-section-wrapper">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="registration-content-block">
                        <div className="section-header-block left-align">
                            <div className="section-subtitle">Registration Section</div>
                            <div className="section-title-wrap">
                                <h2 className="section-title">Reserve <span className="regular-text-span">Your Spot</span> Today!</h2>
                            </div>
                        </div>
                        <p className="registration-section-excerpt">
                            Secure your place at the forefront of innovation and networking. Don’t miss the chance to connect, learn, and grow.
                        </p>
                        {/* Live Countdown Timer */}
                        <div className="registration-time-countdown-block">
                            <div className="registration-time-block">
                                <div className="registration-time-block-flex">
                                    <div className="registration-time-wrap"><div className="fun-fact-number">{timeLeft.days || '0'}</div><div className="fun-fact-heading-text">Days</div></div>
                                    <div className="registration-time-semicolon">:</div>
                                    <div className="registration-time-wrap"><div className="fun-fact-number">{timeLeft.hours || '0'}</div><div className="fun-fact-heading-text">Hours</div></div>
                                    <div className="registration-time-semicolon">:</div>
                                    <div className="registration-time-wrap"><div className="fun-fact-number">{timeLeft.minutes || '0'}</div><div className="fun-fact-heading-text">Minutes</div></div>
                                    <div className="registration-time-semicolon">:</div>
                                    <div className="registration-time-wrap"><div className="fun-fact-number">{timeLeft.seconds || '0'}</div><div className="fun-fact-heading-text">Seconds</div></div>
                                </div>
                            </div>
                            <div className="registration-time-countdown-block-bg"></div>
                        </div>
                    </div>
                </div>
                <div className="registration-input-field">
                    <div className="registration-form-block w-form">
                        <h3 className="registration-form-title">Fill the Form Below</h3>
                        <form onSubmit={handleSubmit} className="registration-form">
                            <input
                                className="registration-form-text-field w-input"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="registration-form-text-field w-input"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="registration-form-text-field w-input"
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="registration-form-text-field w-input"
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                            <div className="submit-button-block">
                                <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Submit" />
                            </div>
                        </form>
                        {formStatus && (
                            <div className="success-message margin-top-50px w-form-done" style={{ display: 'block' }}>
                                <div>{formStatus}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;