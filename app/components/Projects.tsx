"use client";
import { Metadata } from "next";
import React from "react";
import Carousel from "./Carousel";

export const metadata: Metadata = {
    title: "Projects",
    description: "Full Stack Developer",
};

const Projects = () => {
    const getCarouselItems = () => {
        return [
            {
                url: "https://github.com/mimanjh/robofriends",
                thumbnail: "/thumbnail-robofriends.png",
                title: "Robofriends",
            },
            {
                url: "https://github.com/mimanjh",
                thumbnail: "/about-me-main.jpg",
                title: "Mimanjh",
            },
            {
                url: "https://github.com/mimanjh",
                thumbnail: "/about-me-main.jpg",
                title: "Mimanjh",
            },
            {
                url: "https://github.com/mimanjh",
                thumbnail: "/about-me-main.jpg",
                title: "Mimanjh",
            },
        ];
    };
    return (
        <section id="projects">
            <p className="py-6">
                The following carousel will provide a snapshot of the projects I
                have worked on.
            </p>
            <Carousel items={getCarouselItems()} />
        </section>
    );
};

export default Projects;
