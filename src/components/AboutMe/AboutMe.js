import React from "react";
import AboutMeBio from './AboutMeBio';
import AboutMeSkills from './AboutMeSkills';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me-parent">
            <div class="about-me-child">
                <h1>About Me</h1>
                <h2>Developer and Cyber Security Enthusiast</h2>
                <AboutMeBio />
                <AboutMeSkills />
            </div>
        </div>
    );
}
export default AboutMe
