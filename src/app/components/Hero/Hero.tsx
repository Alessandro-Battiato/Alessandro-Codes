import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PortfolioContext } from "@/app/providers/PortfolioContext/PortfolioContext";

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
                        style={{ display: "block" }}
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

                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            showPortfolio && isInView
                                ? { opacity: 1, x: 0 }
                                : {}
                        }
                        transition={{
                            duration: 1,
                            delay: 1.5,
                            ease: "easeOut",
                        }}
                        style={{ display: "block" }}
                        className="mt-4 text-2xl text-gray-200"
                    >
                        3D Creative Dev
                    </motion.span>
                </motion.h1>
            </div>
            <div ref={ref} className="flex-1" />
        </section>
    );
});

Hero.displayName = "Hero";

export default Hero;
