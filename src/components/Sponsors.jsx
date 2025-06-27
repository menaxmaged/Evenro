// app/components/Sponsors.js
'use client'; // This must be a client component for animations

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const sponsorLogos = [
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42d27d250b73078f622_Event%20Sponsors%20logo-1.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db0b335612a123979_Event%20Sponsors%20logo-3.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42db84d2fa8d1233af3_Event%20Sponsors%20logo-4.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42e73c910e16173c2d1_Event%20Sponsors%20logo-5.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42e319409e63f2bef5d_Event%20Sponsors%20logo-6.png",
    "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679ef42d27d250b73078f622_Event%20Sponsors%20logo-1.png",
];

const Sponsors = () => {
    // State to track if the component is visible on screen
    const [isInView, setIsInView] = useState(false);

    // useRef to get a reference to the component's DOM element
    const containerRef = useRef(null);

    useEffect(() => {
        // Create an Intersection Observer to watch when the element enters the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is intersecting (visible), update the state
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // We only want the animation to happen once, so we unobserve
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        // Start observing the element if it exists
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <section className="event-sponsors-section">
            <div className="event-sponsors">
                <div className="w-layout-blockcontainer container-default w-container">
                    {/* Attach the ref to the wrapper we want to observe */}
                    <div ref={containerRef} className="event-sponsors-wrapper">
                        <div className="section-title-wrap margin-bottom-70px">
                            <h3 className="event-sponsors-title">Event Sponsors</h3>
                        </div>
                        <div className="event-sponsors-block">
                            {sponsorLogos.map((src, index) => (
                                <div
                                    key={index}
                                    className="event-sponsors-icon-wrap"
                                    style={{
                                        // Apply animation styles based on isInView state
                                        opacity: isInView ? 1 : 0,
                                        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                                        // Create the staggered delay using the item's index
                                        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                                        transitionDelay: `${index * 100}ms`, // e.g., 0ms, 100ms, 200ms...
                                    }}
                                >
                                    <Image
                                        src={src}
                                        loading="lazy"
                                        width={150}
                                        height={40}
                                        alt={`Event Sponsors Icon ${index + 1}`}
                                        className="event-sponsors-icon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;