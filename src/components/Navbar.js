import React from 'react';
import { Link } from "react-router-dom";

//styles
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.mainCogtntainer}>
            <div className={styles.container}>
                <Link to="/">Home</Link>
                <ul>
                    <li><Link to="">About Me</Link></li>
                    <li><Link to="">Projects</Link></li>
                    <li><Link to="">Contact Info</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;