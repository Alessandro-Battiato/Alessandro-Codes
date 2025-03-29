import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import {
    useTexture,
    Sphere,
    Sparkles,
    shaderMaterial,
} from "@react-three/drei";

import * as THREE from "three";

import earthVertexShader from "@/app/shaders/ContactMe/Earth/vertex.glsl";
import earthFragmentShader from "@/app/shaders/ContactMe/Earth/fragment.glsl";
import AtmosphereVertexShader from "@/app/shaders/ContactMe/Atmosphere/vertex.glsl";
import AtmosphereFragmentShader from "@/app/shaders/ContactMe/Atmosphere/fragment.glsl";

const EarthMaterial = shaderMaterial(
    {
        uDayTexture: null,
        uNightTexture: null,
        uSpecularCloudsTexture: null,
        uSunDirection: new THREE.Vector3(0, 0, 1),
        uAtmosphereDayColor: new THREE.Color("#00aaff"),
        uAtmosphereTwilightColor: new THREE.Color("#ff6600"),
    },
    earthVertexShader,
    earthFragmentShader
);

const AtmosphereMaterial = shaderMaterial(
    {
        uSunDirection: new THREE.Vector3(0, 0, 1),
        uAtmosphereDayColor: new THREE.Color("#00aaff"),
        uAtmosphereTwilightColor: new THREE.Color("#ff6600"),
    },
    AtmosphereVertexShader,
    AtmosphereFragmentShader
);

extend({ EarthMaterial, AtmosphereMaterial });

function Earth() {
    const ref = useRef<THREE.Mesh>(null);
    const dayTexture = useTexture("/assets/day.jpg");
    const nightTexture = useTexture("/assets/night.jpg");
    const specularCloudsTexture = useTexture("/assets/specularClouds.jpg");

    useFrame(({ clock }) => {
        if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.1;
    });

    return (
        <Sphere args={[2, 64, 64]} ref={ref}>
            <earthMaterial
                uDayTexture={dayTexture}
                uNightTexture={nightTexture}
                uSpecularCloudsTexture={specularCloudsTexture}
            />
        </Sphere>
    );
}

function Atmosphere() {
    return (
        <Sphere args={[2.08, 64, 64]}>
            <atmosphereMaterial transparent side={THREE.BackSide} />
        </Sphere>
    );
}

function SunLight() {
    const ref = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        const angle = elapsedTime * 0.1; // Opposite to the Earth's
        const radius = 5;

        // Positions
        const y = radius * 0.5;

        if (ref.current) {
            // Light position settings
            ref.current.position.set(
                Math.cos(angle) * radius,
                y,
                Math.sin(angle) * radius
            );

            if (ref.current.parent) {
                // Updates all uSunDirections
                const sunDir = ref.current.position.clone().normalize();
                ref.current.parent.traverse((child) => {
                    const mesh = child as THREE.Mesh;
                    if (mesh.material) {
                        const materials = Array.isArray(mesh.material)
                            ? mesh.material
                            : [mesh.material];

                        materials.forEach((material) => {
                            if (
                                (material as THREE.ShaderMaterial).uniforms
                                    ?.uSunDirection
                            ) {
                                (
                                    material as THREE.ShaderMaterial
                                ).uniforms.uSunDirection.value.copy(sunDir);
                            }
                        });
                    }
                });
            }
        }
    });

    return <group ref={ref} />;
}

export default function ContactMe3D() {
    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <SunLight />
            <Sparkles count={50} scale={5.5} size={3} speed={0.5} />
            <Earth />
            <Atmosphere />
        </>
    );
}
