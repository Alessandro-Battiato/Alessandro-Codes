import { Canvas } from "@react-three/fiber";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useGLTFModels, useWindowSize } from "@/app/hooks";
import { useCameraController } from "@/app/hooks";
import { SceneRendererProps } from "./types";
import Background from "../Background/Background";
import ScrollHint from "../ScrollHint/ScrollHint";
import { Html } from "@react-three/drei";
import { useCallback, useEffect, useState } from "react";

const CameraController = ({
    scrollProgress,
}: {
    scrollProgress: MotionValue<number>;
}) => {
    useCameraController({ scrollProgress });
    return null;
};

const SceneRenderer = ({ smoothScroll, onSceneReady }: SceneRendererProps) => {
    const sceneOpacity = useTransform(smoothScroll, [0.8, 1], [1, 0]);
    const [opacity, setOpacity] = useState(1);
    const [scaleFactor, setScaleFactor] = useState(1);

    const { width } = useWindowSize();

    const handleResize = useCallback(() => {
        if (width < 768) {
            setScaleFactor(0.55);
        } else {
            setScaleFactor(1);
        }
    }, [width]);

    useEffect(() => {
        if (sceneOpacity.get() < 0.1) {
            setOpacity(0);
        } else {
            setOpacity(sceneOpacity.get());
        }
    }, [sceneOpacity]);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize, width]);

    const { monitor, desk } = useGLTFModels();

    return (
        <>
            <motion.div
                style={{
                    opacity,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Canvas
                    onCreated={() => onSceneReady()}
                    camera={{ position: [0, 0.7, 2.5], fov: 40 }}
                >
                    <ambientLight />
                    <Background />
                    <CameraController scrollProgress={smoothScroll} />
                    <primitive
                        object={monitor}
                        scale={8 * scaleFactor}
                        position-y={-4.165 * scaleFactor}
                        position-z={-9 * scaleFactor}
                    />
                    <primitive
                        object={desk}
                        scale={0.1 * scaleFactor}
                        position-y={-8 * scaleFactor}
                        position-z={-10 * scaleFactor}
                    />
                    <Html
                        transform
                        rotation-x={-0.175}
                        position={[
                            0,
                            -1.625 * scaleFactor,
                            -9.85 * scaleFactor,
                        ]}
                    >
                        <div style={{ transform: `scale(${scaleFactor})` }}>
                            <video
                                className="w-52"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source
                                    src="/assets/heroSection.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </Html>
                </Canvas>
            </motion.div>
            <ScrollHint />
        </>
    );
};

export default SceneRenderer;
