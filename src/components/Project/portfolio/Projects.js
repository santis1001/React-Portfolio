import React from "react";
import git from "../../../assets/images/github-mark-white.png";

function Project(props) {
    return (
        <li key={props.Projects.i}>
            <a href={props.Projects.projectlink}>
                <div class="cards_work">
                    <div class="transparent_mask_work"></div>
                    <div class="card_text_work">
                        <h3>{props.Projects.title}</h3>
                        <a href={props.Projects.gitlink}>
                            <img src={git} alt='git' />
                        </a>
                    </div>
                    <div class='img' style={props.Projects.img} ></div>
                </div>
            </a>
        </li>

    );
}

export default Project;