// app/components/Header.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    // State to manage the full-screen menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to manage which dropdown is open ('home', 'pages', or null)
    const [openDropdown, setOpenDropdown] = useState(null);

    // Toggle the main menu
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        // Close any open dropdowns when closing the main menu
        if (isMenuOpen) {
            setOpenDropdown(null);
        }
    };

    // Toggle the dropdowns within the menu
    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className="header">
            <div className="w-layout-blockcontainer container-fluid w-container">
                {/* Top Navbar */}
                <div
                    data-animation="over-left"
                    data-collapse="medium"
                    data-duration="500"
                    data-easing="ease"
                    data-easing2="ease"
                    role="banner"
                    className="navbar-menu-container w-nav"
                >
                    <div className="navbar-wrapper">
                        <Link href="/" aria-current="page" className="navbar-brand w-nav-brand w--current">
                            <Image
                                loading="lazy"
                                src="/logoo.png"
                                alt="Nav Menu Logo"
                                width={130}
                                height={35}
                                className="brand-logo"
                            />
                        </Link>
                        <div className="nav-button-flex-block">
                            <div
                                onClick={handleMenuToggle}
                                className="nav-button-wrapper"
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="hamburger-menu-text-wrap">
                                    {/* Dynamically show Menu or Close text */}
                                    <div className="hamburger-text" style={{ display: isMenuOpen ? 'none' : 'block' }}>القائمة</div>
                                    <div className="hamburger-closed-text" style={{ display: isMenuOpen ? 'block' : 'none' }}>Close</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full-screen Overlay Menu */}
                {/* Apply 'open' class based on state */}
                <div className={`mai-menu-wrapper ${isMenuOpen ? 'open' : ''}`}>
                    <div className="menu-overlay-grid">
                        {/* These are for the animated background grid */}
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className={`menu-overlay-single-columm _${i + 1}`}></div>
                        ))}
                        <div className="menu-shape-block"></div>
                    </div>

                    <div className="hamburger-menu-block">
                        <ul role="list" className="hamburger-menu-list">
                            <li className="hamburger-menu-list-item _1">
                                {/* Home Dropdown */}
                                <div className="hamburger-dropdown-block w-dropdown">
                                    <div className="hamburger-dropdown-toggle w-dropdown-toggle" onClick={() => handleDropdownToggle('home')}>
                                        <div className="hamburger-menu-text">Home</div>
                                        <div className={`hamburger-dropdown-icon w-icon-dropdown-toggle ${openDropdown === 'home' ? 'w--open' : ''}`}></div>
                                    </div>
                                    {openDropdown === 'home' && (
                                        <nav className="dropdown-list w-dropdown-list" style={{ display: 'block' }}>
                                            <div className="nav-dropdown-flex-v2">
                                                <Link href="/" className="nav-dropdown-link w-dropdown-link">Home One</Link>
                                                <Link href="/home-two" className="nav-dropdown-link w-dropdown-link">Home Two</Link>
                                            </div>
                                        </nav>
                                    )}
                                </div>
                            </li>
                            <li className="hamburger-menu-list-item _2">
                                <Link href="/about-us" className="hamburger-menu-link">About Us</Link>
                            </li>
                            <li className="hamburger-menu-list-item _3">
                                <Link href="/agenda" className="hamburger-menu-link">Agenda</Link>
                            </li>
                            <li className="hamburger-menu-list-item _4">
                                {/* Pages Dropdown */}
                                <div className="hamburger-dropdown-block w-dropdown">
                                    <div className="hamburger-dropdown-toggle w-dropdown-toggle" onClick={() => handleDropdownToggle('pages')}>
                                        <div className="hamburger-menu-text">Pages</div>
                                        <div className={`hamburger-dropdown-icon w-icon-dropdown-toggle ${openDropdown === 'pages' ? 'w--open' : ''}`}></div>
                                    </div>
                                    {openDropdown === 'pages' && (
                                        <nav className="dropdown-list w-dropdown-list" style={{ display: 'block' }}>
                                            <div className="nav-dropdown-flex">
                                                <div className="nav-dropdown-column">
                                                    <div className="nav-heading">Pages</div>
                                                    <div className="nav-dropdown-wrap">
                                                        <Link href="/speakers" className="nav-dropdown-link w-dropdown-link">Speakers</Link>
                                                        <Link href="/tickets" className="nav-dropdown-link w-dropdown-link">Tickets</Link>
                                                    </div>
                                                </div>
                                                <div className="nav-dropdown-column">
                                                    <div className="nav-heading">CMS Pages</div>
                                                    <div className="nav-dropdown-wrap">
                                                        <Link href="/speakers/dr-amara-patel" className="nav-dropdown-link w-dropdown-link">Speakers Details</Link>
                                                        <Link href="/product/vip-experience" className="nav-dropdown-link w-dropdown-link">Tickets Details</Link>
                                                    </div>
                                                </div>
                                                {/* Add more columns as needed */}
                                            </div>
                                        </nav>
                                    )}
                                </div>
                            </li>
                            <li className="hamburger-menu-list-item _5">
                                <Link href="/contact-us" className="hamburger-menu-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;