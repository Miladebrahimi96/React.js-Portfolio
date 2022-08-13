import React from 'react';

//Styles
import styles from "./Projects.module.css";

//Components
import Project from './shared/Project';

const Projects = () => {
    return (
        <>
            <h2 className={styles.title}>Explore Projetcs Here</h2>
            <div className={styles.container}>
                <Project
                    github="https://github.com/Miladebrahimi96/Shopping-Cart"
                    demo="https://shopping-cart-one-sage.vercel.app/products"
                    title="Shopping Cart"
                />
                <Project
                    github="https://github.com/Miladebrahimi96/Weather-App-React-ReactRoutes"
                    demo="https://weather-app-react-react-routes.vercel.app/"
                    title="Weather Forecast"
                />
                <Project
                    github="https://github.com/Miladebrahimi96/Digital-Currency-Exchange-Reactjs"
                    demo="https://digital-currency-exchange-reactjs.vercel.app/"
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
        </>
    );
};

export default Projects;