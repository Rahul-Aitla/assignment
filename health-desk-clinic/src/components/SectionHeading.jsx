import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'center' }) => {
    const styles = {
        textAlign: align,
        marginBottom: '40px',
    };

    const titleStyle = {
        fontSize: '36px',
        marginBottom: '10px',
        color: '#000',
    };

    const subtitleStyle = {
        fontSize: '24px',
        color: '#333',
        fontWeight: '600',
    };

    return (
        <div style={styles}>
            {title && <h2 style={titleStyle}>{title}</h2>}
            {subtitle && <h3 style={subtitleStyle}>{subtitle}</h3>}
        </div>
    );
};

export default SectionHeading;
