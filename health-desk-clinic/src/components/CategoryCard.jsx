import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ icon, title, description, buttonText = 'Buy now' }) => {
    return (
        <div className="category-card">
            <div className="category-icon-wrapper">
                {/* Placeholder for icon */}
                <div className="category-icon-placeholder">
                    {icon || 'Icon'}
                </div>
            </div>
            <h3 className="category-title">{title}</h3>
            <p className="category-description">{description}</p>
            <button className="btn btn-primary category-btn">{buttonText}</button>
        </div>
    );
};

export default CategoryCard;
