import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-logo-section">
                        <div className="logo">
                            <div className="logo-icon">
                                <span className="plus-icon">+</span>
                            </div>
                            <div className="logo-text">
                                <span className="health">HEALTH DESK</span>
                                <span className="clinic">CLINIC</span>
                            </div>
                        </div>
                        <button className="btn btn-outline follow-btn">Follow Us</button>
                        <div className="social-icons">
                            {/* Placeholders */}
                            <span className="social-icon">fb</span>
                            <span className="social-icon">tw</span>
                            <span className="social-icon">tg</span>
                            <span className="social-icon">in</span>
                        </div>
                    </div>

                    <div className="footer-links-section">
                        <div className="footer-column">
                            <h4>Have a Question?</h4>
                            <p>Check out our FAQs where we answer the most commonly asked questions</p>
                            <button className="btn btn-outline faq-btn">Read FAQs</button>
                        </div>
                        <div className="footer-column">
                            <h4>Connect With Us</h4>
                            <p>Enjoy free shipping for all orders.</p>
                            <p className="phone">1-800-822-7777</p>
                        </div>
                        <div className="footer-column">
                            <h4>We're Social</h4>
                            <p>Like us, love us, follow us!</p>
                        </div>
                    </div>
                </div>

                <div className="footer-newsletter">
                    <div className="newsletter-content">
                        <h3>Let's Grow Together</h3>
                        <p>We'll keep it simple. Only the news and updates you need.</p>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Please Enter Your Email" />
                        <button className="btn btn-white">Submit</button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-address">
                        <p>Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</p>
                        <p>Phone: (512) 555-2376</p>
                        <p>Email: Ereforce@outlook.com</p>
                    </div>
                    <div className="footer-products">
                        <h5>Our Products</h5>
                        <div className="product-links">
                            <ul>
                                <li>Vita Renew</li>
                                <li>TestoBites</li>
                                <li>Audizen</li>
                                <li>Nerve Flow</li>
                                <li>Uro flow</li>
                            </ul>
                            <ul>
                                <li>Vita Renew</li>
                                <li>TestoBites</li>
                                <li>Audizen</li>
                                <li>Nerve Flow</li>
                                <li>Memo!</li>
                            </ul>
                            <ul>
                                <li>Vita Renew</li>
                                <li>TestoBites</li>
                                <li>Audizen</li>
                                <li>Nerve Flow</li>
                                <li>Derma care</li>
                            </ul>
                            <ul>
                                <li>Vita Renew</li>
                                <li>TestoBites</li>
                                <li>Audizen</li>
                                <li>Nerve Flow</li>
                                <li>TestoZen</li>
                            </ul>
                            <ul>
                                <li>Vita Renew</li>
                                <li>TestoBites</li>
                                <li>Audizen</li>
                                <li>Nerve Flow</li>
                                <li>True Fem</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-legal">
                    <p>These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.</p>
                    <div className="payment-icons">
                        <span>Mastercard</span>
                        <span>Discover</span>
                        <span>Visa</span>
                        <span>Amex</span>
                    </div>
                    <div className="copyright">
                        <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>
                        <div className="legal-links">
                            <a href="#">Terms And Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
