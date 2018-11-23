module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "prefer-const": "warn",
    "react/prop-types": ["enabled", {
      "ignore": ["dispatch"]
    }],
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }]
  },
  "globals": {
    "__REVISION__" : false
  }
}
