// app/components/Registration.js
'use client';

import { useState, useEffect } from 'react';

const Registration = () => {
    // --- Countdown Timer Logic ---
    const calculateTimeLeft = () => {
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
        return () => clearTimeout(timer);
    });

    // --- Form State Logic ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('جاري الإرسال...');
        console.log("Form Data Submitted: ", formData);

        setTimeout(() => {
            setFormStatus('شكراً لك! تم استلام بياناتك بنجاح!');
            setFormData({ name: '', email: '', phone: '', location: '' });
        }, 1500);
    };


    return (
        <section className="registration-section">
            <div className="registration-section-wrapper">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="registration-content-block">
                        <div className="section-header-block left-align">
                            <div className="section-subtitle">قسم التسجيل</div>
                            <div className="section-title-wrap">
                                <h2 className="section-title">احجز <span className="regular-text-span">مكانك</span> اليوم!</h2>
                            </div>
                        </div>
                        <p className="registration-section-excerpt">
                            ضمن مكانك في طليعة الابتكار والتواصل. لا تفوت فرصة التواصل والتعلم والنمو.
                        </p>
                        {/* Live Countdown Timer */}
                        <div className="registration-time-countdown-block">
                            <div className="registration-time-block">
                                <div className="registration-time-block-flex">
                                    <div className="registration-time-wrap"><div className="fun-fact-number">{timeLeft.days || '0'}</div><div className="fun-fact-heading-text">أيام</div></div>
                                    <div className="registration-time-semicolon">:</div>
                                    <div className="registration-time-wrap"><div className="fun-fact-number">{timeLeft.hours || '0'}</div><div className="fun-fact-heading-text">ساعات</div></div>
                                    <div className="registration-time-semicolon">:</div>
                                    <div className="registration-time-wrap"><div className="fun-fact-number">{timeLeft.minutes || '0'}</div><div className="fun-fact-heading-text">دقائق</div></div>
                                    <div className="registration-time-semicolon">:</div>
                                    <div className="registration-time-wrap"><div className="fun-fact-number">{timeLeft.seconds || '0'}</div><div className="fun-fact-heading-text">ثواني</div></div>
                                </div>
                            </div>
                            <div className="registration-time-countdown-block-bg"></div>
                        </div>
                    </div>
                </div>
                <div className="registration-input-field">
                    <div className="registration-form-block w-form">
                        <h3 className="registration-form-title">املأ النموذج أدناه</h3>
                        <form onSubmit={handleSubmit} className="registration-form">
                            <input
                                className="registration-form-text-field w-input"
                                type="text"
                                name="name"
                                placeholder="اسمك"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="registration-form-text-field w-input"
                                type="email"
                                name="email"
                                placeholder="بريدك الإلكتروني"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="registration-form-text-field w-input"
                                type="tel"
                                name="phone"
                                placeholder="رقم الهاتف"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="registration-form-text-field w-input"
                                type="text"
                                name="location"
                                placeholder="الموقع"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                            <div className="submit-button-block">
                                <input type="submit" data-wait="يرجى الانتظار..." className="submit-button w-button" value="إرسال" />
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
