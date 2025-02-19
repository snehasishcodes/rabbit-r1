import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	assetsInclude: [
		"**/*.glb"
	],
	plugins: [react()],
	resolve: {
		extensions: [".js", ".jsx"],
	},
	esbuild: {
		loader: "jsx",
		include: /src\/.*\.[tj]sx?$/,
	}
});
