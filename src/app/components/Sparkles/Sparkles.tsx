import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesProps, SparkleProps } from "./types";

const generateSparkle = (color: string) => {
    const random = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
    return {
        id: String(random(10000, 99999)) + "-" + Date.now(),
        createdAt: Date.now(),
        color,
        size: random(10, 20),
        style: {
            top: `${random(0, 65)}%`,
            left: `${random(0, 85)}%`,
        },
    };
};

const Sparkles = ({ color = "#FFC700", children }: SparklesProps) => {
    const [sparkles, setSparkles] = useState(() => {
        return Array.from({ length: 3 }).map(() => generateSparkle(color));
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const sparkle = generateSparkle(color);
            const now = Date.now();

            setSparkles((prevSparkles) => {
                const nextSparkles = prevSparkles.filter(
                    (sp) => now - sp.createdAt < 1500
                );
                nextSparkles.push(sparkle);
                return nextSparkles;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [color]);

    return (
        <span className="relative">
            {sparkles.map((sparkle) => (
                <Sparkle
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
            <span className="relative z-10">{children}</span>
        </span>
    );
};

const Sparkle = ({ size, color, style }: SparkleProps) => {
    const path =
        "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

    return (
        <motion.span
            className="absolute"
            style={style}
            animate={{
                scale: [0, 1, 0],
                opacity: [1, 0],
            }}
            transition={{
                duration: 2,
                ease: "easeOut",
                loop: Infinity,
            }}
        >
            <svg width={size} height={size} viewBox="0 0 68 68" fill="none">
                <path d={path} fill={color} />
            </svg>
        </motion.span>
    );
};

export default Sparkles;
