"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
    useScrollProgress,
    useTouchScrollHandler,
    useMouseScrollHandler,
} from "@/hooks";
import { PortfolioProvider } from "@/providers/PortfolioContext/PortfolioContext";
import { MainSceneProps } from "./types";
import { Loader, ScrollHint } from "@/components/ui";

const SceneRenderer = dynamic(
    () => import("@/components/ui").then((mod) => mod.SceneRenderer),
    {
        ssr: false,
    }
);

const MainScene = ({ children }: MainSceneProps) => {
    const [isPortfolioInteractive, setIsPortfolioInteractive] = useState(false);
    const [isSceneReady, setIsSceneReady] = useState(false);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const portfolioOverlayRef = useRef<HTMLDivElement | null>(null);
    const resistanceTimerRef = useRef<NodeJS.Timeout | null>(null);

    const portfolioTouchStartRef = useRef<number | null>(null);
    const scrollHintShownRef = useRef(false);

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

    useEffect(() => {
        if (showPortfolio && portfolioOverlayRef.current) {
            portfolioOverlayRef.current.focus();
        }
    }, [showPortfolio]);

    useEffect(() => {
        if (!showPortfolio) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showPortfolio]);

    const handlePortfolioWheel = useCallback(
        (e: React.WheelEvent<HTMLDivElement>) => {
            const target = e.currentTarget;

            if (target.scrollTop <= 0 && e.deltaY < 0) {
                if (!resistanceTimerRef.current) {
                    resistanceTimerRef.current = setTimeout(() => {
                        setShowPortfolio(false);
                        resistanceTimerRef.current = null;
                    }, 100);
                }
            } else {
                if (resistanceTimerRef.current) {
                    clearTimeout(resistanceTimerRef.current);
                    resistanceTimerRef.current = null;
                }
            }
        },
        [setShowPortfolio]
    );

    const handlePortfolioTouchStart = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            portfolioTouchStartRef.current = e.touches[0].clientY;
        },
        []
    );

    const handlePortfolioTouchMove = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            if (portfolioTouchStartRef.current === null) return;
            const currentY = e.touches[0].clientY;
            const diff = currentY - portfolioTouchStartRef.current;

            if (e.currentTarget.scrollTop <= 0 && diff > 10) {
                if (!resistanceTimerRef.current) {
                    resistanceTimerRef.current = setTimeout(() => {
                        setShowPortfolio(false);
                        resistanceTimerRef.current = null;
                    }, 100);
                }
            } else {
                if (resistanceTimerRef.current) {
                    clearTimeout(resistanceTimerRef.current);
                    resistanceTimerRef.current = null;
                }
            }
        },
        [setShowPortfolio]
    );

    // a11y
    const handleSceneKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (!showPortfolio) {
                if (
                    e.key === "ArrowDown" ||
                    e.key === "PageDown" ||
                    e.key === " "
                ) {
                    e.preventDefault();
                    setShowPortfolio(true);
                }
            }
        },
        [setShowPortfolio, showPortfolio]
    );

    const handlePortfolioKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === "ArrowUp" || e.key === "Escape") {
                const target = e.currentTarget;
                if (target.scrollTop <= 0 || e.key === "Escape") {
                    setShowPortfolio(false);
                }
            }
        },
        [setShowPortfolio]
    );

    return (
        <div
            ref={containerRef}
            tabIndex={-1}
            onWheel={handleContainerWheel}
            onKeyDown={handleSceneKeyDown}
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
                ref={portfolioOverlayRef}
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
                onWheel={handlePortfolioWheel}
                onTouchStart={handlePortfolioTouchStart}
                onTouchMove={handlePortfolioTouchMove}
                onKeyDown={handlePortfolioKeyDown}
                tabIndex={0}
                role="dialog"
                aria-modal="true"
                aria-label="Portfolio Overlay"
            >
                {showPortfolio &&
                    isPortfolioInteractive &&
                    !scrollHintShownRef.current && (
                        <ScrollHint
                            isSceneReady={true}
                            variant="top"
                            onShown={() => {
                                scrollHintShownRef.current = true;
                            }}
                        />
                    )}

                <PortfolioProvider showPortfolio={showPortfolio}>
                    {children}
                </PortfolioProvider>
            </motion.div>
        </div>
    );
};

export default MainScene;
