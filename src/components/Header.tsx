import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/css/Navbar.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* Logo */}
                    <Link href="/" passHref className="navbar-brand">

                        <img src="/img/logo.png" alt="Logo" className={styles.logoImage} />

                    </Link>

                    {/* Hamburger Icon for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-controls="navbarNav"
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Links */}
                    <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/products" passHref className="nav-link">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/labs" passHref className="nav-link">
                                    Labs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/partner-with-us" passHref className="nav-link">
                                    Partner With Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact-us" passHref className="nav-link">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Icons Section (Wishlist, Search, Cart, Profile) */}
                    <div className="d-flex align-items-center">
                        <Link href="/wishlist" passHref className="nav-link mx-2">
                            <img src="/icons/wishlist.png" alt="Wishlist" className={styles.icon} />
                        </Link>
                        <Link href="/search" passHref className="nav-link mx-2">
                            <img src="/icons/search.png" alt="Search" className={styles.icon} />
                        </Link>
                        <Link href="/cart" passHref className="nav-link mx-2">
                            <img src="/icons/cart.png" alt="Cart" className={styles.icon} />
                        </Link>
                        <Link href="/profile" passHref className="nav-link mx-2">
                            <img src="/icons/profile.png" alt="Profile" className={styles.icon} />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
