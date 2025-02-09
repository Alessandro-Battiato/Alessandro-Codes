import { MotionValue } from "framer-motion";

export interface UseMouseScrollHandlerProps {
    scrollProgress: MotionValue<number>;
    showPortfolio: boolean;
    setShowPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}
