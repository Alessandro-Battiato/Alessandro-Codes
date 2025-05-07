import React from "react";

import { Footer, MainScene } from "@/components/ui";

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MainScene>
            <>{children}</>
            <Footer />
        </MainScene>
    );
}
