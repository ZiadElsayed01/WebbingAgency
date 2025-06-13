import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {
          colors: {
            primary: "#1F7099",
            gradient: "#A2C6D9",
            mainBg: "#FFFFFF",
            secondBg: "#EFF6FF",
            mainText: "#000000",
            secondText: "#6A6A6A",
          },
          fontFamily: {
            oxanium: ["Oxanium", "sans-serif"],
          },
          padding: {
            main: "1.5rem",
          },
        },
      },
    }),
  ],
});
