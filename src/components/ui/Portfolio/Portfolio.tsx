"use client";
import React, { useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import Image from "next/image";

import {
    Hero3D,
    AboutMe3D,
    ContactMe3D,
    Navbar,
    Hero,
    AboutMe,
    Projects,
    Blog,
    ContactMe,
} from "@/components/ui";

const Portfolio = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const heroRef = useRef<HTMLDivElement | null>(null);
    const aboutMeRef = useRef<HTMLDivElement | null>(null);
    const contactMeRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <header>
                <Navbar />
            </header>

            <main
                ref={containerRef}
                className="min-h-screen relative -z-10 bg-dark-space w-full"
            >
                <Canvas
                    eventSource={containerRef as React.RefObject<HTMLElement>}
                    className="!fixed z-10"
                >
                    <View track={heroRef as React.RefObject<HTMLElement>}>
                        <Hero3D />
                    </View>
                    <View track={aboutMeRef as React.RefObject<HTMLElement>}>
                        <AboutMe3D />
                    </View>
                    <View track={contactMeRef as React.RefObject<HTMLElement>}>
                        <ContactMe3D />
                    </View>
                </Canvas>

                <div className="fixed inset-0 -z-20 w-full h-full pointer-events-none">
                    <Image
                        src="/assets/background.svg"
                        alt="background image"
                        className="blur-[100px]"
                        fill
                    />
                </div>

                <Hero ref={heroRef} />

                <AboutMe ref={aboutMeRef} />

                <Projects />

                <Blog />

                <ContactMe ref={contactMeRef} />
            </main>
        </>
    );
};

export default Portfolio;
