import React from 'react';
import { Link } from "react-router-dom";

//styles
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link to="/">Home</Link>
            <ul>
                <li><Link to="/aboutme">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contactinfo">Contact Info</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;