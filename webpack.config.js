const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/client/client.js'
    ],
    output: {
        path: path.join(__dirname, '/src/client/assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' },
                    ],
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            disable: false,
            allChunks: true,
        }),
    ],
    devServer: {
        contentBase: './src/client'
    },
};
