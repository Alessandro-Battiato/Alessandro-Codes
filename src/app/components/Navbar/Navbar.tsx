"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);

    const handleWheel = useCallback(() => {
        setIsScrolling(true);
    }, []);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isScrolling) {
            timeout = setTimeout(() => {
                setIsScrolling(false);
            }, 1500);
        }
        return () => clearTimeout(timeout);
    }, [isScrolling]);

    useEffect(() => {
        const handleWheelEvent = () => {
            handleWheel();
        };

        window.addEventListener("wheel", handleWheelEvent);

        return () => {
            window.removeEventListener("wheel", handleWheelEvent);
        };
    }, [handleWheel]);

    return (
        <nav className="fixed top-0 left-0 w-full z-30">
            <div className="relative h-24">
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-transparent" />
                <div
                    className={`absolute inset-0 bg-gradient-to-b from-black/75 to-black/25 transition-opacity duration-500 ${
                        isScrolling ? "opacity-100" : "opacity-0"
                    }`}
                />

                <div className="relative flex h-full">
                    <div className="flex-1 flex items-center justify-center">
                        <Link href="/">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </div>

                    <div className="flex-[2] flex justify-center items-center gap-8">
                        <Link
                            href="/"
                            className="text-white hover:text-gray-300 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-white hover:text-gray-300 font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            className="text-white hover:text-gray-300 font-medium"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blog"
                            className="text-white hover:text-gray-300 font-medium"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white hover:text-gray-300 font-medium"
                        >
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
