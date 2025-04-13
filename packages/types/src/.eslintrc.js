const ts = require("typescript");

module.exports = {
    root: true,
    extends: ["@repo/eslint-config/library.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRoot: __dirname,
    },
}