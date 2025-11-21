import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Ryan R.',
            product: 'TestoBites',
            rating: 5,
            text: 'TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.',
            image: null // Placeholder
        },
        {
            name: 'Jamie Fields',
            product: 'Vita Renew',
            rating: 5,
            text: 'My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.',
            image: null // Placeholder
        },
        {
            name: 'Anonymous',
            product: 'Nerve Freedom',
            rating: 5,
            text: 'I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.',
            image: null // Placeholder
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="testimonials-title">Verified Customer Testimonials</h2>
                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-product-image">
                                {/* Placeholder */}
                                <div className="t-image-placeholder">Product</div>
                            </div>
                            <h3 className="testimonial-product-name">{item.product}</h3>
                            <div className="testimonial-rating">
                                {[...Array(item.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">"{item.text}"</p>
                            <p className="testimonial-author">- {item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
