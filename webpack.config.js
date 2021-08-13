const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//vai importar o plugin do html
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    output: {
        path: path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer:{
        contentBase: path.resolve(__dirname , 'public'),
        // port: 3000,
    },
    resolve: {
        extensions: ['.js', '.jsx']//arquivo que podem ser lidos
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },//quando importar um arquivo jsx de node_modules esse arquivo não fará a conversão
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader' , 'css-loader','sass-loader']//dependencias do css
            }
        ],
    }
}