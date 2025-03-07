"use client";
import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderProps } from "./types";

const Loader: React.FC<LoaderProps> = ({ isSceneReady }) => {
    const { progress } = useProgress();
    const [displayedProgress, setDisplayedProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dotCount, setDotCount] = useState(1);

    useEffect(() => {
        setDisplayedProgress((prev) => (progress > prev ? progress : prev));
    }, [progress]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prev) => (prev === 3 ? 1 : prev + 1));
        }, 500);
        return () => clearInterval(interval);
    }, []);

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
            animate={{
                y: dotCount === i + 1 ? [0, -10, 0] : 0,
                opacity: dotCount === i + 1 ? 1 : 0.3,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
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
                    <div style={{ textAlign: "center", width: "60%" }}>
                        <div
                            style={{
                                color: "#fff",
                                fontSize: "3rem",
                                fontWeight: "bold",
                                marginBottom: "40px",
                            }}
                        >
                            Loading{animatedDots}
                        </div>
                        <div
                            style={{
                                width: "100%",
                                height: "20px",
                                backgroundColor: "transparent",
                                border: "2px solid #fff",
                                padding: "4px",
                                boxSizing: "border-box",
                                margin: "0 auto",
                            }}
                        >
                            <div
                                style={{
                                    width: `${displayedProgress}%`,
                                    height: "100%",
                                    backgroundColor: "#fff",
                                    transition: "width 0.2s ease-out",
                                }}
                            ></div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
