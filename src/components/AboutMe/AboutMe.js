import React from "react";
import AboutMeBio from './AboutMeBio';
import AboutMeSkills from './AboutMeSkills';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <h2>Developer and Cyber Security Enthusiast</h2>
            <AboutMeBio />
            <AboutMeSkills />
        </div>
    );
}
export default AboutMe
