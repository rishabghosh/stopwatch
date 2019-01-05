module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },

    "extends": "eslint:recommended",

    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },

    "plugins": [ "html" ],
    "settings": {
        "html/report-bad-indent": "error",
    },

    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
};