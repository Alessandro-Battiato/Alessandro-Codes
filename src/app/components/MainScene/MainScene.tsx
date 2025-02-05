"use client";
import React from "react";
import { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import MonitorScreen from "../MonitorScreen/MonitorScreen";
import Portfolio from "../Portfolio/Portfolio";

const MainScene = () => {
    const [isInsideMonitor, setIsInsideMonitor] = useState(false);

    const { scene: monitor } = useGLTF("/models/Monitor/Monitor.glb");
    const { scene: desk } = useGLTF("/models/Desk/scene.gltf");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsInsideMonitor(true);
            } else {
                setIsInsideMonitor(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="h-screen">
            {!isInsideMonitor ? (
                <Canvas camera={{ position: [0, 0.7, 2.5], fov: 40 }}>
                    <ambientLight />
                    <primitive
                        object={monitor}
                        scale={8}
                        position-y={-4.165}
                        position-z={-9}
                    />
                    <primitive
                        object={desk}
                        scale={0.1}
                        position-y={-8}
                        position-z={-10}
                    />
                    <MonitorScreen isInsideMonitor={isInsideMonitor}>
                        <Portfolio />
                    </MonitorScreen>
                </Canvas>
            ) : (
                <Portfolio />
            )}
        </div>
    );
};

export default MainScene;
