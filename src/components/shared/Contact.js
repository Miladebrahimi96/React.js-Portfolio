import React from 'react';

const Contact = ({icon, title, content, link, buttonTitle}) => {
    return (
        <div>
            <span>{icon}</span>
            <span>{title}</span>
            <p>{content}</p>
            <a href={link} target="_blanck">{buttonTitle}</a>
        </div>
    );
};

export default Contact;