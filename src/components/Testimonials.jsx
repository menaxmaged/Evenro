// app/components/Testimonials.js
import Image from 'next/image';

const testimonialsData = [
    {
        company: "DataWorks Solutions",
        quote: "“This event brought together the brightest minds in the industry, creating a unique platform for knowledge-sharing and collaboration. I walked away with fresh ideas and meaningful connections.”",
        name: "Samantha Lee",
        designation: "DataWorks Solutions",
        imageUrl: "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679f2c882f46f3821c9ecdbc_user-image-2.jpg"
    },
    {
        company: "InnovateTech",
        quote: "“This event exceeded all my expectations! The sessions were insightful, and the networking opportunities unmatched. I left with actionable strategies and new partnerships.”",
        name: "John Anderson",
        designation: "Marketing Director",
        imageUrl: "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679f2c88e9c94fbd166a7d69_user-image-1.jpg"
    },
    {
        company: "Event Organizer",
        quote: "“Every session was packed actionable insights and practical strategies. From the keynote speakers to the workshops, the content was relevant, cutting-edge, and expertly delivered.”",
        name: "Michael Rivera",
        designation: "Event Organizer",
        imageUrl: "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679f2c887c6401f3750a2742_user-image-3.jpg"
    },
    {
        company: "TechNova Labs",
        quote: "“I’ve been to many events, but this one stands out for its excellent organization, high-quality speakers, and a welcoming environment for professionals across industries.”",
        name: "Clara Nguyen",
        designation: "AI Researcher",
        imageUrl: "https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/679f2c89b0b335612a3bf25b_user-image-4.jpg"
    }
];

// A sub-component for a single testimonial card to keep the code clean
const TestimonialCard = ({ item }) => (
    <div className="vertical-testimonial-card-wrap">
        <h4 className="testimonial-header-title">{item.company}</h4>
        <p className="testimonial-excerpt">{item.quote}</p>
        <div className="vertical-testimonial-footer-block">
            <div className="vertical-testimonial-image-block">
                <Image
                    src={item.imageUrl}
                    loading="lazy"
                    alt={`Image of ${item.name}`}
                    width={60}
                    height={60}
                    className="user-image"
                />
            </div>
            <div className="vertical-user-info-block">
                <div className="user-name">{item.name}</div>
                <div className="user-designation">{item.designation}</div>
            </div>
        </div>
    </div>
);


const Testimonials = () => {
    return (
        <section className="testimonial-section">
            <div className="section-gap">
                <div className="vertical-testimonial">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div data-w-id="260787b9-7b97-f896-e3ee-339d90b03820" className="vertical-testimonial-wrapper">
                            {/* First Column of Testimonials */}
                            <div className="vertical-testimonial-card-block">
                                <div className="vertical-testimonial-card-wrapper top">
                                    {testimonialsData.map((item, index) => <TestimonialCard key={`top1-${index}`} item={item} />)}
                                    {/* Duplicate for seamless scrolling animation */}
                                    {testimonialsData.map((item, index) => <TestimonialCard key={`top2-${index}`} item={item} />)}
                                </div>
                            </div>

                            {/* Second Column (reversed) - hidden on mobile in original design */}
                            <div className="vertical-testimonial-card-block hide-mobile-device">
                                <div className="vertical-testimonial-card-wrapper bottom">
                                    {[...testimonialsData].reverse().map((item, index) => <TestimonialCard key={`bottom1-${index}`} item={item} />)}
                                    {/* Duplicate for seamless scrolling animation */}
                                    {[...testimonialsData].reverse().map((item, index) => <TestimonialCard key={`bottom2-${index}`} item={item} />)}
                                </div>
                            </div>

                            {/* Third Column (same as first) - hidden on smaller devices */}
                            <div className="vertical-testimonial-card-block hide-small-device">
                                <div className="vertical-testimonial-card-wrapper top">
                                    {testimonialsData.map((item, index) => <TestimonialCard key={`top3-${index}`} item={item} />)}
                                    {/* Duplicate for seamless scrolling animation */}
                                    {testimonialsData.map((item, index) => <TestimonialCard key={`top4-${index}`} item={item} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-testimonial-overly"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;