"use client";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "@/hooks";

import BackgroundVertexShader from "@/shaders/Background/vertex.glsl";
import BackgroundFragmentShader from "@/shaders/Background/fragment.glsl";

import * as THREE from "three";

const Background = () => {
    const { gl, scene, size } = useThree();
    const reduceMotion = useReducedMotion();

    const bgScene = useMemo(() => new THREE.Scene(), []);
    const bgCamera = useMemo(
        () => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
        []
    );

    const seedRef = useRef(Math.random());

    const shaderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
    const quadRef = useRef<THREE.Mesh | null>(null);
    const renderTargetRef = useRef<THREE.WebGLRenderTarget | null>(null);

    useEffect(() => {
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 0 },
                u_resolution: {
                    value: new THREE.Vector2(size.width, size.height),
                },
                u_reduceMotion: { value: reduceMotion ? 1.0 : 0.0 },
                u_mouse: { value: new THREE.Vector2(0, 0) },
                seed: { value: seedRef.current },
            },
            vertexShader: BackgroundVertexShader,
            fragmentShader: BackgroundFragmentShader,
            depthTest: false,
            depthWrite: false,
        });
        shaderMaterialRef.current = material;

        const geometry = new THREE.PlaneGeometry(2, 2);
        const quad = new THREE.Mesh(geometry, material);
        quad.frustumCulled = false;
        bgScene.add(quad);
        quadRef.current = quad;

        return () => {
            if (quadRef.current) {
                bgScene.remove(quadRef.current);
                quadRef.current.geometry.dispose();
            }
            material.dispose();
        };
    }, [bgScene, reduceMotion, size.height, size.width]);

    useEffect(() => {
        if (renderTargetRef.current) {
            renderTargetRef.current.dispose();
        }
        const rt = new THREE.WebGLRenderTarget(size.width, size.height, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
        });
        renderTargetRef.current = rt;
        scene.background = rt.texture;
        return () => {
            rt.dispose();
        };
    }, [size, scene]);

    useEffect(() => {
        if (shaderMaterialRef.current) {
            shaderMaterialRef.current.uniforms.u_resolution.value.set(
                size.width,
                size.height
            );
        }
    }, [size]);

    useEffect(() => {
        if (shaderMaterialRef.current) {
            shaderMaterialRef.current.uniforms.u_reduceMotion.value =
                reduceMotion ? 1.0 : 0.0;
        }
    }, [reduceMotion]);

    useEffect(() => {
        if (!reduceMotion) {
            const handleMouseMove = (event: MouseEvent) => {
                if (shaderMaterialRef.current) {
                    const y = size.height - event.clientY;
                    shaderMaterialRef.current.uniforms.u_mouse.value.set(
                        event.clientX,
                        y
                    );
                }
            };
            window.addEventListener("mousemove", handleMouseMove);
            return () =>
                window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [reduceMotion, size]);

    useFrame((_, delta) => {
        if (shaderMaterialRef.current && renderTargetRef.current) {
            shaderMaterialRef.current.uniforms.u_time.value += delta;
            gl.setRenderTarget(renderTargetRef.current);
            gl.render(bgScene, bgCamera);
            gl.setRenderTarget(null);
        }
    });

    return null;
};

export default Background;
