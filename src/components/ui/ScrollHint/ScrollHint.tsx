"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import { ScrollHintProps } from "./types";

const ScrollHint = ({
    isSceneReady,
    variant = "bottom",
    onShown,
}: ScrollHintProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isSceneReady) {
            const timer = setTimeout(() => {
                setShow(true);
                if (onShown) {
                    onShown();
                }
            }, 500);
            return () => clearTimeout(timer);
        }
        return;
    }, [isSceneReady, onShown]);

    useEffect(() => {
        if (show) {
            const hideTimer = setTimeout(() => {
                setShow(false);
            }, 3000);
            return () => clearTimeout(hideTimer);
        }
    }, [show]);

    const containerStyle = (
        variant === "bottom"
            ? {
                  position: "fixed",
                  bottom: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                  zIndex: 1000,
              }
            : {
                  position: "fixed",
                  top: "115px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                  zIndex: 1000,
              }
    ) as MotionStyle;

    const message =
        variant === "bottom"
            ? "Scroll down to enjoy the experience"
            : "Scroll up to go back to the scene";

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                    style={containerStyle}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        {variant === "top" && (
                            <motion.svg
                                initial={{ y: 0, rotate: 180 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                style={{ marginBottom: "5px" }}
                                width="24"
                                height="24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 16l-6-6h12l-6 6z" />
                            </motion.svg>
                        )}
                        <p style={{ color: "#fff", margin: 0 }}>{message}</p>
                        {variant === "bottom" && (
                            <motion.svg
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                style={{ marginTop: "5px" }}
                                width="24"
                                height="24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 16l-6-6h12l-6 6z" />
                            </motion.svg>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollHint;
