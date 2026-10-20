import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // /reservar y /reservar/materia conviven: cada página va en su carpeta (reservar/index.html)
  ssgOptions: { dirStyle: "nested" },
  server: { proxy: { "/api": process.env.API_URL || "http://localhost:8000" } },
});
