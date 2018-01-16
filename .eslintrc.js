module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecoratos": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": 0,
        "semi": 0,
        "eol-last": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "one-var": 0,
        "no-unused-vars": 1,
        "react/prop-types": 1,
        "no-shadow": 0,
        "no-console": 0,
        "indent": 0,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "jsx-quotes": 0,
        "arrow-parens": 0,
        "react/prefer-stateless-function": 0
    }
};