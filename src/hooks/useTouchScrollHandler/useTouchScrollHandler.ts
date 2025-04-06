import { useCallback, useRef } from "react";
import { UseTouchScrollHandlerProps } from "./types";

const useTouchScrollHandler = ({
    scrollProgress,
    showPortfolio,
}: UseTouchScrollHandlerProps) => {
    const touchStartYRef = useRef<number>(0);

    const handleTouchStart = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            touchStartYRef.current = e.touches[0].clientY;
        },
        []
    );

    const handleTouchMove = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            if (showPortfolio) return;
            const currentY = e.touches[0].clientY;
            const deltaY = touchStartYRef.current - currentY;
            touchStartYRef.current = currentY;

            const newProgress = scrollProgress.get() + deltaY / 500;
            scrollProgress.set(Math.max(0, Math.min(1, newProgress)));
        },
        [scrollProgress, showPortfolio]
    );

    return { handleTouchStart, handleTouchMove };
};

export default useTouchScrollHandler;
