import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import BackgroundVertexShader from "../../shaders/Background/vertex.glsl";
import BackgroundFragmentShader from "../../shaders/Background/fragment.glsl";
import * as THREE from "three";

const Background = () => {
    const { gl, scene, size } = useThree();

    const bgScene = useMemo(() => new THREE.Scene(), []);

    const bgCamera = useMemo(
        () => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
        []
    );

    const shaderMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 0 },
                u_resolution: {
                    value: new THREE.Vector2(size.width, size.height),
                },
                u_mouse: { value: new THREE.Vector2(0, 0) },
                seed: { value: Math.random() },
            },
            vertexShader: BackgroundVertexShader,
            fragmentShader: BackgroundFragmentShader,
            depthTest: false,
            depthWrite: false,
        });
    }, [size]);

    useMemo(() => {
        const geometry = new THREE.PlaneGeometry(2, 2);
        const quad = new THREE.Mesh(geometry, shaderMaterial);
        quad.frustumCulled = false;
        bgScene.add(quad);
    }, [bgScene, shaderMaterial]);

    const renderTarget = useMemo(() => {
        return new THREE.WebGLRenderTarget(size.width, size.height, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
        });
    }, [size]);

    useEffect(() => {
        scene.background = renderTarget.texture;
    }, [scene, renderTarget]);

    useEffect(() => {
        shaderMaterial.uniforms.u_resolution.value.set(size.width, size.height);
    }, [size, shaderMaterial]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const y = size.height - event.clientY;
            shaderMaterial.uniforms.u_mouse.value.set(event.clientX, y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [shaderMaterial, size.height]);

    useFrame((_, delta) => {
        shaderMaterial.uniforms.u_time.value += delta;
        gl.setRenderTarget(renderTarget);
        gl.render(bgScene, bgCamera);
        gl.setRenderTarget(null);
    });

    return null;
};

export default Background;
