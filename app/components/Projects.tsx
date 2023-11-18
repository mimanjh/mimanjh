"use client";
import { Metadata } from "next";
import React from "react";
import Carousel from "./Carousel";

export const metadata: Metadata = {
    title: "Projects",
    description: "Full Stack Developer",
};

const Projects = () => {
    return (
        <section id="projects">
            <p className="py-6">
                The following carousel will provide a snapshot of the projects I
                have worked on.
            </p>
            <div className="max-w-fit">
                <Carousel />
            </div>
        </section>
    );
};

export default Projects;
