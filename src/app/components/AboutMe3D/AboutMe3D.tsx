import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import * as THREE from "three";

import vertexShader from "../../shaders/AboutMe/vertex.glsl";
import fragmentShader from "../../shaders/AboutMe/fragment.glsl";

import { HoverShiftMaterialProps } from "./types";
import { useReducedMotion } from "@/app/hooks";

const HoverShiftMaterial = shaderMaterial(
    {
        uTexture: null,
        uDispTexture: null,
        uMousePosition: [0, 0],
        uPushForce: 0,
        uOverlayFactor: 0,
    },
    vertexShader,
    fragmentShader
);

extend({ HoverShiftMaterial });

const AboutMe3D = () => {
    const materialRef = useRef<HoverShiftMaterialProps | null>(null);
    const [hovered, setHovered] = useState(false);
    const { pointer, clock } = useThree();
    const hoverStartRef = useRef(0);

    const shouldReduceMotion = useReducedMotion();

    const defaultTexture = useLoader(
        THREE.TextureLoader,
        "/assets/defaultAboutMe.png"
    );
    defaultTexture.colorSpace = THREE.SRGBColorSpace;

    const hoveredTexture = useLoader(
        THREE.TextureLoader,
        "/assets/hoveredAboutMe.png"
    );
    hoveredTexture.colorSpace = THREE.SRGBColorSpace;

    const dispTexture = useLoader(
        THREE.TextureLoader,
        "/assets/crackedIceTexture.jpg"
    );

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uTexture = hovered
                ? hoveredTexture
                : defaultTexture;
        }
    }, [hovered, defaultTexture, hoveredTexture]);

    const handlePointerOver = () => {
        hoverStartRef.current = clock.getElapsedTime();
        setHovered(true);
    };

    const handlePointerOut = () => {
        setHovered(false);
    };

    useFrame(() => {
        if (!materialRef.current) return;

        if (shouldReduceMotion) {
            materialRef.current.uMousePosition = [0, 0];
            materialRef.current.uPushForce = 0;
            materialRef.current.uOverlayFactor = 0;
            return;
        }

        if (hovered) {
            materialRef.current.uMousePosition = [
                THREE.MathUtils.lerp(
                    materialRef.current.uMousePosition[0],
                    pointer.x,
                    0.05
                ),
                THREE.MathUtils.lerp(
                    materialRef.current.uMousePosition[1],
                    pointer.y,
                    0.05
                ),
            ];
            materialRef.current.uPushForce = THREE.MathUtils.lerp(
                materialRef.current.uPushForce,
                1.4,
                0.05
            );
        } else {
            materialRef.current.uMousePosition = [0, 0];
            materialRef.current.uPushForce = 0;
        }

        if (hovered) {
            const timeSinceHover =
                clock.getElapsedTime() - hoverStartRef.current;

            let overlayFactor = 0.0;
            if (timeSinceHover < 1.0) {
                overlayFactor = 1.0;
            } else if (timeSinceHover < 2.0) {
                overlayFactor = 1.0 - (timeSinceHover - 1.0);
            } else {
                overlayFactor = 0.0;
            }
            materialRef.current.uOverlayFactor = overlayFactor;
        } else {
            materialRef.current.uOverlayFactor = 0;
        }
    });

    return (
        <mesh
            scale={[2, 2, 2]}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            <circleGeometry args={[1.6, 64]} />
            <hoverShiftMaterial
                ref={materialRef}
                uTexture={defaultTexture}
                uDispTexture={dispTexture}
            />
        </mesh>
    );
};

export default AboutMe3D;
