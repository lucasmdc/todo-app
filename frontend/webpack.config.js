const path = require('path')

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
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
                
            }
        ]
    }
}