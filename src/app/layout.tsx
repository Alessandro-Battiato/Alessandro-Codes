import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
    title: "AlessandroCodes",
    description: "My 3D portfolio showcasing some of my best projects.",
    openGraph: {
        title: "AlessandroCodes",
        description: "Showcasing the projects I've recently worked on.",
        url: "https://www.alessandrocodes.com",
        siteName: "AlessandroCodes",
        images: [
            {
                url: "https://alessandrocodes.netlify.app/assets/openGraphImage.PNG",
                width: 1200,
                height: 630,
                alt: "3D Portfolio of Alessandro Battiato",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
