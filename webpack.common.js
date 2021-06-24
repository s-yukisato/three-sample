const path = require('path');
const outputPath = path.resolve(__dirname,'docs/js');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js', // エントリポイント

    output: {
        path: outputPath,
        filename: 'bundle.js' // バンドル後のファイル
    },

    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist/'),
    //     inline: true,
    //     hot: true
    // }
}