const path = require('path')
const webpack = require('webpack')

const devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

const alias = {
	'~': __dirname,
	'icons': path.resolve('./public/img/icons'),
	'styles': path.resolve('./styles')
}
let aliasEvents = ['EventPluginHub', 'EventConstants', 'EventPluginUtils', 'EventPropagators',
	'SyntheticUIEvent', 'CSSPropertyOperations', 'ViewportMetrics']

for (let event of aliasEvents) {
	alias['react/lib/' + event] = path.join(__dirname, './node_modules/react-dom/lib', event)
}

module.exports = {
	moduleMode: true,
	apps: {
		main: path.join(__dirname, '/main')
	},
	backendApps: {
		server: path.join(__dirname, '/server')
	},
	frontend: {
		devtool: 'source-map',
		classPrefix: true
	},
	backend: {
		devtool: (process.env.fast ? 'cheap-module-eval-source-map' : 'source-map'),
		uglify: false
	},
	plugins: [
		new webpack.DefinePlugin({'process.env': {
			NODE_ENV: `'${process.env.NODE_ENV}'`,
			API_URL: `'${process.env.API_URL}'`
		}}),
		devFlagPlugin
	],
	resolve: {
		alias: alias
	},
	stylus: {
		import: []
	},
	webpackPort: process.env.DEVSERVER_PORT || 3010
}