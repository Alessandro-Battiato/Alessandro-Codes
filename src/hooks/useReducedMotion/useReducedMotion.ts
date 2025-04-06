import { useEffect, useState } from "react";

const useReducedMotion = () => {
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );
        setReduceMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return reduceMotion;
};

export default useReducedMotion;
