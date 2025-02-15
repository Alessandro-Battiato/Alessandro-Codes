import React from "react";

const Portfolio = ({ isInsideMonitor }: { isInsideMonitor: boolean }) => {
    return (
        <div
            className={`${
                isInsideMonitor
                    ? "h-full w-full"
                    : "h-[125px] w-52 rounded-tr rounded-tl"
            }`}
        >
            Portfolio
        </div>
    );
};

export default Portfolio;
