import React from 'react';
import './TrustSection.css';

import trust1 from '../assets/images/trust1.png';
import trust2 from '../assets/images/trust2.png';
import trust3 from '../assets/images/trust3.png';
import trust4 from '../assets/images/trust4.png';
import trust5 from '../assets/images/trust5.png';

import trustBackground from '../assets/images/trust-background.jpg';

const TrustSection = () => {
    const trustItems = [
        { image: trust1, text: 'All Natural' },
        { image: trust2, text: 'Cruelty-Free' },
        { image: trust3, text: 'Money-back Guarantee' },
        { image: trust4, text: 'Giving back' },
        { image: trust5, text: 'Non-GMO' },
    ];

    return (
        <section className="trust-section" style={{ backgroundImage: `url(${trustBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="trust-header">
                    <h2>A Brand That You Can Trust</h2>
                    <p>Our results-driven supplements are made with premium & safe ingredients</p>
                </div>
                <div className="trust-grid">
                    {trustItems.map((item, index) => (
                        <div key={index} className="trust-item">
                            <div className="trust-icon">
                                <img src={item.image} alt={item.text} />
                            </div>
                            <span className="trust-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
