import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BackButton = () => (
    <Link
        href="/"
        className="
            fixed top-4 left-4 z-50
            flex items-center space-x-2
            bg-electric-blue hover:bg-electric-pink
            text-white px-3 py-2 rounded-full
            shadow-lg transition-all
        "
    >
        <ArrowLeft className="w-5 h-5" />
    </Link>
);

export default BackButton;
