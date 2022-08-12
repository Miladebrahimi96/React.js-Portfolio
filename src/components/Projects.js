import React from 'react';

//Components
import Project from './shared/Project';

const Projects = () => {
    return (
        <div>
            <h2>Explore Projetcs Here</h2>
            <Project
                github="https://github.com/Miladebrahimi96/Weather-App-React-ReactRoutes"
                demo="https://github.com/Miladebrahimi96/Weather-App-React-ReactRoutes"
                title="Weather Forecast"
            />
            <Project
                github="https://github.com/Miladebrahimi96/Digital-Currency-Exchange-Reactjs"
                demo="https://github.com/Miladebrahimi96/Digital-Currency-Exchange-Reactjs"
                title="Digital Currency"
            />
            <Project
                github="https://github.com/Miladebrahimi96/React-form-SPA"
                demo="https://github.com/Miladebrahimi96/React-form-SPA"
                title="Sign UP/Login Form"
            />
            <Project
                github="https://github.com/Miladebrahimi96/Calculator"
                demo="https://github.com/Miladebrahimi96/Calculator"
                title="Simple Calculator"
            />
        </div>
    );
};

export default Projects;