const plugins = [
	["module-resolver", {
		"root": ["./"],
		"extensions": [".js"],
		"alias": {
			"$Components": "./src/components",
			"$Rreducers": "./src/reducers",
			"$LIB": "./src/containers/SbSports/lib",
			"@": "./src"
		}
	}],
  "react-native-reanimated/plugin"
];
if (process.env.NODE_ENV === 'production') {
  plugins.push("transform-remove-console")
}

module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins
};
