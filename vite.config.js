import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sole-ai-nexus-main-v2/", // 👈 your repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 enables "@/..." imports
    },
  },
});
