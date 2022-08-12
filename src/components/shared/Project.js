import React from 'react';

//folder icon
import folderIcon from "../../images/folder.png";

const Project = ({github, demo, title}) => {
    return (
        <div>
            <img src={folderIcon} alt="icon"/>
            <p>{title}</p>
            <a href={github}>GitHub</a>
            <a href={demo}>Live Demo</a>
        </div>
    );
};

export default Project;