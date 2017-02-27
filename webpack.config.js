module.exports = {
    entry: "./src/ts/main.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/assets"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "eval-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" }
        ]
    },
    devServer: { inline: true }
};