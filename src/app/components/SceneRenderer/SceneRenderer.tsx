import { Canvas } from "@react-three/fiber";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useGLTFModels } from "@/app/hooks";
import { useCameraController } from "@/app/hooks";
import { SceneRendererProps } from "./types";
import Background from "../Background/Background";
import ScrollHint from "../ScrollHint/ScrollHint";
import { Html } from "@react-three/drei";

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
        <>
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
                    <Background />
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
                    <Html
                        transform
                        occlude
                        rotation-x={-0.175}
                        position={[0, -1.525, -9.85]}
                    >
                        {/*
                            TO DO: You will NOT be rendering the real portfolio component here anymore, instead,
                            you're going to use an iframe tag and use a short recording on infinite loop that shows your
                            hero section with the animated model, ideally lasting as long as the astronaut's animation does,
                            this way you avoid rendering the same component with all the models and canvases twice.
                        */}
                    </Html>
                </Canvas>
            </motion.div>
            <ScrollHint />
        </>
    );
};

export default SceneRenderer;
