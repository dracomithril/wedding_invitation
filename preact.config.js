const webpack = require('webpack');
const preactCliSvgLoader = require('./preact-cli-svg-loader');

export default function (config, env, helpers) {
	preactCliSvgLoader(config, helpers);
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env.VERSION': JSON.stringify(process.env.npm_package_version)
		}));
}
