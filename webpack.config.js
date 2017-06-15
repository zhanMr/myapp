var webpack = require('webpack');
module.exports = {
    entry: {
        home: "./public/javascripts/home/entry.js",
        vendor: ['react', 'react-dom']
    },
    output: {
        path: __dirname,
        filename: "./public/javascripts/[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};