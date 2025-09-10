import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const isReplitDev =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined;

export default defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()];

  if (isReplitDev) {
    const cartographer = await import("@replit/vite-plugin-cartographer").then(
      (m) => m.cartographer(),
    );
    plugins.push(cartographer);
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve("client/src"),
        "@shared": path.resolve("shared"),
        "@assets": path.resolve("attached_assets"),
      },
    },
    root: path.resolve("client"),
    build: {
      outDir: path.resolve("dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
