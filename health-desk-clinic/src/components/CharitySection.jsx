import React from 'react';
import './CharitySection.css';

import charityBg from '../assets/images/charity-bg.jpg';
import charity1 from '../assets/images/charity1.png';
import charity2 from '../assets/images/charity2.png';
import charity3 from '../assets/images/charity3.png';
import charity4 from '../assets/images/charity4.png';
import charity5 from '../assets/images/charity5.png';

const CharitySection = () => {
    const charities = [
        { image: charity1, name: 'Prostate Cancer Foundation' },
        { image: charity2, name: 'American Tinnitus Association' },
        { image: charity3, name: 'U.S. Pain Foundation' },
        { image: charity4, name: 'American Diabetes Association' },
        { image: charity5, name: 'American Heart Association' },
    ];

    return (
        <section className="charity-section" style={{ backgroundImage: `url(${charityBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="charity-header">
                    <h2>Our Charitable Initiatives</h2>
                    <h2>Health Care Desk Gives Back</h2>
                    <p>At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.</p>
                </div>
                <div className="charity-logos">
                    {charities.map((charity, index) => (
                        <div key={index} className="charity-logo-wrapper">
                            <img src={charity.image} alt={charity.name} className="charity-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CharitySection;
