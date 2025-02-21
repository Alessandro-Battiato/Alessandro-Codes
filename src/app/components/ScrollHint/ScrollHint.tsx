import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollHint = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        pointerEvents: "none",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <p style={{ color: "#fff", margin: 0 }}>
                            Scroll down to enjoy the experience
                        </p>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ marginTop: "5px" }}
                        >
                            <svg
                                width="24"
                                height="24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 16l-6-6h12l-6 6z" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollHint;
