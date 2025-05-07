import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui";
import ProjectDetail from "@/components/ui/ProjectDetail/ProjectDetail";
import { detailedProjectsData } from "@/data/projects";

export async function generateStaticParams() {
    return detailedProjectsData.map((p) => ({ project: p.slug }));
}

export default function ProjectPage({
    params,
}: {
    params: { project: string };
}) {
    const projectData = detailedProjectsData.find(
        (p) => p.slug === params.project
    );

    if (!projectData) {
        notFound();
    }

    return (
        <article className="min-h-screen relative -z-10 bg-dark-space text-gray-100">
            <BackButton />

            <div className="fixed inset-0 -z-20 w-full h-full pointer-events-none">
                <Image
                    src="/assets/background.svg"
                    alt="background image"
                    fill
                    className="blur-[100px] object-cover"
                />
            </div>

            <ProjectDetail {...projectData} />
        </article>
    );
}
