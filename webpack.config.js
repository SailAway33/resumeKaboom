<<<<<<<<<<<<<<  ✨ Codeium Command ⭐ >>>>>>>>>>>>>>>>
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            require('terser-webpack-plugin'),
        ],
    },
    plugins: [
        ...[],
        new (require('vite-plugin-webpack'))(),
    ],
    resolve: {
        alias: {
            kaboom: 'kaboom',
        },
    },
};

<<<<<<<  7ee28fe6-ec1b-4ff8-9f94-9d457e423149  >>>>>>>