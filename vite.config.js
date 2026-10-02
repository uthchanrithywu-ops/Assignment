import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  // GitHub Pages serves this repository from a subpath; Vercel serves it at the domain root.
  base: process.env.VERCEL ? "/" : "/Assignment/",
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
});
