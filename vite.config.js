import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        "babel-plugin-styled-components",
                        {
                            displayName: false,
                            fileName: false,
                            namespace: "ot-babushki",
                        },
                    ],
                ],
            },
        }),
        tailwindcss(),
    ],
});
