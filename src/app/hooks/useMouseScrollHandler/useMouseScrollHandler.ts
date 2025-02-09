import { UseMouseScrollHandlerProps } from "./types";

export const useMouseScrollHandler = ({
    scrollProgress,
    showPortfolio,
    setShowPortfolio,
}: UseMouseScrollHandlerProps) => {
    const handleContainerWheel = (e: { deltaY: number }) => {
        if (!showPortfolio) {
            const newProgress = scrollProgress.get() + e.deltaY / 500;
            scrollProgress.set(Math.max(0, Math.min(1, newProgress)));
        } else {
            if (e.deltaY < 0) {
                const newProgress = scrollProgress.get() + e.deltaY / 500;
                scrollProgress.set(Math.max(0, Math.min(1, newProgress)));
                if (newProgress <= 0.98) {
                    setShowPortfolio(false);
                }
            }
        }
    };
    return handleContainerWheel;
};
