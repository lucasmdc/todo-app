const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

function getRelativePath () {
    if(arguments.length === 0) {
        return __dirname
    } 

    return path.resolve(__dirname, ...Array.from(arguments))
}

module.exports = {
    mode: 'development',
    entry: getRelativePath('src', 'index.jsx'),
    output: {
        path:  getRelativePath('public'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: getRelativePath('node_modules')
        }
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'app.css'
        })
    ],  
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader, 
                        options: {
                            publicPath: getRelativePath('public'),
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                type: 'asset/inline'
            }
        ]
    }
}