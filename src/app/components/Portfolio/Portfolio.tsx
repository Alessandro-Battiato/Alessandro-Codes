import React from "react";

const Portfolio = ({ isInsideMonitor }: { isInsideMonitor: boolean }) => {
    return (
        <div
            className={`bg-red-500 rounded-tr rounded-tl ${
                isInsideMonitor ? "h-full w-full" : "h-[125px] w-52"
            }`}
        >
            Portfolio
        </div>
    );
};

export default Portfolio;
