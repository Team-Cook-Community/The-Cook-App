import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import type { VitePWAOptions } from "vite-plugin-pwa";

const manifestForPWA: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touch-icon.png"],
  manifest: {
    name: "Bubbly Recipe",
    short_name: "Bubbly Recipe",
    description:
      "Discover and share soul-warming recipes with friends and fellow food lovers.",
    icons: [
      {
        src: "/The-Cook-App/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/The-Cook-App/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/The-Cook-App/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/The-Cook-App/maskable-icon.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#FFFAFA",
    background_color: "#FFFAFA",
    display: "standalone",
    start_url: "/The-Cook-App/",
    scope: "/The-Cook-App/",
    orientation: "portrait",
  },
};

// https://vite.dev/config/
export default defineConfig({
  base: "/The-Cook-App",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      ...manifestForPWA,
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@components": path.resolve(__dirname, "src/components"),
      "@data": path.resolve(__dirname, "src/data"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
