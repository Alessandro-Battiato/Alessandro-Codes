import React from "react";

import { MainScene } from "@/components/ui";

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainScene>{children}</MainScene>;
}
