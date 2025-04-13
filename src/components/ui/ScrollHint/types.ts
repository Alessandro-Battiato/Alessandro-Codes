export interface ScrollHintProps {
    isSceneReady: boolean;
    variant?: "bottom" | "top";
    onShown?: () => void;
}
