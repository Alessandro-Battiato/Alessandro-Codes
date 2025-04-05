import React, { useState } from "react";

import { motion } from "framer-motion";

import DownloadButton from "../DownloadButton/DownloadButton";
import Image from "next/image";

const AboutMe = React.forwardRef<HTMLDivElement>(({}, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            className="flex flex-col lg:flex-row items-center px-4 py-8 lg:p-16 bg-dark-space overflow-hidden"
            id="about"
        >
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
                className="lg:hidden relative mb-4 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]"
            >
                <Image
                    src="/assets/defaultAboutMe.png"
                    alt="Default"
                    fill
                    className="object-contain"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image
                        src="/assets/hoveredAboutMe.png"
                        alt="Hovered"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>

            <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-2xl">
                    <h2 className="text-white text-2xl lg:text-4xl font-semibold mb-6">
                        About me
                    </h2>
                    <p className="text-gray-200 text-sm lg:text-base leading-relaxed mb-4">
                        Hi there! I’m Alessandro Battiato, a passionate
                        Front-End Web Developer always trying to bring a spark
                        of joy to my projects. Ever since I first started
                        surfing the web, I’ve been curious about how everything
                        works, how people build such things. For instance,
                        whenever I came across blog articles with whimsical
                        animations and interactions, my interest (along with a
                        bit of envy!) skyrocketed.
                    </p>
                    <p className="text-gray-200 text-sm lg:text-base leading-relaxed mb-4">
                        But the real turning point for me was the summer of
                        2023. While on vacation with a friend, we watched{" "}
                        <em>Dungeons &amp; Dragons: Honor Among Thieves</em>.
                        The scene with the{" "}
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
                    <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                        Curious to see what I can build? Check out my resume
                        below!
                    </p>
                    <DownloadButton />
                </div>
            </motion.div>

            <div
                ref={ref}
                className="hidden flex-1 h-[500px] lg:flex items-center justify-center"
            />
        </section>
    );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
