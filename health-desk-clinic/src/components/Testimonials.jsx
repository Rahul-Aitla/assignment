import React from 'react';
import './Testimonials.css';

import testo1 from '../assets/images/testo1.png';
import testo2 from '../assets/images/testo2.png';
import testo3 from '../assets/images/test03.png';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Ryan R.',
            product: 'TestoBites',
            rating: 5,
            text: 'TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.',
            image: testo1
        },
        {
            name: 'Jamie Fields',
            product: 'Vita Renew',
            rating: 5,
            text: 'My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.',
            image: testo2
        },
        {
            name: 'Anonymous',
            product: 'Nerve Freedom',
            rating: 5,
            text: 'I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.',
            image: testo3
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
                                <img src={item.image} alt={item.product} />
                            </div>
                            <div className="testimonial-content">
                                <h3 className="testimonial-product-name">{item.product}</h3>
                                <div className="testimonial-rating">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">{item.text}</p>
                                <p className="testimonial-author">- {item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
