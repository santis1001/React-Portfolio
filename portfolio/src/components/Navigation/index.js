import React, { useState } from 'react';

const Navigation = () => {
    return (
        <nav class='navigation'>
            <div class="dropmenu">
                <h3 class="menu">Menu</h3>
            </div>

            <ul class="container_nav">
                <li id="am">
                    <div class="header_list_spacer" id="hcs1">
                        <div class="header_card_spacer" ></div>
                    </div>
                    <div class="header_card" >
                        <a href="#About-Me">
                            <h3>About Me</h3>
                        </a>
                    </div>
                    <div class="header_list_spacer" id="hcs2">
                        <div class="header_card_spacer" ></div>
                    </div>
                </li>

                <li id="pf">
                    <div class="header_list_spacer" id="hcs2_2">
                        <div class="header_card_spacer" ></div>
                    </div>
                    <div class="header_card" >
                        <a href="#Portfolio">
                            <h3>Portfolio</h3>
                        </a>
                    </div>
                    <div class="header_list_spacer" id="hcs3">
                        <div class="header_card_spacer"></div>
                    </div>
                </li>
                <li id="ct">
                    <div class="header_list_spacer" id="hcs3_2">
                        <div class="header_card_spacer"></div>
                    </div>
                    <div class="header_card" >
                        <a href="#Contact">
                            <h3>Contact</h3>
                        </a>
                    </div>
                    <div class="header_list_spacer" id="hcs4">
                        <div class="header_card_spacer" ></div>
                    </div>
                </li>

                <li id="rm">
                    <div class="header_list_spacer" id="hcs4_2">
                        <div class="header_card_spacer" ></div>
                    </div>
                    <div class="header_card">
                        <a href="#Resume">
                            <h3>Resume</h3>
                        </a>
                    </div>
                    <div class="header_list_spacer" id="hcs5">
                        <div class="header_card_spacer"></div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;