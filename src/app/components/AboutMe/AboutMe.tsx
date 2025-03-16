import Image from "next/image";
import React from "react";
// TO DO: Hover effect for button (and animated icon as well), and maybe make the text fade in from the left and the image fade in from the right
// TO DO: HUMANIZE TEXT.
// TO DO: It's probably impossible to put icons or else, but at least use gradiented sand for the pillars word, and green/blue gradient for the gelatinous cube words
// TO DO: IMAGE GLSL EFFECT OF WAWA
const AboutMe = () => {
    return (
        <section className="flex p-16 bg-dark-space" id="about">
            <div className="flex-1">
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
                    <a
                        href="/assets/resume.pdf"
                        download
                        className="
                            flex items-center 
                            bg-electric-pink hover:bg-pink-700 
                            text-white
                            max-w-fit 
                            px-6 py-3 
                            mt-8 
                            rounded-md 
                            transition
                        "
                    >
                        Download Resume
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 ml-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16a4 4 0 004 4h8a4 4 0 004-4M7 10l5 5m0 0l5-5m-5 5V4"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <Image
                    src="/assets/defaultAboutMe.png"
                    alt="default about me image"
                    width={400}
                    height={400}
                />
            </div>
        </section>
    );
};

export default AboutMe;
