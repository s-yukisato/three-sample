module.exports = {
    // development or production
    mode: "production",

    entry: "./src/index.js",
    output: {
        path: `${__dirname}/docs/js`,
        filename: "bundle.js"
    }
};