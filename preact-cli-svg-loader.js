const updateRules = ({ config, helpers }) => ([loaderName, test]) => {
	const loader = helpers.getLoadersByName(config, loaderName);
	loader.map(entry => entry.rule.test = test);
};
const LOADERS = [
	['url-loader',/\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i],
	['file-loader',/\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i],
	['raw-loader',/\.(xml|html|txt|md)$/]
];

const svgLoader = {
	test: /\.svg$/,
	use: ['preact-svg-loader']
};

module.exports = (config, helpers) => {
	LOADERS.forEach(updateRules({ config, helpers }));
	config.module.rules.push(svgLoader);
};
