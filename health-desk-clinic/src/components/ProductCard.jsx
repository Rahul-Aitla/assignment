import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, rating = 5, buttonText = 'Shop Now' }) => {
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                {/* Placeholder for product image */}
                <div className="product-image-placeholder">
                    {image || 'Product Image'}
                </div>
            </div>
            <h3 className="product-name">{name}</h3>
            <div className="product-rating">
                {[...Array(rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                ))}
            </div>
            <button className="btn btn-outline product-btn">{buttonText}</button>
        </div>
    );
};

export default ProductCard;
