import React, { useState } from 'react';

const About_Me = () => {
    return (
        <div>
            <section class="About_me">
                <div class="subtitle">
                    <h2 id="About_me">About Me</h2>
                </div>
                <p>As a recent college graduate in Software Engineering, I bring a strong foundation in programming and an eagerness to learn new technologies. Throughout my studies, I have developed my ability to quickly grasp new concepts and technologies, combined with my interest in cutting-edge technologies. I am eager to apply my skills to real-world projects.</p>
            </section>
            <br/>
                <section class="Education">
                    <div class="subtitle">
                        <h2 id="Education">Education</h2>
                    </div>
                    <ul class="edu_list">
                        <li>
                            <a href="https://www.uanl.mx/">
                                <div class="uni">
                                    <h3>Universidad Autonoma de Nuevo Leon</h3>
                                    <ul>
                                        <li>Software Technology Engineer</li>
                                        <li>Aug, 2018 - May, 2023</li>
                                        <li>San Nicolas de los Garza, NL</li>
                                    </ul>
                                </div>
                            </a>
                        </li>
                        <br/>
                            <li>
                                <a href="https://kusd.edu/harborside/">
                                    <div class="high">
                                        <h3>Harborside Academy</h3>
                                        <ul>
                                            <li>High School</li>
                                            <li>Aug, 2015 -May, 2018</li>
                                            <li>Kenosha, WI</li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                    </ul>

                </section>
        </div>
    );
}

export default About_Me;