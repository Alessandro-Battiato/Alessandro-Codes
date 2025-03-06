import React, { useRef } from "react";
import Hero from "../Hero/Hero";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import Hero3D from "../Hero3D/Hero3D";
import Image from "next/image";

const Portfolio = () => {
    const container = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    return (
        <main ref={container} className="min-h-screen w-full overflow-visible">
            <Canvas
                eventSource={container.current || undefined}
                className="!fixed z-10"
            >
                <View track={heroRef as React.RefObject<HTMLElement>}>
                    <Hero3D />
                </View>
            </Canvas>

            <Hero ref={heroRef} />
            <Image
                src="/assets/background.svg"
                alt="background image"
                className="fixed top-0 left-0 blur-[100px] pointer-events-none"
                fill
            />
        </main>
    );
};

export default Portfolio;
