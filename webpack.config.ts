import webpack from 'webpack';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const webpackConfig: webpack.Configuration = {
    entry: {
        app: path.join(__dirname, 'src/index.ts'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new CleanWebpackPlugin({})],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    target: 'node',
};

export default webpackConfig;
