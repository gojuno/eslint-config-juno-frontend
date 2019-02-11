module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  "plugins": ["jest"],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "prefer-const": "warn",
    "react/prop-types": ["warn", {
      "ignore": ["dispatch"]
    }],
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    "react/jsx-no-target-blank": "warn",

    // Jest
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
  "globals": {
    "__REVISION__" : false
  }
}
