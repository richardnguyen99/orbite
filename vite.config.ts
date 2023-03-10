import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src", "components"),
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@typings": path.resolve(__dirname, "src", "typings"),
      "@hooks": path.resolve(__dirname, "src", "hooks"),
      "@utils": path.resolve(__dirname, "src", "utils"),
      "@features": path.resolve(__dirname, "src", "features"),
    },
  },
});
