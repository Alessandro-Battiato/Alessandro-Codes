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
        title: "Task Hive",
        subtitle:
            "TaskHive is a simplified task manager inspired by Jira and Asana, integrating the Asana API and using Cypress for reliable end-to-end testing.",
        cta: "View project",
        href: "taskHive",
        imgUrl: "/assets/taskHive.png",
    },
    {
        title: "Qube Fall",
        subtitle:
            "Qube Fall is my take on recreating Fluffy Fall, a game I loved a lot growing up, using the power of React Three Fiber and Rapier!",
        cta: "Coming soon!",
        href: "/",
        imgUrl: "/assets/fluffyFall.png",
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
    {
        slug: "taskHive",
        title: "Task Hive",
        description:
            "TaskHive is a simplified task manager inspired by Jira and Asana, integrating the Asana API and using Cypress for reliable end-to-end testing. It uses Atlassian's Pragmatic Drag and Drop library to make moving tasks between status columns easy and intuitive.",
        stack: [
            { name: "Redux Toolkit (RTK Query)", icon: ICONS.redux },
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Tailwind CSS", icon: ICONS.tailwind },
            { name: "Vite", icon: ICONS.vite },
            { name: "Netlify", icon: ICONS.netlify },
            { name: "DaisyUI", icon: ICONS.daisyui },
        ],
        href: "https://aledevtaskhive.netlify.app/",
        sourceCodeLink: "https://github.com/Alessandro-Battiato/Task-Hive",
        projectPurpose:
            "The idea behind TaskHive came together in a pretty ironic way: I used Jira to plan all the tasks required to build... a task manager! I already knew I wanted to build my own simplified version of one, and Jira helped me stay organized throughout the process. That said, I chose Asana's API instead of Jira's because it felt cleaner, more intuitive, and better suited for quickly shipping features without dealing with the overhead that comes with Jira's API.",
        webStackExplanation:
            "Since I was already comfortable with Vite, TypeScript, and Netlify from previous projects, I stuck with them to keep things smooth and familiar. What really made a difference this time was DaisyUI, thanks to its utility-based classes and theme tokens that helped everything look and feel consistent without me having to micromanage every style choice. For state and data fetching, Redux Toolkit with RTK Query was a game changer: it handled caching, background updates, and automatic refetching out of the box.",
        firstAsset: "/assets/taskHive.png",
        secondAsset: "/assets/thFirstAsset.png",
        thirdAsset: "/assets/thSecondAsset.png",
        thoughtProcess:
            "Coming from a Redux Toolkit background where I was used to managing everything manually, such as reducers, actions, and loading states, letting RTK Query take the wheel wasn't immediate. But the more I leaned into it, the more I appreciated how much boilerplate it cut out, and how reliably it handled caching, invalidation, and background updates. It quickly became one of the most satisfying parts of the project. For drag-and-drop, Atlassian's library was an obvious choice, it has been really easy to use, and the results were amazing. I also used Cypress to test real user flows end-to-end, which helped me catch small regressions during development, resulting in a more robust app.",
        takeaway:
            "This project really strengthened my skills and gave me a deeper appreciation for test-driven development, thanks to Cypress catching issues early on. Above all, TaskHive showed me how important it is to have solid structure and developer-friendly tools when building apps that need to scale or handle growing complexity, as the potential of such projects is enormous and having tools like these is essential to support development at scale.",
    },
];
