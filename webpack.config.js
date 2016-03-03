module.exports = {
	entry : [
	'./app/index.js'
	],
	module : {
		loaders: []
	},
	output: {
		filename : 'index_bundle.js',
		path: __dirname + '/dist'
	}
}