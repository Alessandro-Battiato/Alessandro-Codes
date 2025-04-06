"use client";
import React, { useState } from "react";

const stars = [
    {
        className: "star-1",
        initialTop: "15%",
        initialLeft: "15%",
        hoverTop: "-50%",
        hoverLeft: "-15%",
        width: "20px",
    },
    {
        className: "star-2",
        initialTop: "40%",
        initialLeft: "40%",
        hoverTop: "-20%",
        hoverLeft: "10%",
        width: "12px",
    },
    {
        className: "star-3",
        initialTop: "35%",
        initialLeft: "35%",
        hoverTop: "50%",
        hoverLeft: "20%",
        width: "8px",
    },
    {
        className: "star-4",
        initialTop: "20%",
        initialLeft: "35%",
        hoverTop: "25%",
        hoverLeft: "70%",
        width: "10px",
    },
    {
        className: "star-5",
        initialTop: "30%",
        initialLeft: "45%",
        hoverTop: "30%",
        hoverLeft: "100%",
        width: "12px",
    },
    {
        className: "star-6",
        initialTop: "5%",
        initialLeft: "50%",
        hoverTop: "5%",
        hoverLeft: "55%",
        width: "7px",
    },
];

const DownloadButton: React.FC = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="/assets/AlessandroBattiatoResume.pdf"
            download
            className="
                relative 
                flex items-center 
                border border-electric-pink rounded-md
                bg-electric-pink 
                text-white 
                max-w-fit
                px-3 py-2
                lg:px-6 lg:py-3 
                mt-8   
                transition-all duration-500
                hover:bg-transparent 
                hover:text-electric-pink 
                hover:outline-2 hover:outline-electric-pink 
                hover:shadow-[0_0_10px_#ff1493]
            "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            Download Resume
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16a4 4 0 004 4h8a4 4 0 004-4M7 10l5 5m0 0l5-5m-5 5V4"
                />
            </svg>
            {stars.map((star, index) => (
                <div
                    key={index}
                    className={`absolute transition-all duration-400 ${star.className}`}
                    style={{
                        width: star.width,
                        top: hover ? star.hoverTop : star.initialTop,
                        left: hover ? star.hoverLeft : star.initialLeft,
                        position: "absolute",
                        opacity: hover ? 1 : 0,
                        filter: hover
                            ? "drop-shadow(0 0 10px #fffdef)"
                            : "drop-shadow(0 0 0 #fffdef)",
                        transition:
                            "top 0.4s ease, left 0.4s ease, filter 0.4s ease, opacity 0.4s ease",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 784.11 815.53"
                        className="w-full h-auto"
                    >
                        <path
                            fill="#fffdef"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
                             207.96,29.37 371.12,197.68 392.05,407.74 
                             20.93,-210.06 184.09,-378.37 392.05,-407.74 
                             -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        />
                    </svg>
                </div>
            ))}
        </a>
    );
};

export default DownloadButton;
