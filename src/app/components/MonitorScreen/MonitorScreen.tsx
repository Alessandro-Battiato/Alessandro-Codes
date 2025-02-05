"use client";
import { Html } from "@react-three/drei";
import { MonitorScreenProps } from "./types";

const MonitorScreen = ({ isInsideMonitor, children }: MonitorScreenProps) => {
    return (
        <Html
            transform
            occlude
            rotation-x={-0.175}
            position={[0, -1.525, -9.85]}
            style={{
                pointerEvents: isInsideMonitor ? "auto" : "none",
            }}
        >
            {children}
        </Html>
    );
};

export default MonitorScreen;
