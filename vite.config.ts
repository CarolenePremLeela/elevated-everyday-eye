import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Small plugin to create 404.html for GitHub Pages SPA fallback
function copyIndexTo404Plugin() {
  return {
    name: "copy-index-to-404",
    closeBundle() {
      try {
        const distDir = path.resolve(__dirname, "dist");
        const indexPath = path.join(distDir, "index.html");
        const targetPath = path.join(distDir, "404.html");
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, targetPath);
          // eslint-disable-next-line no-console
          console.log("Created 404.html for SPA fallback.");
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("Failed to create 404.html:", e);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/elevated-everyday-eye/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), mode === "production" && copyIndexTo404Plugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
