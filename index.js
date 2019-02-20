module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  "plugins": ["jest", "react-hooks"],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    "react/jsx-no-target-blank": "warn",
    "react/no-unescaped-entities": "warn",
    "react/prop-types": ["warn", {
      "ignore": ["dispatch"]
    }],
    "react-hooks/rules-of-hooks": "error",
    "prefer-const": "warn"
  },
  "globals": {
    "__REVISION__" : false
  }
}
