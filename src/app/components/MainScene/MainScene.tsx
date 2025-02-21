"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
    useScrollProgress,
    useTouchScrollHandler,
    useMouseScrollHandler,
} from "../../hooks/index";
import Portfolio from "../Portfolio/Portfolio";

const SceneRenderer = dynamic(() => import("../SceneRenderer/SceneRenderer"), {
    ssr: false,
});

const MainScene = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

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

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showPortfolio ? 1 : 0 }}
                exit={{ opacity: 0 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    background: "#fff",
                    zIndex: 100,
                }}
            >
                <Portfolio isInsideMonitor={true} />
            </motion.div>
        </div>
    );
};

export default MainScene;
