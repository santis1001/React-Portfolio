import React, { useState } from 'react';

import About_Me from './aboutme'
import Portfolio from "./portfolio";
import Contact from "./contact";
const Project = ({ currentPage }) => {

    const renderContent = () => {
        switch (currentPage) {
            case 'aboutme':
                return <About_Me />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <h1>Welcome to the resume page</h1>;
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