import { useState, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export const useScrollProgress = () => {
    const scrollProgress = useMotionValue(0);
    const smoothScroll = useSpring(scrollProgress, {
        stiffness: 100,
        damping: 20,
    });
    const [showPortfolio, setShowPortfolio] = useState(false);

    useEffect(() => {
        const unsubscribe = smoothScroll.on("change", (latest) => {
            setShowPortfolio(latest >= 0.98);
        });
        return unsubscribe;
    }, [smoothScroll]);

    return { scrollProgress, smoothScroll, showPortfolio, setShowPortfolio };
};
