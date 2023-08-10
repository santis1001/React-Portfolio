import React, { useState } from 'react';

import p2 from '../../../assets/images/project-app.JPG'
import vac from '../../../assets/images/vaccine_sim.JPG'
import bus from '../../../assets/images/Bus_app.JPG'
import ss from '../../../assets/images/solarproject.png'
import tb from '../../../assets/images/tech_blog.png'
import em from '../../../assets/images/employeemanager.png'
import git from "../../../assets/images/github-mark-white.png";

//downloads
import dnldVAC from "../../../assets/downloads/VaccineSimulation.jar";
import dnldBR from "../../../assets/downloads/BusRouter.jar";

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

    return (
        <div>
            <section class="Work">
                <div class="worksubtitle subtitle">
                    <h2 id="Work">Work</h2>
                </div>
                <div class="container_work scrollbar-morpheus-den">
                    <ul class="grid">
                        <li>
                            <a href="https://track-your-goals-180d59665ffa.herokuapp.com/login">
                                <div class="cards_work" id="project2">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Track Finances Web App</h3>
                                        <a href="https://github.com/santis1001/TrackYourGoals">
                                            <img src={git} alt='git' />
                                        </a>
                                    </div>
                                    <div class='img' style={p2img} ></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href={dnldVAC}>
                                <div class="cards_work" id="vacc">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Vaccine Simulation - Java</h3>
                                        <a href="https://github.com/santis1001/CovidVacc">
                                            <img src={git} alt='git' />
                                        </a>
                                    </div>
                                    <div class='img' style={vaccimg} ></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href={dnldBR}>
                                <div class="cards_work" id="bus">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Bus Routing - Java</h3>
                                        <a href="https://github.com/santis1001/BusRouter">
                                            <img src={git} alt='git' />
                                        </a>
                                    </div>
                                    <div class='img' style={busimg} ></div>

                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://santis1001.github.io/solar-waffle/">
                                <div class="cards_work" id="solar">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Solar Systen -  Web App</h3>
                                        <a href="https://github.com/santis1001/solar-waffle">
                                            <img src={git} alt='git' />
                                        </a>
                                    </div>
                                    <div class='img' style={ssimg} ></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://peaceful-haleakala-03666-e33d7433d6c8.herokuapp.com/">
                                <div class="cards_work" id="tech-blog">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Tech Blog</h3>
                                        <a href="https://github.com/santis1001/Tech-Blog">
                                            <img src={git} alt='git' />
                                        </a>
                                    </div>
                                    <div class='img' style={tbimg} ></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/santis1001/Employee-Manager/archive/refs/heads/main.zip">
                                <div class="cards_work" id="indes">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Industrial Design</h3>
                                        <a href="https://github.com/santis1001/Employee-Manager">
                                            <img src={git} alt='git' />
                                        </a>
                                    </div>
                                    <div class='img' style={emimg} ></div>
                                </div>
                            </a>
                        </li>
                    </ul>


                </div>

            </section>
        </div>
    );
}

export default Portfolio;