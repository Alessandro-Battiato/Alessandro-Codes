import { useGLTF } from "@react-three/drei";

export const useGLTFModels = () => {
    const { scene: monitor } = useGLTF("/models/Monitor/Monitor.glb");
    const { scene: desk } = useGLTF("/models/Desk/scene.gltf");
    return { monitor, desk };
};
