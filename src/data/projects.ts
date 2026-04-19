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
        title: "Aether",
        subtitle:
            "A full-stack AI chat application powered by OpenRouter. Supports real-time streaming responses, multiple AI models, and persistent conversation history.",
        cta: "View project",
        href: "aether",
        imgUrl: "/assets/aether.png",
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
    {
        slug: "aether",
        title: "Aether",
        description:
            "Aether is a full-stack AI chat application inspired by ChatGPT. Users can register, log in, and manage multiple conversations from a collapsible sidebar, switch between AI models powered by OpenRouter, and receive responses in real time. The interface is fully responsive: on desktop the sidebar collapses to an icon, while on mobile it slides in as a drawer. The backend exposes a REST API secured with JWT stored in httpOnly cookies, backed by PostgreSQL through Prisma and deployed on Railway.",
        stack: [
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Redux Toolkit", icon: ICONS.redux },
            { name: "Shadcn/UI", icon: ICONS.shadcn },
            { name: "Vite", icon: ICONS.vite },
            { name: "Railway", icon: ICONS.railway },
            { name: "Prisma", icon: ICONS.prisma },
        ],
        href: "https://ab-aether.netlify.app/",
        sourceCodeLink: "https://github.com/Alessandro-Battiato/Aether",
        projectPurpose:
            "I wanted to build a production-ready, full-stack application from the ground up rather than just a front-end showcase. Recreating a ChatGPT-style product forced me to tackle things I had never dealt with before: streaming responses via Server-Sent Events (SSE), cross-origin cookie authentication, a relational data model with user-owned conversations, and a live deployed backend with a real database. Another key goal was to evolve my development workflow by integrating an AI agent into the process. I built the project using Claude Code, working with an agent capable of handling scoped context across separate client and server codebases. This allowed me to move beyond simply using AI as a prompt-based assistant, toward a more AI-native approach where I could orchestrate, guide, and iterate with the agent as part of the development loop. The goal was to prove to myself that I could own the entire stack, from schema design to a polished, responsive UI, while also deepening my ability to effectively collaborate with AI as a development tool and ship it as a working product.",
        webStackExplanation:
            "On the front end I stayed with the Vite and TypeScript combination I was already comfortable with, and chose Redux Toolkit for predictable, well-structured state management across auth, chat lists, and streaming content. On the backend I used Express, Prisma, and PostgreSQL to build a simple and type-safe API. For the AI layer, I integrated OpenRouter to access multiple models through a single endpoint. The client is deployed on Netlify and the server on Railway, each with its own environment configuration.",
        firstAsset: "/assets/aether.png",
        secondAsset: "/assets/aetherFirstAsset.png",
        thirdAsset: "/assets/aetherSecondAsset.png",
        thoughtProcess:
            "The two hardest problems were streaming and production authentication. For streaming, I used Server-Sent Events (SSE) with the fetch-event-source client instead of Axios, so I could handle incremental updates as they arrive and push the streamed tokens directly into a Redux slice that StreamingBubble reads in real time. Each token appends to a content buffer and a blinking cursor provides immediate visual feedback; when the done event arrives, optimistic messages are replaced with server-confirmed ones and the chat list refreshes to pick up the auto-generated title. Authentication looked straightforward until I deployed: httpOnly cookies set with SameSite=Strict are silently dropped by browsers on cross-origin requests, so every protected API call returned 401 even after a successful login. Switching to SameSite=None with Secure in production fixed the sending side, but then logout was broken because clearCookie without matching attributes is ignored by the browser for the same reason. Getting both sides right required understanding the exact rules browsers apply when matching Set-Cookie headers.",
        takeaway:
            "Aether is the project that really made me comfortable calling myself a full-stack developer. Owning the whole stack, from database migrations and auth to real-time streaming and a React client, helped me understand how each layer impacts the others in a way front-end-only work never did. Debugging production issues around cookies and CORS was frustrating, but it gave me a much clearer mental model of how browsers enforce security and why environment differences matter so much.",
    }
];
