const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/i,
                use: "babel-loader",
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
    mode: 'development',
    devServer: {
        port: 3000
    }
};
