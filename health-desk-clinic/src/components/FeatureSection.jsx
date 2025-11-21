import React from 'react';
import './FeatureSection.css';

const FeatureSection = ({ title, subtitle, description, image, imageLeft = false }) => {
    return (
        <section className={`feature-section ${imageLeft ? 'image-left' : ''}`}>
            <div className="container feature-container">
                <div className="feature-content">
                    <h2 className="feature-title">{title}</h2>
                    <h3 className="feature-subtitle">{subtitle}</h3>
                    <p className="feature-description">{description}</p>
                    <button className="btn btn-outline feature-btn">Learn More</button>
                </div>
                <div className="feature-image-wrapper">
                    {/* Placeholder for feature image */}
                    <div className="feature-image-placeholder">
                        {image || 'Feature Image'}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
