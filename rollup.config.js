export default [{
    // ESM
    input:"index.js",
    plugins: [],
    output: {
        file: "dist/index.js",
        format: "esm",
        exports: "named",
        sourcemap: false,
    }
}]