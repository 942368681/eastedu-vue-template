module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.mode === 'prod' ? 1 : 1,
        'no-debugger': process.env.mode === 'prod' ? 1 : 1,
        'no-undef': 1,
        'no-unused-vars': 1
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};