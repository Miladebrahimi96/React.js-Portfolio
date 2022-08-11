import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="">Home</Link>
            <ul>
                <li><Link to="">Projects</Link></li>
                <li><Link to="">Contact Info</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;