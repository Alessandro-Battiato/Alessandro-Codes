import { ICONS } from "@/lib/icons";
import { Project, ProjectDetailData } from "@/types/projects";

export const projects: Project[] = [
    {
        title: "Fitness Coach",
        subtitle:
            "A fitness-focused website leveraging React-Three-Fiber to render an interactive 3D human model that gives athletes a brief overview for each exercise.",
        cta: "View project",
        href: "fitnessCoach",
        imgUrl: "/assets/fitnessCoach.png",
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

export const detailedProjectsData: ProjectDetailData[] = [
    {
        slug: "fitnessCoach",
        title: "Fitness Coach",
        description: "A website leveraging React-Three-Fiber",
        stack: [
            { name: "React", icon: ICONS.react },
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Tailwind CSS", icon: ICONS.tailwind },
            { name: "Vite", icon: ICONS.vite },
            { name: "Netlify", icon: ICONS.netlify },
            { name: "React Query", icon: ICONS.reactQuery },
        ],
        href: "https://aledevfitnesscoach.netlify.app/",
        projectPurpose: "The main goal was...",
        webStackExplanation: "Next.js was chosen...",
        firstAsset: "/assets/fcFirstAsset.png",
        secondAsset: "/assets/fcSecondAsset.png",
        thirdAsset: "/assets/fcThirdAsset.png",
        thoughtProcess: "One challenge was...",
        takeaway: "This project reinforced...",
    },
];
