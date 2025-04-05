import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
    {
        title: "Lorem Ipsum",
        subtitle: "Lorem Ipsum",
        cta: "View project",
        href: "project1",
        imgUrl: "/assets/test.jpg",
    },
    {
        title: "Lorem Ipsum",
        subtitle: "Lorem Ipsum",
        cta: "View project",
        href: "project2",
        imgUrl: "/assets/test.jpg",
    },
    {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum",
        cta: "Coming soon!",
        href: "project3",
        imgUrl: "/assets/test.jpg",
    },
];

const Projects = () => {
    return (
        <section className="flex flex-col px-4 py-8 lg:p-16" id="projects">
            <header className="mb-10 lg:mb-20">
                <h2 className="mb-6 text-white text-2xl lg:text-4xl font-semibold">
                    Recent projects
                </h2>
                <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                    I enjoy keeping myself occupied, which is why I&apos;m
                    always working on something. <br />
                    Feel free to explore some of my best projects!
                </p>
            </header>
            <div className="flex flex-wrap gap-6 items-center justify-center">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
