import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? "/Eita-Daa/" : "/",
  plugins: [
    babel({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      presets: [reactCompilerPreset()],
      plugins: ["module:@preact/signals-react-transform"],
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@landing-page": path.resolve(__dirname, "./src/pages/landing-page"),
    },
  },
  css: {
    transformer: "lightningcss",
  },
  build: {
    cssMinify: "lightningcss",
  },
});