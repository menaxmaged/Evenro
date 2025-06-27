// app/components/Highlights.js
import Image from 'next/image';

const highlightsData = [
    { title: "Keynote Addresses", description: "Inspiring talks from world-renowned leaders in Data Science and AI." },
    { title: "Expert-Led Workshops", description: "Hands-on sessions designed to deepen your skills and knowledge." },
    { title: "Networking Opportunities", description: "Connect with industry peers, and innovators from around the globe." },
    { title: "Innovative Product Demos", description: "Experience cutting-edge tools and technologies shaping the future." },
    { title: "AI Showcase Zone", description: "Explore innovative AI applications and solutions from top companies." },
    { title: "Panel Discussions", description: "Engage in insightful conversations led by industry leaders." },
    { title: "Interactive Q&A Sessions", description: "Engage directly with industry leading experts in interactive Q&A." },
    { title: "Awards and Recognition", description: "Our exclusive awards recognition program, honoring groundbreaking." }
];

const Highlights = () => {
    return (
        <section className="event-highlights-section">
            <div className="section-gap">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="home-two-event-highlights-wrapper">
                        <div className="section-header-block left-align margin-bottom-70px">
                            <div className="section-subtitle">Event Highlights</div>
                            <div className="section-title-wrap">
                                <h2 className="section-title">Unmissable Moments <span className="regular-text-span">At Evenro</span></h2>
                            </div>
                        </div>
                        <div className="home-two-event-highlight-block">
                            <div className="event-highlight-thumbnail-block">
                                <div className="image-animation-block">
                                    <Image
                                        src="https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/67a1ce3aa397f75154217378_Event%20Highlight%20Thumbnail.jpg"
                                        loading="lazy"
                                        width={1068}
                                        height={712}
                                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                                        alt="Event Highlight Thumbnail"
                                        className="event-highlight-thumbnail animated-image"
                                    />
                                </div>
                            </div>
                            <div className="event-highlights-block">
                                {highlightsData.map((item, index) => (
                                    <div key={index} className="event-highlights-item-wrap">
                                        <div className="event-highlights-item-content home-two">
                                            <h4 className="event-highlights-item-name">{item.title}</h4>
                                            <p className="event-highlights-excerpt">{item.description}</p>
                                        </div>
                                        <div className="gradient-color event-card"></div>
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

export default Highlights;