export default [{
    // ESM
    input:"index.js",
    plugins: [],
    output: {
        file: "dist/index.module.js",
        format: "esm",
        exports: "named",
        sourcemap: false,
    }
}]