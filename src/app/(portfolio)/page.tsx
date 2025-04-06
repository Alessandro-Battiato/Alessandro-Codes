import React from "react";
import dynamic from "next/dynamic";

const Portfolio = dynamic(
    () => import("@/components/ui/index").then((mod) => mod.Portfolio),
    {
        ssr: false,
    }
);

export default function PortfolioHome() {
    return <Portfolio />;
}
