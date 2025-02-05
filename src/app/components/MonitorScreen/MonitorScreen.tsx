"use client";
import { useFBO } from "@react-three/drei";
import { useFrame, createPortal } from "@react-three/fiber";
import { useRef } from "react";
import { MonitorScreenProps } from "./types";

const MonitorScreen = ({ children, isInsideMonitor }: MonitorScreenProps) => {
    const fbo = useFBO(1024, 1024);
    const virtualScene = useRef(null);
    const camera = useRef(null);

    useFrame((state) => {
        if (virtualScene.current && camera.current) {
            state.gl.setRenderTarget(fbo);
            state.gl.render(virtualScene.current, camera.current);
            state.gl.setRenderTarget(null);
        }
    });

    if (!virtualScene.current) {
        return (
            <>
                <mesh position={[0, 1, 0]}>
                    <planeGeometry args={[1.5, 1]} />
                    <meshBasicMaterial map={fbo.texture} />
                </mesh>
            </>
        );
    }

    return (
        <>
            {createPortal(
                <scene ref={virtualScene}>
                    <perspectiveCamera ref={camera} position={[0, 0, 5]} />
                    <group
                    // style={{
                    //     pointerEvents: isInsideMonitor ? "auto" : "none",
                    // }}
                    >
                        {children}
                    </group>
                </scene>,
                virtualScene.current || document.body
            )}

            <mesh position={[0, 1, 0]}>
                <planeGeometry args={[1.5, 1]} />
                <meshBasicMaterial map={fbo.texture} />
            </mesh>
        </>
    );
};

export default MonitorScreen;
