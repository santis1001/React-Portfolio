import React, { useState } from 'react';

import p2 from '../../../assets/images/project-app.JPG'
import vac from '../../../assets/images/vaccine_sim.JPG'
import bus from '../../../assets/images/Bus_app.JPG'
import msg from '../../../assets/images/And_Dev.png'
import id from '../../../assets/images/solidworks.PNG'

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
    const msgimg = {
        backgroundImage: `url(${msg})`
    };
    const idimg = {
        backgroundImage: `url(${id})`
    };

    return (
        <div>
            <section class="Work">
                <div class="worksubtitle subtitle">
                    <h2 id="Work">Work</h2>
                </div>
                <div class="container_work scrollbar-morpheus-den">

                    <div class="workbanner">
                        <div class="workbannerback">
                            <a href="https://github.com/santis1001/TrackYourGoals">
                                <div class="cards_work" id="project2">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Track Finances Web App</h3>
                                    </div>
                                    <div class='img' style={p2img} ></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <ul class="grid">
                        <li>
                            <a href="./assets/pdf/Vaccine_sim.pdf">
                                <div class="cards_work" id="vacc">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Vaccine Simulation - Java</h3>
                                    </div>
                                    <div class='img' style={vaccimg} ></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="./assets/pdf/3.5 - Parte del diseño_ Análisis del diseño del sistema.pdf">
                                <div class="cards_work" id="bus">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Bus Routing - Java</h3>
                                    </div>
                                    <div class='img' style={busimg} ></div>

                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="./assets/pdf/AndroidApp.pdf">
                                <div class="cards_work" id="anddev">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Messaging App - Android Dev</h3>
                                    </div>
                                    <div class='img' style={msgimg} ></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="./assets/pdf/Industrial_Design.PDF">
                                <div class="cards_work" id="indes">
                                    <div class="transparent_mask_work"></div>
                                    <div class="card_text_work">
                                        <h3>Industrial Design</h3>
                                    </div>
                                    <div class='img' style={idimg} ></div>
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