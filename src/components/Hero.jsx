// app/components/HeroSection.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton'; // Adjust the import path as necessary

const HeroSection = () => {
    // State to control the visibility and animation
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation shortly after the component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // A small delay to ensure the initial state is rendered first

        return () => clearTimeout(timer);
    }, []);

    // Dynamic style object for the animation
    const animatedStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 5px, 0)',
        transition: 'opacity 600ms ease-out, transform 600ms ease-out',
    };

    return (
        <section className="home-two-hero-section">
            <div className="home-two-hero-section-wrapper">
                <div className="w-layout-blockcontainer container-fluid w-container">
                    <div className="home-two-hero-inner-container">
                        <div
                            style={animatedStyle}
                            className="home-two-hero-block"
                        >
                            <div className="header-meta-block">
                                <div className="header-meta-text date">16 فبراير 2025</div>
                                <div className="header-meta-text line">|</div>
                                <div className="header-meta-text location">                                     مدينة العلمين الجديدة
                                </div>
                            </div>
                            <div className="home-two-hero-header-with-title-block">
                                <div className="home-two-hero-title-block">
                                    <h1 className="home-two-hero-title">قمة الإبداع الإعلامي للشباب العربي" تعود في نسختها الثانية | ٢٠٢٥
                                    </h1>


                                    <h1 className="home-two-hero-title" >كونو على <span className="regular-text-span">الموعد</span>
                                        !  </h1>
                                </div>
                                <div className="button-block">
                                    <PrimaryButton href="/tickets">
                                        احجز الآن                                    </PrimaryButton>                                </div>
                            </div>
                            <div className="home-two-hero-weave-shape-wrap">
                                <Image
                                    src="https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/67b6ce7206e0b321738b0de3_home%20two%20wave%20shape.png"
                                    loading="lazy"
                                    width={634}
                                    height={350} // Approximate height based on image aspect ratio
                                    sizes="(max-width: 634px) 100vw, 634px"
                                    alt="Hero Weave Shape"
                                    className="home-two-hero-weave-shape"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;