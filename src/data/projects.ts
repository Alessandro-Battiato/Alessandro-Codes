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
        description:
            "Fitness Coach is a mock fitness web platform designed to bring workout guidance to life through an immersive, interactive 3D experience, thanks to React-Three-Fiber. Users land on a hero section with a full-body human model they can interact with freely. Hovering individual muscle groups highlights them, while clicking on said groups opens a dialog with targeted exercise instructions and demonstration GIFs.",
        stack: [
            { name: "React-Three-Fiber", icon: ICONS.reactThreeFiber },
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Tailwind CSS", icon: ICONS.tailwind },
            { name: "Vite", icon: ICONS.vite },
            { name: "Netlify", icon: ICONS.netlify },
            { name: "React Query", icon: ICONS.reactQuery },
        ],
        href: "https://aledevfitnesscoach.netlify.app/",
        sourceCodeLink: "https://github.com/Alessandro-Battiato/Fitness-Coach",
        projectPurpose:
            "I wanted to demonstrate how 3D interactivity can elevate a web platform: by letting users explore muscle anatomy directly in the browser, they get personalized exercise insights, also increasing user retention given the odd yet whimsical nature of a 3D website compared to a normal 2D counterpart.",
        webStackExplanation:
            "To keep the development workflow fast and focused, I chose Vite for its minimal configuration and TypeScript for type-safe development. I styled the entire interface with Tailwind CSS to maintain design consistency without writing verbose CSS, and I deployed on Netlify for speed and reliability. React-Three-Fiber handles rendering the human model and managing scene updates, while React Query (encapsulated in custom hooks) takes care of all asynchronous communication with the backend.",
        firstAsset: "/assets/fitnessCoach.png",
        secondAsset: "/assets/fcFirstAsset.png",
        thirdAsset: "/assets/fcSecondAsset.png",
        thoughtProcess:
            "I started with a detailed 3D anatomy model and a clear vision for muscle-specific interactivity. In Blender, I separated each muscle group using the circle-select tool to isolate individual meshes. I then exported each segment as a standalone object so the front end could map clicks to custom requests to the back end. On the React side, I built a custom hook with React Query to fetch the relevant exercise GIFs and instructions whenever a user clicks a muscle. I also implemented hover states to animate the mesh's emissive color. For the workout section, I chose Splide.js because it's simple and well-documented and it let me integrate a responsive carousel of exercises, giving me full control over the experience",
        takeaway:
            "This project pushed me to tackle a real-world challenge and showed me how to turn a complex 3D asset into a seamless, interactive experience. It was frustrating at times but taught me patience and precision skills that paid off when everything finally clicked together. More importantly, by the end, I'd gained the confidence to move between Blender and React, while keeping track of the asset data using GLTF.Report, handle dynamic data, and build polished, user-focused 3D features without second-guessing myself.",
    },
];
