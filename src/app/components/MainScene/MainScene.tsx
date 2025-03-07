"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
    useScrollProgress,
    useTouchScrollHandler,
    useMouseScrollHandler,
} from "../../hooks/index";
import Loader from "../Loader/Loader";

const SceneRenderer = dynamic(() => import("../SceneRenderer/SceneRenderer"), {
    ssr: false,
});

const Portfolio = dynamic(() => import("../Portfolio/Portfolio"), {
    ssr: false,
});

const MainScene = () => {
    const [isPortfolioInteractive, setIsPortfolioInteractive] = useState(false);
    const [isSceneReady, setIsSceneReady] = useState(false);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollProgress, smoothScroll, showPortfolio, setShowPortfolio } =
        useScrollProgress();

    const handleContainerWheel = useMouseScrollHandler({
        scrollProgress,
        showPortfolio,
    });

    const { handleTouchStart, handleTouchMove } = useTouchScrollHandler({
        scrollProgress,
        showPortfolio,
    });

    const handleSceneReady = useCallback(() => {
        setIsSceneReady(true);
    }, []);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (showPortfolio) {
            timeout = setTimeout(() => setIsPortfolioInteractive(true), 300); // Matches fade-in animation duration
        } else {
            setIsPortfolioInteractive(false);
        }

        return () => clearTimeout(timeout);
    }, [showPortfolio]);

    return (
        <div
            ref={containerRef}
            onWheel={handleContainerWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{
                position: "relative",
                height: "100vh",
                overflow: showPortfolio ? "auto" : "hidden",
            }}
        >
            <SceneRenderer
                onSceneReady={handleSceneReady}
                smoothScroll={smoothScroll}
            />

            <Loader isSceneReady={isSceneReady} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showPortfolio ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    zIndex: 100,
                    overflowY: isPortfolioInteractive ? "auto" : "hidden",
                    pointerEvents: isPortfolioInteractive ? "auto" : "none",
                    overscrollBehavior: "contain",
                }}
                onScroll={(e) => {
                    const target = e.target as HTMLDivElement;
                    if (target.scrollTop <= 0) {
                        setShowPortfolio(false);
                    }
                }}
            >
                <Portfolio />
            </motion.div>
        </div>
    );
};

export default MainScene;
