var path = require('path');
var webpack = require('webpack');


module.exports = {

    devtool: 'inline-source-map',
    entry: { main: './index.js' },


    output: {
        filename: '[name].js',
    },
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }

};
