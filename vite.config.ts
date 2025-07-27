import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/The-Cook-App",
  plugins: [react(), tailwindcss()],
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
