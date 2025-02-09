import { MotionValue } from "framer-motion";
import { RefObject } from "react";

export interface UseTouchScrollHandlerProps {
    containerRef: RefObject<HTMLDivElement | null>;
    scrollProgress: MotionValue<number>;
}
