import { useCallback } from "react";
import { UseMouseScrollHandlerProps } from "./types";

export const useMouseScrollHandler = ({
    scrollProgress,
    showPortfolio,
}: UseMouseScrollHandlerProps) => {
    const handleContainerWheel = useCallback(
        (e: { deltaY: number }) => {
            if (showPortfolio) return;

            const newProgress = scrollProgress.get() + e.deltaY / 500;
            scrollProgress.set(Math.max(0, Math.min(1, newProgress)));
        },
        [scrollProgress, showPortfolio]
    );
    return handleContainerWheel;
};
