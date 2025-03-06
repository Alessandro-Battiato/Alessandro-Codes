import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-space": "#0A0527",
                "electric-blue": "#6B6CFF",
                "pastel-violet": "#8B5CF6",
                "intense-pink": "#FF66B2",
            },
        },
    },
    plugins: [],
} satisfies Config;
