"use client";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import MonitorScreen from "../MonitorScreen/MonitorScreen";

const MainScene = () => {
    const [isInsideMonitor, setIsInsideMonitor] = useState(false);

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
        <>
            {!isInsideMonitor ? (
                <Canvas>
                    <ambientLight />
                    {/*
                        <Monitor />
                        <Table />
                    */}
                    <MonitorScreen isInsideMonitor={isInsideMonitor}>
                        <mesh />
                        {/* <PortfolioContainer /> */}
                    </MonitorScreen>
                </Canvas>
            ) : (
                <div>{/* <PortfolioContainer /> */}</div>
            )}
        </>
    );
};

export default MainScene;
