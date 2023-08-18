import React, { useState } from 'react';

import p2 from '../../../assets/images/project-app.JPG'
import vac from '../../../assets/images/vaccine_sim.JPG'
import bus from '../../../assets/images/Bus_app.JPG'
import ss from '../../../assets/images/solarproject.png'
import tb from '../../../assets/images/tech_blog.png'
import em from '../../../assets/images/employeemanager.png'

//downloads
import dnldVAC from "../../../assets/downloads/VaccineSimulation.jar";
import dnldBR from "../../../assets/downloads/BusRouter.jar";
import Project from "./Projects";

const Portfolio = () => {

    const p2img = {
        backgroundImage: `url(${p2})`
    };
    const vaccimg = {
        backgroundImage: `url(${vac})`
    };
    const busimg = {
        backgroundImage: `url(${bus})`
    };
    const ssimg = {
        backgroundImage: `url(${ss})`
    };
    const tbimg = {
        backgroundImage: `url(${tb})`
    };
    const emimg = {
        backgroundImage: `url(${em})`
    };
    const projects = [
        {
            title: "Track Finances Web App",
            projectlink: "https://track-your-goals-180d59665ffa.herokuapp.com/login",
            gitlink: "https://github.com/santis1001/TrackYourGoals",
            img: p2img
        },
        {
            title: "Vaccine Simulation - Java",
            projectlink: dnldVAC,
            gitlink: "https://github.com/santis1001/CovidVacc",
            img: vaccimg
        },
        {
            title: "Bus Routing - Java",
            projectlink: dnldBR,
            gitlink: "https://github.com/santis1001/BusRouter",
            img: busimg
        },
        {
            title: "Solar Systen -  Web App",
            projectlink: "https://santis1001.github.io/solar-waffle/",
            gitlink: "https://github.com/santis1001/solar-waffle",
            img: ssimg
        },
        {
            title: "Tech Blog",
            projectlink: "https://peaceful-haleakala-03666-e33d7433d6c8.herokuapp.com/",
            gitlink: "https://github.com/santis1001/Tech-Blog",
            img: tbimg
        },
        {
            title: "Employee Manager",
            projectlink: "https://github.com/santis1001/Employee-Manager/archive/refs/heads/main.zip",
            gitlink: "https://github.com/santis1001/Employee-Manager",
            img: emimg
        },
    ]
    return (
        <div>
            <section class="Work">
                <div class="worksubtitle subtitle">
                    <h2 id="Work">Work</h2>
                </div>
                <div class="container_work scrollbar-morpheus-den">
                    <ul class="grid">
                        {projects.map((item, i) => {
                            const data = {...item, i}
                            return <Project Projects={data} />
                        }
                        )}
                    </ul>
                </div>

            </section>
        </div>
    );
}

export default Portfolio;