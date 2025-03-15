import React from "react";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("../components/Portfolio/Portfolio"), {
    ssr: false,
});

export default function PortfolioHome() {
    return <Portfolio />;
}
