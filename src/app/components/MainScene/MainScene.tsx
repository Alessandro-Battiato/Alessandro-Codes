"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
    useScrollProgress,
    useTouchScrollHandler,
    useMouseScrollHandler,
} from "../../hooks/index";
import SceneRenderer from "../SceneRenderer/SceneRenderer";
import Portfolio from "../Portfolio/Portfolio";

const MainScene = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const { scrollProgress, smoothScroll, showPortfolio, setShowPortfolio } =
        useScrollProgress();
    const handleContainerWheel = useMouseScrollHandler({
        scrollProgress,
        showPortfolio,
        setShowPortfolio,
    });

    useTouchScrollHandler({ containerRef, scrollProgress });

    return (
        <div
            ref={containerRef}
            onWheel={handleContainerWheel}
            style={{
                height: "100vh",
                overflow: showPortfolio ? "auto" : "hidden",
                position: "relative",
            }}
        >
            <SceneRenderer smoothScroll={smoothScroll} />

            {showPortfolio && (
                <motion.div
                    ref={overlayRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        overflowY: "auto",
                        background: "#fff",
                        zIndex: 10,
                    }}
                >
                    <Portfolio isInsideMonitor />
                </motion.div>
            )}
        </div>
    );
};

export default MainScene;
