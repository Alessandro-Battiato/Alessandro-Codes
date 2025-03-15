import React from "react";

import MainScene from "@/app/components/MainScene/MainScene";

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainScene>{children}</MainScene>;
}
