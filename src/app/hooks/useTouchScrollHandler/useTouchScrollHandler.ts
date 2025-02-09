import { useEffect } from "react";
import { UseTouchScrollHandlerProps } from "./types";

export const useTouchScrollHandler = ({
    containerRef,
    scrollProgress,
}: UseTouchScrollHandlerProps) => {
    useEffect(() => {
        const container = containerRef?.current;
        if (!container) return;

        let touchStartY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            const deltaY = touchStartY - e.touches[0].clientY;
            touchStartY = e.touches[0].clientY;

            const newProgress = scrollProgress.get() + deltaY / 500;
            scrollProgress.set(Math.max(0, Math.min(1, newProgress)));
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
    }, [scrollProgress, containerRef]);
};
