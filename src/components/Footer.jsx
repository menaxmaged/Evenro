// app/components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';

// Data for navigation links to keep the component clean
const footerLinks = [
    { href: '/', text: 'الرئيسية' },
    { href: '/template-info/changelog', text: 'سجل التغييرات' },
];

// Data for social media links
const socialLinks = [
    { href: 'https://www.instagram.com/', text: 'انستغرام' },
    { href: 'https://x.com/', text: 'تويتر' },
    { href: 'https://www.facebook.com/', text: 'فيسبوك' },
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
                            <h2 className="cta-header">احجز تذاكرك للفعالية</h2>
                        </div>
                        <div className="cta-button-wrap">
                            <PrimaryButton href="/tickets">


                                احجز الآن
                            </PrimaryButton>
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
                                        alt="شعار العلامة التجارية"
                                        width={130}
                                        height={35}
                                        className="footer-brand-logo"
                                    />
                                </Link>
                                <div className="footer-meta-block">
                                    <div className="footer-meta-text date">مدينة العلمين الجديدة</div>
                                    <div className="footer-meta-text line">|</div>
                                    <div className="footer-meta-text date">16 فبراير 2025</div>
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
                                جميع الحقوق محفوظة
                                <a href="https://brandbes.com/webflow-templates" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">
                                </a>
                            </div>
                            <div className="footer-copyright-text">
                                <a href="https://webflow.com/templates/designers/brandbes" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">
                                    قمة الإبداع الإعلامي
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;