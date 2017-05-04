const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'],

    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: path.join(__dirname, '/public/'),
    },

    devtool: 'eval-source-map',

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
                            plugins: ["react-hot-loader/babel"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|svg|eot|woff|woff2|ttf)$/,
                use: 'url-loader?limit=8192'
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
