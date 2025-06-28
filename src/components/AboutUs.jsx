// app/components/AboutUs.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton'; // Adjust the import path as necessary

const AboutUs = () => {
    // Inline styles converted to JSX objects
    const animatedDivStyle = {
        opacity: 1, // Set to 1 to be visible by default, animation logic would go here
        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
        transition: 'opacity 0.5s, transform 0.5s', // Basic transition
    };

    const paragraphStyle = {
        ...animatedDivStyle,
        transform: 'translate3d(0, 0, 0)' // Reset transform for initial view
    }

    return (
        <section className="about-us-section">
            <div className="section-gap">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="about-us-wrapper">
                        <div
                            data-w-id="6100b697-e58c-3f67-7b84-18b8903680f4"
                            style={animatedDivStyle}
                            className="about-us-video-thumbnail-block"
                        >

                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAYMC.summit%2Fvideos%2F1033482122249028&show_text=false&width=560"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                            </div>

                            <div data-w-id="382c44de-8ff4-cb8f-37a8-7e741b1a7f9b" className="pay-video-button-wrap center">
                                {/* NOTE: Lightbox functionality needs a library like 'yet-another-react-lightbox' */}
                                <Link href="https://www.youtube.com/watch?v=setu9Ir1miY" className="video-button w-inline-block w-lightbox">
                                    <div className="video-lightbox-icon w-embed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 15 21" fill="none">
                                            <path d="M13.871 9.71006C14.5445 10.195 14.5445 11.1975 13.871 11.6824L1.97601 20.2468C1.17219 20.8255 0.0507813 20.2511 0.0507813 19.2606L0.0507819 2.13186C0.050782 1.14136 1.17219 0.566934 1.97601 1.14569L13.871 9.71006Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </Link>
                                <div className="play-wave-1"></div>
                                <div className="play-wave-2"></div>
                            </div>
                            <div className="about-us-video-thumbnail-overly"></div>
                        </div>
                        <div className="about-us-content-block">
                            <div className="the-event-philosophy-header-content-block">
                                <div className="section-subtitle">The Event Philosophy</div>
                                <div className="section-title-wrap">
                                    <h2 className="section-title">Why <span className="regular-text-span">This Event</span> Matters</h2>
                                </div>
                                <p data-w-id="f3968a70-0483-270b-3168-b58699a627fb" style={paragraphStyle} className="the-event-excerpt">
                                    بعد النجاح الباهر للنسخة الأولى من قِمة الإبداعِ الإعلامي للشَّباب العربي ٢٠٢٤، نعود إليكم هذا العام بنسخةٍ جديدة واستثنائية تنطلق من قلب مدينة العلمين، مصر،
                                    تحت شعار "إعلامٌ مبتكر، أعمالٌ رائدة"،
                                    في هذهِ النُسخة نُناقش الدور المُتجدد للإعلام في تشكيل مستقبل الصناعات والأعمال في مصر والشرق الأوسط.
                                    ترقّبوا تجربةً مُلهمة، وأفكارًا خلاقة، وفرصًا لا تُفوّت !
                                    كونوا على الموعد ..!                                </p>
                                {/* NOTE: The countdown timer requires state management with useState and useEffect hooks */}
                                <div data-w-id="742185ff-d1b3-fc59-5137-a09ceb9567fb" style={paragraphStyle} className="about-time-countdown-block">
                                    {/* Countdown timer logic would be implemented here */}
                                </div>
                                <div data-w-id="693f5b8e-bbcc-c76d-fcc1-d7981268a78d" style={paragraphStyle} className="button-block">

                                    <PrimaryButton href="/tickets">
                                        More About Us                                    </PrimaryButton>





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;