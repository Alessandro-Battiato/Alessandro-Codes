import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Camera } from "three";
import { UseCameraControllerProps } from "./types";

const useCameraController = ({ scrollProgress }: UseCameraControllerProps) => {
    const cameraRef = useRef<Camera | null>(null);
    useFrame(({ camera }) => {
        const progress = scrollProgress.get();
        camera.position.z = 2.5 - progress * 7.5;
        camera.position.y = 0.7 - progress * 1.0;
        cameraRef.current = camera;
    });
};

export default useCameraController;
