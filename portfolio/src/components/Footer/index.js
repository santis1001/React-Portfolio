import React, { useState } from 'react';

import git from "../../assets/images/github-mark-white.png";
import msg from "../../assets/images/Mail.png";
import iN from "../../assets/images/In-White-40@2x.png";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Contact</h2>
                <ul class="contact">
                    <li>
                        <a href="mailto:santis1001@gmail.com">
                            <img src={msg} alt='mail' />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/santis1001">
                            <img src={git} alt='git' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/santiago-valenzuela-/">
                            <img src={iN} alt='in' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;