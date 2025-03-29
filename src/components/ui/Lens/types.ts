export interface LensProps {
    children: React.ReactNode;
    zoomFactor?: number;
    lensSize?: number;
    position?: {
        x: number;
        y: number;
    };
    isStatic?: boolean;
    isFocusing?: () => void;
    hovering?: boolean;
    setHovering?: (hovering: boolean) => void;
}
