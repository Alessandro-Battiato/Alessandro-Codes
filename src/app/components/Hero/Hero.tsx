import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PortfolioContext } from "@/app/providers/PortfolioContext/PortfolioContext";
import Sparkles from "../Sparkles/Sparkles";

const Hero = React.forwardRef<HTMLDivElement>(({}, ref) => {
    const context = useContext(PortfolioContext);
    const showPortfolio = context?.showPortfolio ?? false;

    const titleRef = useRef(null);
    const isInView = useInView(titleRef, { amount: 1.0, once: true }); // parameter "once" prevents jitter

    return (
        <section className="relative h-screen flex" id="Hero">
            <div className="flex-1 flex flex-col justify-center items-center text-center">
                <motion.h1
                    ref={titleRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={
                        showPortfolio && isInView ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="relative w-fit text-5xl font-bold"
                >
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            showPortfolio && isInView
                                ? { opacity: 1, x: 0 }
                                : {}
                        }
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: "easeOut",
                        }}
                    >
                        <span className="text-white">I&apos;m </span>
                        <span
                            className="
                                relative inline-block 
                                text-transparent bg-clip-text 
                                bg-gradient-to-r from-electric-blue via-pastel-violet to-intense-pink
                                before:content-[''] before:absolute before:top-1/2 before:left-1/2
                                before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full
                                before:bg-gradient-to-r before:from-electric-blue before:via-pastel-violet before:to-intense-pink
                                before:blur-xl before:opacity-30 before:z-[-1]
                            "
                        >
                            Alessandro Battiato
                        </span>
                    </motion.span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                        showPortfolio && isInView ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{
                        duration: 1,
                        delay: 1.5,
                        ease: "easeOut",
                    }}
                    className="mt-4 text-2xl text-gray-200"
                >
                    3D <Sparkles color="#FFC700">Creative</Sparkles> Dev
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={
                        showPortfolio && isInView ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    <button
                        className="
                        group relative inline-flex items-center overflow-hidden rounded-full border-2 
                        border-electric-blue px-12 py-3 text-lg font-semibold text-electric-blue 
                        transition-all duration-300 hover:text-white mt-8
                    "
                    >
                        <motion.span
                            className="
                            absolute left-0 top-1/2 h-0 w-full bg-electric-blue opacity-100 
                            transition-all duration-400 ease-in-out group-hover:top-0 group-hover:h-full
                        "
                        />

                        <motion.span
                            className="
                            absolute right-0 flex h-10 w-10 translate-x-full transform 
                            items-center justify-start duration-500 ease-in-out group-hover:-translate-x-2
                        "
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </motion.span>

                        <a
                            href="#contact"
                            className="
                            relative transform transition-transform duration-700 ease-in-out 
                            group-hover:-translate-x-3
                        "
                        >
                            Contact Me
                        </a>
                    </button>
                </motion.div>
            </div>
            <div ref={ref} className="flex-1" />
        </section>
    );
});

Hero.displayName = "Hero";

export default Hero;
