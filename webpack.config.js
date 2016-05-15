var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: { path: __dirname, filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
		      {
		        test: /\.(png)$/,
		        exclude: /node_modules/,
		        loader: 'url-loader?limit=10000'
		      },
		      { 
		        test: /\.jpg$/, 
		        loader: "file-loader" 
		      },{
		        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/font-woff'
		      },
		      {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/octet-stream'
  			},{
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'file'
		      },
		      {
		        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=image/svg+xml'
		      }
		]
	},
};
