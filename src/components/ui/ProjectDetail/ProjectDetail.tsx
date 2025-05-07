import React, { useMemo } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";
import { ProjectDetailData } from "@/types/projects";

const ProjectDetail = ({
    slug,
    title,
    description,
    stack,
    href,
    thoughtProcess,
    takeaway,
    firstAsset,
    secondAsset,
    thirdAsset,
}: ProjectDetailData) => {
    const otherProjects = useMemo(
        () => projects.filter((p) => p.href !== slug),
        [slug]
    );

    return (
        <div className="max-w-5xl mx-auto py-16 px-4 space-y-16">
            <header className="flex flex-col gap-8">
                <h1 className="text-4xl font-semibold">{title}</h1>
                <p className="text-md text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-32 text-sm text-gray-300">
                    <div className="flex flex-col gap-4">
                        <span className="font-bold uppercase text-gray-100">
                            Stack
                        </span>
                        <ul className="text-gray-300 space-y-2">
                            {stack.map((el, idx) => (
                                <li key={idx}>{el.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-bold uppercase text-gray-100">
                            Live
                        </span>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-electric-blue font-bold hover:text-electric-pink"
                        >
                            View Site
                        </a>
                    </div>
                </div>
                <div className="relative w-full h-[20vh] md:h-[60vh] overflow-hidden rounded-lg">
                    <Image
                        src={firstAsset}
                        alt="Feature 1"
                        fill
                        className="
                            object-left
                            object-contain 
                            lg:object-cover
                            lg:object-center
                        "
                    />
                </div>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-8">
                    Project Purpose and Goal
                </h2>
                <p className="text-gray-300">…lorem ipsum</p>
            </section>

            <section className="flex flex-col md:flex-row items-start gap-12">
                <div className="flex-1 flex flex-col md:flex-row items-start gap-8">
                    <ul className="font-semibold text-gray-100 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-12">
                        {stack.map((el, idx) => {
                            const Icon = el.icon;
                            return (
                                <li
                                    key={idx}
                                    className="flex items-center gap-2"
                                >
                                    <Icon
                                        size={28}
                                        className="text-electric-blue hover:text-electric-pink"
                                    />
                                    <span>{el.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-8">
                        Web Stack and Explanation
                    </h2>
                    <p className="text-gray-300">…lorem ipsum</p>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:h-[30vh] relative overflow-hidden">
                        <Image
                            src={secondAsset}
                            alt="Feature 2"
                            width={500}
                            height={300}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:h-[30vh] relative overflow-hidden">
                        <Image
                            src={thirdAsset}
                            alt="Feature 3"
                            width={500}
                            height={300}
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="lg:text-center">
                <h2 className="text-2xl font-semibold mb-8">
                    Problems and Thought Process
                </h2>
                <p className="text-gray-300">{thoughtProcess}</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-8">Lessons Learned</h2>
                <p className="text-gray-300">{takeaway}</p>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-8">Other Projects</h2>
                <div className="grid lg:grid-cols-2 gap-12">
                    {otherProjects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
