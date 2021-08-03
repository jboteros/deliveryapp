module.exports = {
  root: true,
  plugins: ["import"],
  extends: ["@react-native-community", "prettier"],
  rules: {
    "no-shadow": 0,
    "no-unused-vars": "error",
    "react-native/no-inline-styles": 0,
    "react-native/no-unused-styles": "warn",
    "import/no-default-export": "warn",
  },
  globals: {
    Intl: true,
    jest: true,
  },
};
