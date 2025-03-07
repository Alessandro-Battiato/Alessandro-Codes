"use client";
import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderProps } from "./types";

const LoaderOverlay = ({ isSceneReady }: LoaderProps) => {
    const { progress } = useProgress();
    const [displayedProgress, setDisplayedProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setDisplayedProgress((prev) => (progress > prev ? progress : prev));
    }, [progress]);

    useEffect(() => {
        if (displayedProgress >= 99.9 && isSceneReady) {
            const timeout = setTimeout(() => {
                setIsLoaded(true);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [displayedProgress, isSceneReady]);

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
                    <div style={{ color: "#fff", fontSize: "1.5rem" }}>
                        Caricamento: {Math.round(displayedProgress)}%
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoaderOverlay;
