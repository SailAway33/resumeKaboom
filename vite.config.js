import { defineConfig } from "vite";

export default defineConfig({
    base: "./resumeKaboom/",
    build: {
        minify: "terser",
    },
});