module.exports = {
    entry: "./app/App.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015','react']
                }
            }
        ]
    },
    devServer: {
        contentBase: "./public"
    }
}