import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Safely try loading lovable-tagger
let componentTaggerPlugin = null;
if (process.env.NODE_ENV !== "production") {
  try {
    const { componentTagger } = await import("lovable-tagger");
    componentTaggerPlugin = componentTagger();
  } catch (err) {
    console.warn("lovable-tagger not installed (development only). Skipping plugin.");
  }
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), componentTaggerPlugin].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
