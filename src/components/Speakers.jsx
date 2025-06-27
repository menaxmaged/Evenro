// app/components/Speakers.js
import Image from 'next/image';
import Link from 'next/link';

const speakersData = [
    {
        name: 'Dr. Amara Patel',
        designation: 'CTO, Synergy AI Labs',
        slug: 'dr-amara-patel',
        imageUrl: 'https://cdn.prod.website-files.com/679f3bfcdac5bde6d9b53ae4/679f40d5251c3c795b2df90b_dr-amara-patel.jpg'
    },
    {
        name: 'Jonathan Miller',
        designation: 'Director of AI Ethics, FutureTech',
        slug: 'jonathan-miller',
        imageUrl: 'https://cdn.prod.website-files.com/679f3bfcdac5bde6d9b53ae4/679f4080d768870c74a2efdb_jonathan-miller.jpg'
    },
    {
        name: 'Prof. Clara Nguyen',
        designation: 'Chair of Computational Science, MIT',
        slug: 'prof-clara-nguyen',
        imageUrl: 'https://cdn.prod.website-files.com/679f3bfcdac5bde6d9b53ae4/679f402c251c3c795b2d8736_prof-clara-nguyen.jpg'
    },
    {
        name: 'Sophie Laurent',
        designation: 'AI Product Manager, BrightTech',
        slug: 'sophie-laurent',
        imageUrl: 'https://cdn.prod.website-files.com/679f3bfcdac5bde6d9b53ae4/679f3fa27c6401f37515784a_sophie-laurent.jpg'
    },
];

const Speakers = () => {
    return (
        <section className="speakers-section">
            <div className="section-gap-bottom">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="spraker-position-relative-block">
                        <div className="speakers-stikcy-wrapper">
                            <div className="section-header-block left-align margin-bottom-70px">
                                <div className="section-subtitle">Speakers</div>
                                <div className="section-title-wrap">
                                    <h2 className="section-title">Meet <span className="regular-text-span">Our Inspiring</span> Speakers</h2>
                                </div>
                            </div>
                            <div className="speakers-wrapper">
                                <div className="speaker-collection-list-wrapper home-two w-dyn-list">
                                    <div role="list" className="speaker-collection-list home-two w-dyn-items">
                                        {speakersData.map((speaker, index) => (
                                            <div key={index} role="listitem" className="speaker-collection-item home-two w-dyn-item">
                                                <div className="speaker-block">
                                                    <div className="speakers-header-wrap">
                                                        <div className="speakers-info">
                                                            <Link href={`/speakers/${speaker.slug}`} className="speacker-name">{speaker.name}</Link>
                                                            <div className="speacker-designation">{speaker.designation}</div>
                                                        </div>
                                                        <Link href={`/speakers/${speaker.slug}`} className="speakers-info-header-link-block w-inline-block">
                                                            {/* Plus Icon SVG */}
                                                        </Link>
                                                    </div>
                                                    <Link href={`/speakers/${speaker.slug}`} className="speacker-image-link-block w-inline-block">
                                                        <div className="image-animation-block">
                                                            <Image
                                                                src={speaker.imageUrl}
                                                                loading="lazy"
                                                                alt={speaker.name}
                                                                width={746}
                                                                height={800} // Adjust height as needed
                                                                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                                                                className="speakers-main-thumbnail animated-image"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speakers;