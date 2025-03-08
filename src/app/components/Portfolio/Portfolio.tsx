import React, { useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import Image from "next/image";

import Hero3D from "../Hero3D/Hero3D";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Portfolio = () => {
    const container = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    return (
        <main
            ref={container}
            className="min-h-screen relative -z-10 bg-dark-space w-full"
        >
            <Navbar />

            <Canvas
                eventSource={container.current || undefined}
                className="!fixed z-10"
            >
                <View track={heroRef as React.RefObject<HTMLElement>}>
                    <Hero3D />
                </View>
            </Canvas>

            <Hero ref={heroRef} />

            <div className="h-48">scroll test</div>

            <div className="fixed inset-0 -z-20 w-full h-full">
                <Image
                    src="/assets/background.svg"
                    alt="background image"
                    className="blur-[100px] pointer-events-none"
                    fill
                />
            </div>
        </main>
    );
};

export default Portfolio;
