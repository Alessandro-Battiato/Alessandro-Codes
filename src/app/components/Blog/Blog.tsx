import { ArticleCard } from "@/components/ui/ArticleCard/ArticleCard";
import React from "react";

const articles = [
    {
        title: "Framer Motion Transition Animation in React",
        subtitle:
            "A short, step-by-step tutorial featuring interactive code snippets that demonstrate how to create smooth, engaging transitions with Framer Motion, effectively working as a splash screen. This is a technique I have directly applied in my current professional work.",
        cta: "Read article",
        href: "https://codinghue.com/posts/framerMotion",
    },
    {
        title: "Shedding some light on Next.js and React.js",
        subtitle:
            "A brief comparison between Next.js and React, highlighting their key differences and when each is the optimal choice for your projects.",
        cta: "Read article",
        href: "https://codinghue.com/posts/NextVsReact",
    },
    {
        title: "Work in Progress!",
        subtitle: "Stay tuned for more content!",
        cta: "Coming soon!",
    },
];

const Blog = () => {
    return (
        <section className="flex flex-col p-16 bg-dark-space" id="blog">
            <header className="mb-20">
                <h2 className="mb-6 text-white text-4xl font-semibold">
                    CodingHue
                </h2>
                <p className="text-gray-200 text-base leading-relaxed">
                    This is my little corner in which I share my knowledge and
                    tutorials about everything I practice with. <br />
                    From cute 2D/3D animations, to technical tips regarding the
                    stack I use, this blog is my experimental hub!
                </p>
            </header>
            <div className="flex flex-wrap gap-20 items-center justify-around">
                {articles.map((article, idx) => (
                    <ArticleCard
                        key={idx}
                        className="flex flex-col justify-between rounded-[22px] max-w-sm p-4 sm:p-10 min-w-[384px] min-h-[350px] bg-zinc-900"
                    >
                        <h3 className="text-base sm:text-xl mt-2 mb-2 text-white">
                            {article.title}
                        </h3>

                        <p className="flex items-center text-sm mb-4 text-gray-400">
                            {article.subtitle}
                        </p>

                        <a
                            href={article.href || "#blog"}
                            {...(article.href && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            })}
                            className="inline-block mt-auto rounded-md max-w-fit border border-electric-blue text-electric-blue px-4 py-2 transition duration-300 hover:bg-electric-blue hover:text-white"
                        >
                            {article.cta}
                        </a>
                    </ArticleCard>
                ))}
            </div>
        </section>
    );
};

export default Blog;
