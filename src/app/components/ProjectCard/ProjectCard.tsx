import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ProjectCardProps } from "./types";

const ProjectCard = ({
    imgUrl,
    title,
    subtitle,
    href,
    cta,
}: ProjectCardProps) => {
    return (
        <div className="flex flex-col items-start">
            <Image
                src={imgUrl}
                className="rounded-lg"
                alt="project preview image"
                width={500}
                height={300}
            />
            <h3 className="mt-6 mb-2 text-gray-100 text-2xl font-bold leading-relaxed">
                {title}
            </h3>
            <p className="mb-3 text-gray-300 text-base leading-relaxed">
                {subtitle}
            </p>
            <Link
                href={href}
                className="relative group uppercase font-semibold text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
            >
                {cta}
                <span className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </div>
    );
};

export default ProjectCard;
