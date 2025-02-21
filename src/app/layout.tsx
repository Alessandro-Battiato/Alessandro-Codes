import "./globals.css";
import MainScene from "./components/MainScene/MainScene";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
    title: "AlessandroCodes",
    description: "My 3D portfolio showcasing some of my best projects.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <MainScene />
                {children}
            </body>
        </html>
    );
}
