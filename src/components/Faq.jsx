// app/components/Faq.js
'use client';

import { useState } from 'react';

const faqData = [
    {
        num: "01.",
        question: "How can I register for the event?",
        answer: "You can register for the event by visiting our official website and filling out the registration form. Once you submit your details, you will receive a confirmation email with further instructions. If you need any assistance, feel free to contact our support team."
    },
    {
        num: "02.",
        question: "Will there be networking opportunities?",
        answer: "Yes, there will be ample networking opportunities designed to help attendees connect and collaborate. The event features dedicated networking sessions where you can meet like-minded professionals, industry experts, and potential partners. For VIP ticket holders, an exclusive networking dinner will provide a more intimate setting to build meaningful connections."
    },
    {
        num: "03.",
        question: "Is event content available after?",
        answer: "Yes, event content may be available after it ends. You will receive access details via email or on our website, depending on the event type."
    },
    {
        num: "04.",
        question: "What is the cancellation and refund policy?",
        answer: "Our cancellation and refund policy varies by event. Generally, cancellations made before a certain date may be eligible for a refund, while later ones may not. No-shows are non-refundable. Please check the specific event terms for details."
    },
    {
        num: "05.",
        question: "Will I get a certificate?",
        answer: "Yes, participants who attend the event may receive a certificate of participation. Details on how to download or request the certificate will be shared after the event."
    }
];

const Faq = () => {
    // State to track which FAQ item is open
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-section-wrapper">
                <div className="section-gap">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="faq-wrapper">
                            <div className="section-header-block left-align margin-bottom-70px">
                                <div className="section-subtitle">FAQ</div>
                                <div className="section-title-wrap">
                                    <h2 className="section-title">Frequently <span className="regular-text-span">Asked</span> Questions</h2>
                                </div>
                            </div>
                            <div className="faq-block">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="faq-single-item-wrapper">
                                        <div className="faq-single-item-block">
                                            <div
                                                className="faq-single-item w-dropdown"
                                                onClick={() => handleToggle(index)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className="faq-toggle w-dropdown-toggle">
                                                    <div className="faq-title-wrap">
                                                        <div className="faq-item-num">{faq.num}</div>
                                                        <div className="faq-title">{faq.question}</div>
                                                    </div>
                                                    <div className="faq-icon-block">
                                                        <div className="faq-icon-wrap">
                                                            {/* We can manage the icon state directly here */}
                                                            <div className={`faq-icon plus ${openIndex === index ? 'hidden' : ''}`}></div>
                                                            <div className={`faq-icon minus ${openIndex !== index ? 'hidden' : ''}`}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {openIndex === index && (
                                                    <nav className="faq-summary-block w-dropdown-list" style={{ display: 'block' }}>
                                                        <p className="faq-summary">{faq.answer}</p>
                                                    </nav>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;