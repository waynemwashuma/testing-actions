import { defineConfig } from "vite"

export default defineConfig({
    server: {
        port: 8082,
        strictPort: true,
        open: "/example/index.html",
    }
})