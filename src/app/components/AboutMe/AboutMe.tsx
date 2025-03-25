import React from "react";

import { motion } from "framer-motion";

import DownloadButton from "../DownloadButton/DownloadButton";

const AboutMe = React.forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <section className="flex p-16 bg-dark-space overflow-hidden" id="about">
            <motion.div
                className="flex-1"
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-2xl">
                    <h2 className="text-white text-4xl font-semibold mb-6">
                        About me
                    </h2>
                    <p className="text-gray-200 text-base leading-relaxed mb-4">
                        Hi there! I’m Alessandro Battiato, a passionate
                        Front-End Web Developer always trying to bring a spark
                        of joy to my projects. Ever since I first started
                        surfing the web, I’ve been curious about how everything
                        works, how people build such things. For instance,
                        whenever I came across blog articles with whimsical
                        animations and interactions, my interest (along with a
                        bit of envy!) skyrocketed.
                    </p>
                    <p className="text-gray-200 text-base leading-relaxed mb-4">
                        But the real turning point for me was the summer of
                        2023. While on vacation with a friend, we watched{" "}
                        <em>Dungeons &amp; Dragons: Honor Among Thieves</em>.
                        Seeing the{" "}
                        <a
                            href="https://www.youtube.com/watch?v=aUS5lJ9_ogk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-electric-blue underline visited:text-pastel-violet"
                        >
                            moving pillars and a giant gelatinous cube
                        </a>{" "}
                        trapping the protagonists not only made me hold my
                        breath, but also reignited the same spark and growing
                        curiosity I had felt years ago. That’s when I realized I
                        could bring this kind of 3D animation into my work
                        through Three.js, which led me to become a 3D Creative
                        Developer!
                    </p>
                    <p className="text-gray-200 text-base leading-relaxed">
                        Curious to see what I can build? Check out my resume
                        below!
                    </p>
                    <DownloadButton />
                </div>
            </motion.div>

            <motion.div
                ref={ref}
                className="flex-1 flex items-center justify-center"
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            />
        </section>
    );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
