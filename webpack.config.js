var webpack = require('webpack'),
    path = require('path'),
    buildPath = path.resolve(__dirname, 'src', '_build');

module.exports = {
    _buildPath: buildPath,
    entry: {
        app: './src/dragster.app.js'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: 'src/_build/',
        path: buildPath
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        unsafeCache: true
    },
    module: {
        noParse: /bower_components/,
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/(node_modules)/, /(bower_components)/],
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader!ts-loader',
                exclude: [/(node_modules)/, /(bower_components)/]
            },
            {
                test: /\.html$/,
                loader: 'raw!html-minify'
            }
        ]
    },
    devtool: 'eval-source-map'
};
