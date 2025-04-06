"use client";
import React, { useCallback, useEffect, useId, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const id = useId();

    const shouldReduceMotion = useReducedMotion();

    const handleWheel = useCallback(() => {
        setIsScrolling(true);
    }, []);

    const navItems = useMemo(
        () => [
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#blog", label: "Blog" },
            { href: "#contact", label: "Contact me" },
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
            <div className="relative h-16 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-transparent" />
                <div
                    className={`absolute inset-0 bg-gradient-to-b from-black/75 to-black/25 transition-opacity duration-500 ${
                        isScrolling ? "opacity-100" : "opacity-0"
                    }`}
                />
                <div className="relative flex h-full">
                    <div className="flex-1 flex items-center justify-start md:justify-center">
                        <Link href="/">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={75}
                                height={75}
                                className="md:w-[100px] md:h-[100px]"
                            />
                        </Link>
                    </div>
                    <div className="flex-[2] hidden md:flex justify-center items-center">
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
                                    {!shouldReduceMotion &&
                                        hoveredNavItem === index && (
                                            <motion.div
                                                layoutId={id}
                                                className="absolute inset-0 -z-10 bg-[#1E2A47]"
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
                    <div className="flex-1 md:hidden flex items-center justify-end pr-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="text-white"
                        >
                            <Menu size={32} />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={shouldReduceMotion ? { x: 0 } : { x: "100%" }}
                        animate={shouldReduceMotion ? { x: 0 } : { x: 0 }}
                        exit={shouldReduceMotion ? { x: 0 } : { x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 w-full h-full bg-dark-space z-40"
                    >
                        <div className="p-4 flex justify-end">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white"
                            >
                                <X size={32} />
                            </button>
                        </div>
                        <ul className="mt-8 flex flex-col gap-6 px-6">
                            {navItems.map((item) => (
                                <li
                                    key={item.href}
                                    className="text-white text-lg"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
