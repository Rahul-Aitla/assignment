import React from 'react';
import './Hero.css';
import doctorImage from '../assets/images/doctor-image.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Health Desk Clinic: All Natural Supplements
                        </h1>
                        <p className="hero-description">
                            Health Care Desk is the premier choice for those seeking wellness through wholesome, superfood-enriched formulas that actually work. Our all-natural, organic health supplements are designed to give your body what it needs to thrive and optimize your health each day!
                        </p>
                        <button className="btn btn-primary hero-btn">Shop Now</button>
                    </div>
                    <div className="hero-image">
                        {/* Placeholder for doctor image */}
                        <div className="doctorImage">
                            <img src={doctorImage} alt="Doctor" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
