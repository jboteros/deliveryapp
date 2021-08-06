module.exports = {
  presets: ["module:metro-react-native-babel-preset", "@babel/preset-flow"],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    [
      "module-resolver",
      {
        alias: {
          "@": "./app",
        },
      },
    ],
  ],
  env: {
    test: {
      // requires to have non-transpiled node_module to work
      plugins: ["transform-es2015-modules-commonjs"],
    },
  },
};
