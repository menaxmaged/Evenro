// app/components/Agenda.js
'use client';

import { useState } from 'react';
import PrimaryButton from './PrimaryButton';

const agendaDays = [
    {
        date: "Day 01 - 03 Jan, Friday",
        title: "Kickoff and Insights",
        schedule: [
            { time: "8:30 AM", event: "Registration & Welcome", description: "Begin your day by checking in and connecting with fellow attendees." },
            { time: "9:00 AM", event: "Opening Keynote", description: "The Future of AI: Opportunities and Challenges” by Dr. Emily Carter." },
            { time: "10:30 AM", event: "Breakout Sessions", description: "Choose from diverse topics like Machine Learning or AI Ethics." },
            { time: "12:30 PM", event: "Networking Lunch", description: "Meet industry leaders and peers over a delicious lunch." },
            { time: "2:00 PM", event: "Panel Discussion", description: "Transforming the World” Rajesh Mehta, Lisa Rodriguez." },
            { time: "4:00 PM", event: "Closing Remarks", description: "Wrap up the day with insights and a roadmap for Day 2." }
        ]
    },
    {
        date: "Day 02 - 04 Jan, Saturday",
        title: "Deep Dives and Actionable Insights",
        schedule: [
            { time: "8:30 AM", event: "Morning Coffee & Networking", description: "Start the day with fresh coffee and more opportunities to connect." },
            { time: "9:00 AM", event: "Advanced Workshops", description: "Deep dive into advanced AI models and data strategies." },
            { time: "10:30 AM", event: "Interactive Demos", description: "Experience hands-on demos from our leading sponsors." },
            { time: "12:30 PM", event: "Lunch & Learn", description: "Enjoy lunch while listening to short, insightful talks from innovators." },
            { time: "2:00 PM", event: "Fireside Chat", description: "An intimate conversation with industry pioneers on the future of tech." },
            { time: "4:00 PM", event: "Event Wrap-Up & Awards", description: "Closing remarks and awards ceremony for the best innovations." }
        ]
    }
];

const Agenda = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="agenda-section">
            <div className="section-gap-bottom">
                <div className="agenda-section-wrapper">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="section-header-block center-align margin-bottom-70px">
                            <div className="section-subtitle">Agenda</div>
                            <div className="section-title-wrap">
                                <h2 className="section-title text-center">Event <span className="regular-text-span">Schedule</span> at a Glance</h2>
                            </div>
                        </div>
                        <div className="agenda-wrapper">
                            {agendaDays.map((day, index) => (
                                <div key={index} className="agenda-single-item-block">
                                    <div className="agenda-single-item">
                                        <div className="agenda-toggle" onClick={() => handleToggle(index)} style={{ cursor: 'pointer' }}>
                                            <div className="agenda-toggle-header">
                                                <div className="agenda-date">{day.date}</div>
                                                <div className="event-name-of-agenda">{day.title}</div>
                                            </div>
                                            <div className="agenda-dropdown-icon-wrap">
                                                <div className="agenda-icon-bg">
                                                    <div className="agenda-icon w-embed">
                                                        <svg style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                            <path d="M11.9995 18.0001L23.9996 30L35.9996 18" stroke="white" strokeWidth="2" strokeMiterlimit="16" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="agenda-dropdown-gradient-bg"></div>
                                            </div>
                                        </div>

                                        {/* This wrapper is the key to the animation */}
                                        <div className={`accordion-content-wrapper ${openIndex === index ? 'open' : ''}`}>
                                            <div className="accordion-content">
                                                <div className="agenda-summary-block">
                                                    {day.schedule.map((item, itemIndex) => (
                                                        <div key={itemIndex} className={`agenda-summary-item-wrap ${itemIndex === day.schedule.length - 1 ? 'border-bottom-0' : ''}`}>
                                                            <div className="agenda-event-summary">
                                                                <span className="text-primary-color">{item.time}</span> – {item.event}
                                                            </div>
                                                            <p className="event-summary">{item.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="button-block center-align margin-top-10px">
                                <PrimaryButton href="/agenda">
                                    Download Full Schedule
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;