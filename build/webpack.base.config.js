const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV==='development';

function resolve (dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = {
	context: path.resolve(__dirname, '../'),
	output: {
		//publicPath: '../',
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: resolve('dist')
	},
	resolve: {
		alias: {
			'@': resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: resolve('src/js'),
				options: {
					presets: ['env']
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					devMode?'style-loader':{
						loader:MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					'css-loader',
					'sass-loader',
					//'postcss-loader',
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'img/[name].[hash:7].[ext]'
				}
			},
			{
                test: /\.(mp4)(\?.*)?$/,
                use:[{
                    loader:'url-loader',
                    options:{
                       
                    }
                }]
            }
		]
	},
	optimization: {
		//用于分离公共js模块
		splitChunks: {
			chunks: 'all',
			name: 'js/common'
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
		    filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
		    chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
		}),
		new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
		new CleanWebpackPlugin(['dist'],{root: path.resolve(__dirname, '../')}),
	]
};
