import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "./types";
import { Lens } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({
    imgUrl,
    title,
    subtitle,
    href,
    cta,
}: ProjectCardProps) => {
    return (
        <div className="flex flex-col items-start max-w-[500px]">
            <Lens>
                <div className="relative w-[325px] sm:w-[500px] h-[240px] rounded-lg overflow-hidden">
                    <Image
                        src={imgUrl}
                        alt="project preview"
                        fill
                        sizes="(max-width: 639px) 325px, 500px"
                        className="object-cover"
                    />
                </div>
            </Lens>
            <h3 className="mt-6 mb-2 text-gray-100 text-xl lg:text-2xl font-bold leading-relaxed">
                {title}
            </h3>
            <p className="mb-3 text-gray-300 text-sm lg:text-base leading-relaxed">
                {subtitle}
            </p>
            <Link
                href={href}
                className="relative text-sm lg:text-base group uppercase font-semibold text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
            >
                {cta}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </div>
    );
};

export default ProjectCard;
