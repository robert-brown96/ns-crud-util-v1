module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    plugins: ["suitescript"],
    extends: ["eslint:recommended", "plugin:suitescript/all"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: { "linebreak-style": ["error", "unix"], semi: ["error", "always"] }
};
