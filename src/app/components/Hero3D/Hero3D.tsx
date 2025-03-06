import React, { useEffect } from "react";
import { Float, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { useGLTFModels } from "@/app/hooks";

export default function Hero3D() {
    const {
        astronautObj: { astronaut, animations },
    } = useGLTFModels();

    animations.forEach((clip) => {
        clip.name = clip.name.replace("Armature|mixamo.com|", "");
    });

    const { actions } = useAnimations(animations, astronaut);

    useEffect(() => {
        if (!actions) return;
        Object.values(actions).forEach((action) => action?.play());
    }, [actions]);

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <Float speed={2.25} rotationIntensity={0.75} floatIntensity={2.5}>
                <ambientLight intensity={1} />
                <primitive
                    object={astronaut}
                    position={[-2, -4, -5]}
                    rotation={[0, Math.PI * 1.3, 0]}
                />
            </Float>
        </>
    );
}
