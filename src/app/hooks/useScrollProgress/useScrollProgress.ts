import { useState, useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export const useScrollProgress = () => {
    const scrollProgress = useMotionValue(0);
    const smoothScroll = useSpring(scrollProgress, {
        stiffness: 100,
        damping: 20,
    });
    const [showPortfolio, setShowPortfolio] = useState(false);
    const lastValue = useRef(0);

    useEffect(() => {
        const unsubscribe = smoothScroll.on("change", (latest) => {
            const previous = lastValue.current;
            if (latest > previous) {
                if (latest >= 0.98) {
                    setShowPortfolio(true);
                } else {
                    setShowPortfolio(false);
                }
            } else {
                if (latest < 0.98) {
                    setShowPortfolio(false);
                }
            }
            lastValue.current = latest;
        });
        return unsubscribe;
    }, [smoothScroll]);

    return { scrollProgress, smoothScroll, showPortfolio, setShowPortfolio };
};
