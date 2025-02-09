import { Canvas } from "@react-three/fiber";
import { motion, MotionValue, useTransform } from "framer-motion";
import MonitorScreen from "../MonitorScreen/MonitorScreen";
import Portfolio from "../Portfolio/Portfolio";
import { useGLTFModels } from "@/app/hooks";
import { useCameraController } from "@/app/hooks";
import { SceneRendererProps } from "./types";

const CameraController = ({
    scrollProgress,
}: {
    scrollProgress: MotionValue<number>;
}) => {
    useCameraController({ scrollProgress });
    return null;
};

const SceneRenderer = ({ smoothScroll }: SceneRendererProps) => {
    const sceneOpacity = useTransform(smoothScroll, [0.8, 1], [1, 0]);
    const { monitor, desk } = useGLTFModels();

    return (
        <motion.div
            style={{
                opacity: sceneOpacity,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
        >
            <Canvas camera={{ position: [0, 0.7, 2.5], fov: 40 }}>
                <ambientLight />
                <CameraController scrollProgress={smoothScroll} />
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
                <MonitorScreen isInsideMonitor={false}>
                    <Portfolio isInsideMonitor={false} />
                </MonitorScreen>
            </Canvas>
        </motion.div>
    );
};

export default SceneRenderer;
