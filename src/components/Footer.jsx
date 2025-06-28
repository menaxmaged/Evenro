// app/components/Footer.js
import Image from 'next/image';
import Link from 'next/link';

// Data for navigation links to keep the component clean
const footerLinks = [
    { href: '/', text: 'Home' },
    { href: '/agenda', text: 'Agenda' },
    { href: '/template-info/style-guide', text: 'Style Guide' },
    { href: '/template-info/licenses', text: 'Licenses' },
    { href: '/template-info/changelog', text: 'Changelog' },
];

// Data for social media links
const socialLinks = [
    { href: 'https://www.instagram.com/', text: 'IG' },
    { href: 'https://x.com/', text: 'TW' },
    { href: 'https://www.facebook.com/', text: 'FB' },
];

const Footer = () => {
    return (
        <footer className="footer">
            {/* Call-to-Action Section */}
            <div className="footer-cta-container">
                <div className="footer-cta-block">
                    <div className="footer-cta-overly-bg"></div>
                    <div className="footer-cta-content-block">
                        <div className="cta-header-block">
                            <h2 className="cta-header">Reserve Your Tickets For The Event</h2>
                        </div>
                        <div className="cta-button-wrap">
                            <Link href="/tickets" className="primary-button w-inline-block">
                                <div className="button-content-block front">
                                    <div className="button-text">Buy Ticket</div>
                                    <div className="button-icon w-embed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                            <path d="M13.5 5.0005H1.5M9.5 9L12.8322 5.9797C13.7226 5.1727 13.7226 4.8273 12.8322 4.0203L9.5 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="button-gradient-bg"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Section */}
            <div className="footer-wrapper">
                <div className="footer-menu-block">
                    <div className="footer-cta-container">
                        <div className="footer-menu-wrapper">
                            <div className="footer-menu-header">
                                <Link href="/" aria-current="page" className="footer-brand w-inline-block w--current">
                                    <Image
                                        loading="lazy"
                                        src="/logoo.png"
                                        alt="Brand Logo"
                                        width={130}
                                        height={35}
                                        className="footer-brand-logo"
                                    />
                                </Link>
                                <div className="footer-meta-block">
                                    <div className="footer-meta-text date">The Glasshouse, NY</div>
                                    <div className="footer-meta-text line">|</div>
                                    <div className="footer-meta-text date">February 16, 2025</div>
                                </div>
                            </div>
                            <div className="footer-menu-link-block margin-top-70px">
                                <div className="footer-link-wrapper">
                                    {footerLinks.map(link => (
                                        <Link key={link.text} href={link.href} className="footer-link">{link.text}</Link>
                                    ))}
                                </div>
                                <div className="footer-socail-media-link-block">
                                    {socialLinks.map(social => (
                                        <a key={social.text} href={social.href} target="_blank" rel="noopener noreferrer" className="footer-social-medila-link w-inline-block">
                                            <div className="social-link-text">{social.text}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="footer-lower-block">
                            <div className="footer-copyright-text">
                                جميع الحقوق محفوظة  <a href="https://brandbes.com/webflow-templates" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">
                                </a>
                            </div>
                            <div className="footer-copyright-text">
                                <a href="https://webflow.com/templates/designers/brandbes" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">قمة الابداع الاعلامي</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;