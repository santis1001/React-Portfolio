import React from "react";
import git from "../../../assets/images/github-mark-white.png";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {
    return (
        <ul class="grid">
            {props.Projects.map((item, i) => (
                <li key={i}
                >
                    <a href={item.projectlink}>
                        <div class="cards_work">
                            <div class="transparent_mask_work"></div>
                            <div class="card_text_work">
                                <h3>{item.title}</h3>
                                <a href={item.gitlink}>
                                    <img src={git} alt='git' />
                                </a>
                            </div>
                            <div class='img' style={item.img} ></div>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Project;