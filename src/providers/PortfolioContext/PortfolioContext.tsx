"use client";
import React, { createContext } from "react";
import { PortfolioContextType, PortfolioProviderProps } from "./types";

export const PortfolioContext = createContext<PortfolioContextType | null>(
    null
);

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({
    showPortfolio,
    children,
}) => {
    return (
        <PortfolioContext.Provider value={{ showPortfolio }}>
            {children}
        </PortfolioContext.Provider>
    );
};
