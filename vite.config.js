const baseUrl = import.meta.env.VITE_BLOG_BASE_URL;
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: baseUrl,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	plugins: [react()],
	build: {
		outDir: "./build",
	},
});
