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
        lineHeight: '1.2',
    };

    const subtitleStyle = {
        fontSize: '24px',
        color: '#333',
        fontWeight: '600',
    };

    // Handle title as either string or array of strings
    const renderTitle = () => {
        if (!title) return null;

        if (Array.isArray(title)) {
            return (
                <h2 style={titleStyle}>
                    {title.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < title.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </h2>
            );
        }

        return <h2 style={titleStyle}>{title}</h2>;
    };

    return (
        <div style={styles}>
            {renderTitle()}
            {subtitle && <h3 style={subtitleStyle}>{subtitle}</h3>}
        </div>
    );
};

export default SectionHeading;
