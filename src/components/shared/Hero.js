import React from 'react';

//images
import heroImage from "../../images/hero.jpg";

const Hero = () => {
    return (
        <div>
            <div>
                <h1>Milad Ebrahimi</h1>
                <h2>Junior Front-End Developer</h2>
            </div>
            <img src={heroImage} alt="Hero Image"/>
        </div>
    );
};

export default Hero;