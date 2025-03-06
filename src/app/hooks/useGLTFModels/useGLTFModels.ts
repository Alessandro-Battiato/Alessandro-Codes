import { useGLTF } from "@react-three/drei";

export const useGLTFModels = () => {
    const { scene: monitor } = useGLTF("/models/Monitor/Monitor.glb");
    const { scene: desk } = useGLTF("/models/Desk/scene.gltf");
    const {
        scene: astronaut,
        animations,
        nodes,
    } = useGLTF("/models/Astronaut/MergedModels.glb");

    return {
        monitor,
        desk,
        astronautObj: { astronaut, animations, nodes },
    };
};

useGLTF.preload("/models/Monitor/Monitor.glb");
useGLTF.preload("/models/Desk/scene.gltf");
useGLTF.preload("/models/Astronaut/MergedModels.glb");
