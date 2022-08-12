import React from 'react';
import PersonalDetails from './shared/PersonalDetails';
import Skills from './shared/Skills';

const AboutMe = () => {
    return (
        <div>
            <div>
                <h1>About Me</h1>
            </div>
            <div>
                <Skills />
                <PersonalDetails />
            </div>
        </div>
    );
};

export default AboutMe;