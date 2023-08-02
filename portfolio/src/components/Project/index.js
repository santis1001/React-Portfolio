import React, { useState } from 'react';

import AboutMe from './aboutme'
import Portfolio from "./portfolio";
import Contact from "./contact";
import Resume from "./resume";

const Project = ({ currentPage }) => {

    const renderContent = () => {
        switch (currentPage) {
            case 'aboutme':
                return <AboutMe />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <h1>Welcome to the default page</h1>;
        }
    }

    return(
        <main>
        { renderContent() }
        </main>
        )
    ;
}

export default Project;