import { useState, useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const useScrollProgress = () => {
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
            const threshold =
                typeof window !== "undefined" && window.innerWidth < 768
                    ? 0.5
                    : 0.98;
            if (latest > previous) {
                if (latest >= threshold) {
                    setShowPortfolio(true);
                }
            }
            lastValue.current = latest;
        });
        return unsubscribe;
    }, [smoothScroll]);

    return { scrollProgress, smoothScroll, showPortfolio, setShowPortfolio };
};

export default useScrollProgress;
