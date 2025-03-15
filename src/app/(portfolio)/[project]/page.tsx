// TO DO: Case study page dedicated to a single project
import React from "react";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
    // Valid projects list
    return [
        { project: "project1" },
        { project: "project2" },
        { project: "project3" },
    ];
}

export default function ProjectPage({
    params,
}: {
    params: { project: string };
}) {
    const validProjects = ["project1", "project2", "project3"];

    if (!validProjects.includes(params.project)) {
        notFound();
    }

    return (
        <div>
            <h1>Case Study: {params.project}</h1>
        </div>
    );
}
