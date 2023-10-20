import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About Me",
    description: "Full Stack Developer",
};

const AboutMe = () => {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <p>
                Hello! My name is Jacob Hunsaker and I'm a Full Stack Developer.
                I specialize in . . .
            </p>
        </section>
    );
};

export default AboutMe;
