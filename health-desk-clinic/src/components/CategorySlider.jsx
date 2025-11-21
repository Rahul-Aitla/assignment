import React from 'react';
import CategoryCard from './CategoryCard';
import './CategorySlider.css';

const CategorySlider = ({ categories }) => {
    // Duplicate categories to create seamless loop
    const sliderItems = [...categories, ...categories];

    return (
        <div className="slider-container">
            <div className="slider-track">
                {sliderItems.map((cat, index) => (
                    <div key={index} className="slider-item">
                        <CategoryCard
                            title={cat.title}
                            description={cat.description}
                            icon={cat.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySlider;
