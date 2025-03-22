"use client";
import React, { useCallback, useEffect, useId, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);

    const id = useId();

    const handleWheel = useCallback(() => {
        setIsScrolling(true);
    }, []);

    const navItems = useMemo(
        () => [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact me" },
        ],
        []
    );

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

                    <div className="flex-[2] flex justify-center items-center">
                        <ul
                            onMouseLeave={() => setHoveredNavItem(null)}
                            className="flex gap-8"
                        >
                            {navItems.map((item, index) => (
                                <li
                                    key={item.href}
                                    className="relative font-medium text-white"
                                    style={{
                                        zIndex:
                                            hoveredNavItem === index ? 1 : 2,
                                    }}
                                >
                                    {hoveredNavItem === index && (
                                        <motion.div
                                            layoutId={id}
                                            className="absolute inset-0 -z-10 bg-gradient-to-r bg-[#1E2A47]"
                                            initial={{ borderRadius: 8 }}
                                        />
                                    )}
                                    <Link
                                        onMouseEnter={() =>
                                            setHoveredNavItem(index)
                                        }
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
