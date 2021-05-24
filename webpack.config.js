const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileChanger = require("webpack-file-changer");
const package = require("./package.json");
const build = process.argv.includes('-p');
const paths = {
	app: path.resolve(__dirname, "app"),
	node_modules: path.resolve(__dirname, "node_modules")
};

const webpackConf = {
	entry: "./app/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
		modules: [paths.app, paths.node_modules],
		alias: {
			"karcin-ui": path.resolve(__dirname, "app/components/karcin-ui/index.tsx")
		}
	},
	module: {
		rules: [
			{ test: /\.tsx$/, loader: "ts-loader" },
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { url: false, sourceMap: true }
					},
					{
						loader: "sass-loader",
						options: { sourceMap: true }
					},
				],
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{ from: "./assets", to: "./" }]
		}),
		new MiniCssExtractPlugin({ filename: "css/styles.css" })
	]
};

if ( build ){
	webpackConf.mode = "production";
	webpackConf.plugins.push(
		new FileChanger({
			change: [
				{
					file: "./index.html",
					parameters: {
						"bundle.js": "bundle.js?v=" + package.version,
						"config.js": "config.js?v=" + package.version,
						"styles.css": "styles.css?v=" + package.version,
						"\\[version\\]": package.version,
						"\\[versionDate\\]": new Date().getTime()
					}
				}
			]
		})
	);
}

module.exports = webpackConf;