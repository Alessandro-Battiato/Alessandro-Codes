"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

import Portfolio from "../Portfolio/Portfolio";
import MonitorScreen from "../MonitorScreen/MonitorScreen";

const CameraController = ({ scrollProgress }) => {
    const cameraRef = useRef();
    useFrame(({ camera }) => {
        const progress = scrollProgress.get();
        camera.position.z = 2.5 - progress * 7.5;
        camera.position.y = 0.7 - progress * 1.0;
        cameraRef.current = camera;
    });
    return null;
};

const MainScene = () => {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);

    const scrollProgress = useMotionValue(0);
    const smoothScroll = useSpring(scrollProgress, {
        stiffness: 100,
        damping: 20,
    });
    const [showPortfolio, setShowPortfolio] = useState(false);

    const handleContainerWheel = (e) => {
        if (!showPortfolio) {
            const newProgress = scrollProgress.get() + e.deltaY / 500;
            scrollProgress.set(Math.max(0, Math.min(1, newProgress)));
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        let touchStartY = 0;
        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e) => {
            if (!showPortfolio) {
                const touchCurrentY = e.touches[0].clientY;
                const deltaY = touchStartY - touchCurrentY;
                touchStartY = touchCurrentY;
                const newProgress = scrollProgress.get() + deltaY / 500;
                scrollProgress.set(Math.max(0, Math.min(1, newProgress)));
            }
        };
        container.addEventListener("touchstart", handleTouchStart, {
            passive: false,
        });
        container.addEventListener("touchmove", handleTouchMove, {
            passive: false,
        });
        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [scrollProgress, showPortfolio]);

    useEffect(() => {
        const unsubscribe = smoothScroll.on("change", (latest) => {
            if (!showPortfolio && latest >= 0.98) {
                setShowPortfolio(true);
            } else if (showPortfolio && latest <= 0.98) {
                setShowPortfolio(false);
            }
        });
        return unsubscribe;
    }, [smoothScroll, showPortfolio]);

    const handleOverlayWheel = (e) => {
        e.stopPropagation();
        const threshold = 10;
        if (
            e.deltaY < 0 &&
            overlayRef.current &&
            overlayRef.current.scrollTop <= 5 &&
            Math.abs(e.deltaY) > threshold
        ) {
            const newProgress = scrollProgress.get() + e.deltaY / 500;

            scrollProgress.set(Math.max(0, Math.min(1, newProgress)));
            if (newProgress < 0.98) {
                setShowPortfolio(false);
            }
        }
    };

    useEffect(() => {
        if (showPortfolio && overlayRef.current) {
            let touchStartY = 0;
            let touchMoveY = 0;
            let exitTimeout;
            const overlay = overlayRef.current;

            const handleTouchStart = (e) => {
                touchStartY = e.touches[0].clientY;
            };

            const handleTouchMove = (e) => {
                e.stopPropagation();
                touchMoveY = e.touches[0].clientY;
                const deltaY = touchStartY - touchMoveY;

                if (
                    deltaY < 0 &&
                    overlay.scrollTop <= 5 &&
                    Math.abs(deltaY) > 15
                ) {
                    clearTimeout(exitTimeout);
                    exitTimeout = setTimeout(() => {
                        const newProgress = scrollProgress.get() + deltaY / 500;
                        scrollProgress.set(
                            Math.max(0, Math.min(1, newProgress))
                        );

                        if (newProgress <= 0.98) {
                            setShowPortfolio(false);
                        }
                    }, 200);
                }
            };

            overlay.addEventListener("touchstart", handleTouchStart, {
                passive: false,
            });
            overlay.addEventListener("touchmove", handleTouchMove, {
                passive: false,
            });

            return () => {
                clearTimeout(exitTimeout);
                overlay.removeEventListener("touchstart", handleTouchStart);
                overlay.removeEventListener("touchmove", handleTouchMove);
            };
        }
    }, [showPortfolio, scrollProgress]);

    const sceneOpacity = useTransform(smoothScroll, [0.8, 1], [1, 0]);

    const { scene: monitor } = useGLTF("/models/Monitor/Monitor.glb");
    const { scene: desk } = useGLTF("/models/Desk/scene.gltf");

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
            <motion.div
                style={{
                    opacity: sceneOpacity,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Canvas camera={{ position: [0, 0.7, 2.5], fov: 40 }}>
                    <ambientLight />
                    <CameraController scrollProgress={smoothScroll} />
                    <primitive
                        object={monitor}
                        scale={8}
                        position-y={-4.165}
                        position-z={-9}
                    />
                    <primitive
                        object={desk}
                        scale={0.1}
                        position-y={-8}
                        position-z={-10}
                    />
                    {!showPortfolio && (
                        <MonitorScreen>
                            <Portfolio />
                        </MonitorScreen>
                    )}
                </Canvas>
            </motion.div>

            {showPortfolio && (
                <motion.div
                    ref={overlayRef}
                    onWheel={handleOverlayWheel}
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
                    <Portfolio />
                </motion.div>
            )}
        </div>
    );
};

export default MainScene;
