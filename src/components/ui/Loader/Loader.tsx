"use client";
import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { LoaderProps } from "./types";

const Loader: React.FC<LoaderProps> = ({ isSceneReady }) => {
    const { progress } = useProgress();
    const [displayedProgress, setDisplayedProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dotCount, setDotCount] = useState(1);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        setDisplayedProgress((prev) => (progress > prev ? progress : prev));
    }, [progress]);

    useEffect(() => {
        if (!shouldReduceMotion) {
            const interval = setInterval(() => {
                setDotCount((prev) => (prev === 3 ? 1 : prev + 1));
            }, 500);
            return () => clearInterval(interval);
        }
    }, [shouldReduceMotion]);

    useEffect(() => {
        if (displayedProgress >= 99.9 && isSceneReady) {
            const timeout = setTimeout(() => {
                setIsLoaded(true);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [displayedProgress, isSceneReady]);

    const animatedDots = Array.from({ length: 3 }, (_, i) => (
        <motion.span
            key={i}
            animate={
                shouldReduceMotion
                    ? { y: 0, opacity: 1 }
                    : {
                          y: dotCount === i + 1 ? [0, -10, 0] : 0,
                          opacity: dotCount === i + 1 ? 1 : 0.3,
                      }
            }
            transition={
                shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.3, ease: "easeOut" }
            }
            style={{
                display: "inline-block",
                fontSize: "3rem",
                margin: "0 4px",
                color: "#fff",
            }}
        >
            .
        </motion.span>
    ));

    return (
        <AnimatePresence>
            {!isLoaded && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        willChange: "opacity",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                        pointerEvents: "none",
                    }}
                >
                    <div className="text-center w-3/5">
                        <p className="text-white font-bold mb-10 text-4xl md:text-5xl">
                            Loading{animatedDots}
                        </p>
                        <div className="w-full h-5 bg-transparent border-2 border-white p-1 box-border mx-auto">
                            <div
                                className="h-full bg-white transition-all duration-200 ease-out"
                                style={{ width: `${displayedProgress}%` }}
                            ></div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
